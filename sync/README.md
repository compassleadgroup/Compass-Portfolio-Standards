# Standards Sync

When a canonical rule file changes on main in this repo, the Standards Sync workflow (.github/workflows/standards-sync.yml) opens a PR in every site repo whose local copies differ from canonical. No AI in the sync itself. It is a deterministic file copy using bash and the gh CLI.

Behavior:

- The sync only opens PRs. It never merges and never pushes to a site repo's main. Merging is done by the merge-when-green pipeline inside each site repo once the build is green.
- One fixed branch per site repo (standards-sync). Re-runs force-push that branch and update the existing open PR instead of stacking new ones.
- Repos whose files already match canonical are skipped. No empty PRs.
- PRs target main. If a site repo has no main branch, they target its default branch.
- Files named sync/*.yml or sync/*.yaml land at .github/workflows/ in each site repo. Everything else keeps its repo-root path. Current example: sync/merge-when-green.yml arrives as .github/workflows/merge-when-green.yml.

## Manifests

| File | Holds | Editing |
|---|---|---|
| sync/sites.txt | One site repo per line, org/name format | Adding a site is one new line |
| sync/files.txt | Files to copy, one per line, path in this repo | Adding a file is one new line, plus the same path added to the workflow paths list |

Blank lines and lines starting with # are skipped in both files, so a site can be commented out during a rebuild.

## Merge pipeline (merge-when-green)

sync/merge-when-green.yml is the canonical three-gate pipeline distributed to every site repo:

1. Gate 1: compliance greps. Em dash scan plus every checklist phrase parsed from the site's local FORBIDDEN_LANGUAGE.md, run against the added lines of the diff. A normal PR that edits a canonical rule file fails here by design; canon is edited in this repo only.
2. Gate 2: npm ci and npm run build.
3. Gate 3: Claude compliance review through claude-code-action with a structured PASS or FAIL verdict, posted as a PR comment.

A PR that passes every gate squash-merges itself. Standards-sync PRs that touch only canonical rule files skip Gates 1 and 3 (canonical text is reviewed where it merges, in this repo, and the rule files themselves name the banned phrases) and merge on a green build.

Requirements:

- CLAUDE_CODE_OAUTH_TOKEN must be available to Actions in every site repo. Set it once as an organization secret with access to all repositories. If the org is on the GitHub Free plan and Gate 3 reports a missing token on a private site repo, organization secrets are not reaching private repos on that plan; add the same secret per repo on the private sites or make them public.
- Site repo main branches must not have a branch protection rule requiring approving reviews, or the pipeline cannot merge.
- Do not edit merge-when-green.yml inside a site repo. Edit sync/merge-when-green.yml here and let the sync distribute it.

## One-time setup: SYNC_TOKEN

The default Actions token cannot touch other repos, so the sync workflow needs a fine-grained personal access token stored as a repo secret. About five minutes in a browser. Never paste the token into any chat or file.

1. GitHub, Settings, Developer settings, Fine-grained personal access tokens, Generate new token.
2. Name: standards-sync. Expiration: one year. Set a calendar reminder to renew.
3. Repository access: Only select repositories. Select every repo in sync/sites.txt plus Compass-Portfolio-Standards.
4. Permissions: Contents read and write, Pull requests read and write, Workflows read and write. Nothing else. Workflows is required because the sync pushes .github/workflows/merge-when-green.yml; without it every push is rejected.
5. Generate, copy the value.
6. In Compass-Portfolio-Standards: Settings, Secrets and variables, Actions, New repository secret. Name: SYNC_TOKEN. Paste the value. Save.

If the token already exists without the Workflows permission: GitHub, Settings, Developer settings, Fine-grained personal access tokens, standards-sync, add Workflows read and write, save. No new secret needed.

## Adding the next site

1. Add one line to sync/sites.txt (org/repo-name).
2. Add the new repo to the standards-sync token: GitHub, Settings, Developer settings, Fine-grained personal access tokens, standards-sync, edit Repository access. A token scoped to selected repositories does not cover new repos automatically. Skipping this step makes the workflow fail on the new repo.
3. Merging the sites.txt change triggers a run, and the new site gets its first sync PR immediately.

## Testing

1. Run it manually: Actions tab, Standards Sync, Run workflow. This is the workflow_dispatch trigger and needs no file change.
2. Expected: a PR titled "Standards sync: updated canonical rule files" in every site repo whose rule files differ, and no PR in repos already current.
3. Each sync PR then builds and merges itself through merge-when-green. Spot-check two: confirm the diff touches only rule files and the pipeline's squash merge landed.
