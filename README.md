[![codecov](https://codecov.io/gh/wangziling100/Monorepo-Template/branch/master/graph/badge.svg)](https://codecov.io/gh/wangziling100/Monorepo-Template)

# Monorepo-Template

The project provides a monorepo template with a sample module and some useful workflows.

## Workflows

Some useful workflows are already integrated in this template. It includes a CI and Publish workflow, a commit lint check workflow and a release workflow.To use these workflows, some configeration files are required.

### `AutoCI`
Through this workflow you can control your CI pipeline in GitHub Action. But at first setting a configeration file is necessary, more information see [here](https://github.com/wangziling100/AutoCI). A test coverage report is also performed during this workflow, more information see [here](https://codecov.io). If the CI pipeline is successfully conducted, a publish process will start. This process publish your project with a new version, which is generated according to your commit information automatically. More information [here](https://github.com/wangziling100/AutoPublish).<br />

### `Release Drafter`
This action generates a release-draft after each push or PR. More information [here](https://github.com/marketplace/actions/release-drafter)<br />

### `Commit lint`
It works not very well, may change later.

## Files

Some files you should change before you use this template, like package.json.
