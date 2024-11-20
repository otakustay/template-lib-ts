# TypeScript Library Template

This is a template repository for my own TypeScript library projects.

1. Use `git commit --amend` to change the initial commit message to "build: initialize repository".
2. Remove `"private": true` from `package.json` if this is a publishable package.
3. Update `name` and `description` field in `package.json`.
4. Goto repository settings page, in the "General" tab:
   1. In settings page, check "Allow auto-merge" in "Pull Rquests" section.
   2. In settings page, unceck "Allow merge commits" in "Pull Requests" section.
5. Goto repository settings page, in the "Secrets and variables - Actions" tab:
   1. Add a repository secret named `RELEASE_PLEASE_TOKEN` with generated github token.
   2. Add a repository secret named `NPM_TOKEN` with generated npm token.
   3. Add a repository secret named `CODECOV_TOKEN` with generated [codecov](https://app.codecov.io/) token.
6. Add this repository to `Renovate` and `Codecov` GitHub Apps.
