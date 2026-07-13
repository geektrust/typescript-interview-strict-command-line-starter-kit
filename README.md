# Introduction

This is a skeleton project structure which will help you start solving the problem right away.

## Tools available to you.
- Node.js

## How to build your solution

- Run `npm ci --include=dev` to install the dependencies.
- Run `tsc --project tsconfig.json` to compile the typescript code.

## Running the project 

- After building your solution as per [How to build your solution](#how-to-build-your-solution) you can now run the `main.js` against inputs. 
- To run, issue the command `cd dist && node main.js '[cmd [options...]' 'cmd [options...]'...]` where
    - **cmd** is a valid problem specific command.
    - **options** are optional **cmd** specific options.

    Example: `cd dist && node main.js 'ADD APPLE 2' 'ADD ORANGE 3' 'SHOW'` <br>

    Note: Each full command should be wrapped in single quotes(').

## Checking for correctness 

- You can click on the `Run IO` button from the interview application, which will run your solution against some preconfigured inputs and show you the output.