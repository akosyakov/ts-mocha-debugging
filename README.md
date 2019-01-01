# Simple TypeScript setup to debug Mocha tests from VS Code

A TypeScript setup to run and debug Mocha tests without extra configuration and runtime overhead of tools like ts-node.

<img alt="Debugging TypeScript Mocha Tests" src="https://user-images.githubusercontent.com/3082655/50573829-99274f80-0ddb-11e9-9c70-b88520888678.gif" height="640" />

You can try it out with VS Code or in your browser with Gitpod (requires OAuth with GitHub):

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/akosyakov/ts-mocha-debugging)

## Installing

Install `typescript` and `mocha` from cli with:

    yarn

*Note: Gitpod auto installs dependencies on the workspace initialization, see [.gitpod.yml](.gitpod.yml)*

## Building

Code and tests can be compiled from cli with:

    yarn watch

*Note: Gitpod auto starts watching on each workspace startup, see [.gitpod.yml](.gitpod.yml)*

## Running tests

All tests can be run from cli with:

    yarn test

## Debugging tests

An individual ts spec file can be debugged in VS Code or Gitpod with `Mocha Tests` configuration:
- select a ts spec file, i.e. [repo.spec.ts](src/repo.spec.ts);
- add a breakpoint;
- press `F5` to run tests in the selected file.

[tsc is configured](tsconfig.json) to compile to `lib` folder and produce source maps.
[Mocha Test](.vscode/launch.json) configuration looks up source maps from the `lib` folder via `outFiles` property,
and executes tests from all files matching `**/${fileBasenameNoExtension}.js`,
e.g. for `src/repo.spec.ts` files matching `**/repo.spec.js` are included.
