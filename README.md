# TypeScript Library Template

This is a template repository for my own TypeScript library projects.

1. Remove `"private": true` from `package.json` if this is a publishable package.
2. Update `name` and `description` field in `package.json`.
3. Use `git commit --amend` to change the initial commit message to "build: initialize repository".
4. Goto repository settings page, in the "General" tab:
   1. In settings page, check "Allow auto-merge" in "Pull Rquests" section.
   2. In settings page, unceck "Allow merge commits" in "Pull Requests" section.
5. Goto repository settings page, in the "Secrets and variables - Actions" tab, and add these secrets:
   1. `RELEASE_PLEASE_TOKEN` with generated github token.
   2. `NPM_TOKEN` with generated npm token.
   3. `CODECOV_TOKEN` with generated [codecov](https://app.codecov.io/) token.
   4. `RELEASE_COMMENTER_TOKEN` with generated github token.
