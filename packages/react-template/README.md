

[![codecov](https://codecov.io/gh/wangziling100/React-Template/branch/master/graph/badge.svg)](https://codecov.io/gh/wangziling100/React-Template)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test:react`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test`

Launches the test runner without watch mode.<br />

### `yarn lint`

Eslink checks your code.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Workflows

Some useful workflows are already integrated in this template. It includes a CI and Publish workflow, a commit lint check workflow and a release workflow.To use these workflows, some configeration files are required.

### `AutoCI`
Through this workflow you can control your CI pipeline in GitHub Action. But at first setting a configeration file is necessary, more information see [here](https://github.com/wangziling100/AutoCI). A test coverage report is also performed during this workflow, more information see [here](https://codecov.io). If the CI pipeline is successfully conducted, a publish process will start. This process publish your project with a new version, which is generated according to your commit information automatically. More information [here](https://github.com/wangziling100/AutoPublish).<br />

### `Release Drafter`
This action generates a release-draft after each push or PR. More information [here](https://github.com/marketplace/actions/release-drafter)<br />

### `Commit lint`
It works not very well, may change later.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
