# TypeScript Library Template

This is a template repository for my own TypeScript library projects.

1. Run `npx npm-check-updates -u` to update all dependencies to latest version.
2. Remove `"private": true` from `package.json` if this is a publishable package.
3. Update `name` and `description` field in `package.json`.
4. Run `rm package-lock.json && npm install` to update `package-lock.json`.
5. Run `git add` to stage changes.
6. Use `git commit --amend` to change the initial commit message to "build: initialize repository".
7. Goto repository settings page, in the "General" tab:
   1. check "Allow auto-merge" in "Pull Rquests" section.
   2. unceck "Allow merge commits" in "Pull Requests" section.
8. Goto repository settings page, in the "Secrets and variables - Actions" tab, and add these secrets:
   1. `RELEASE_PLEASE_TOKEN` with generated github token.
   2. `NPM_TOKEN` with generated npm token.
   3. `CODECOV_TOKEN` with generated [codecov](https://app.codecov.io/) token.
   4. `RELEASE_COMMENTER_TOKEN` with generated github token.
