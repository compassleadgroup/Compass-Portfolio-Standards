# Standards Sync

When a canonical rule file changes on main in this repo, the Standards Sync workflow (.github/workflows/standards-sync.yml) opens a PR in every site repo whose local copies differ from canonical. The operator merges per site. No AI in the loop. It is a deterministic file copy using bash and the gh CLI.

Behavior:

- PRs only. The workflow never merges and never pushes to a site repo's main.
- One fixed branch per site repo (standards-sync). Re-runs force-push that branch and update the existing open PR instead of stacking new ones.
- Repos whose files already match canonical are skipped. No empty PRs.
- PRs target main. If a site repo has no main branch, they target its default branch.

## Manifests

| File | Holds | Editing |
|---|---|---|
| sync/sites.txt | One site repo per line, org/name format | Adding a site is one new line |
| sync/files.txt | Files to copy, one per line, repo-root relative | Adding a file is one new line, plus the same path added to the workflow paths list |

Blank lines and lines starting with # are skipped in both files, so a site can be commented out during a rebuild.

## One-time setup: SYNC_TOKEN

The default Actions token cannot touch other repos, so the workflow needs a fine-grained personal access token stored as a repo secret. About five minutes in a browser. Never paste the token into any chat or file.

1. GitHub, Settings, Developer settings, Fine-grained personal access tokens, Generate new token.
2. Name: standards-sync. Expiration: one year. Set a calendar reminder to renew.
3. Repository access: Only select repositories. Select every repo in sync/sites.txt plus Compass-Portfolio-Standards.
4. Permissions: Contents read and write, Pull requests read and write. Nothing else.
5. Generate, copy the value.
6. In Compass-Portfolio-Standards: Settings, Secrets and variables, Actions, New repository secret. Name: SYNC_TOKEN. Paste the value. Save.

## Adding the next site

1. Add one line to sync/sites.txt (org/repo-name).
2. Add the new repo to the standards-sync token: GitHub, Settings, Developer settings, Fine-grained personal access tokens, standards-sync, edit Repository access. A token scoped to selected repositories does not cover new repos automatically. Skipping this step makes the workflow fail on the new repo.
3. Merging the sites.txt change triggers a run, and the new site gets its first sync PR immediately.

## Testing

1. Run it manually: Actions tab, Standards Sync, Run workflow. This is the workflow_dispatch trigger and needs no file change.
2. Expected: a PR titled "Standards sync: updated canonical rule files" in every site repo whose rule files differ, and no PR in repos already current.
3. Spot-check two PRs, confirm the diffs touch only the rule files, merge them.
