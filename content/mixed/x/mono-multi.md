### mono
- houses multiple projects/packages
- decision is dependent on tech also(java, etc)
- every pkg contains own package.json since every package is full-fledged product
  - pkgs cn have dependency relation b/w each other
  - implemented by symlinks
  - - lerna and yarn workspaces give us the ability to build libraries and apps in a single repo without forcing us to publish to npm or other registries
  - The beauty behind these technologies is that they can find package dependencies by analyzing package.json files located at each project’s root folder.
  - Thereby, these tools make it obsolete to manually create symlinks or use "low-level" npm link directly.
  - components shared locally therefore faster code-test-debug cycles.

### ways
1. install & build in each folder
2. lerna with npm. installs node_modules for each project by single command
  ```sh
  lerna bootstrap
  ```
3. lerna with yarn
    ```
    [lerna.json]
    npmClient: "yarn"
    ```
4. yarn workspaces
   - creates only 1 node_modules, hoists the other node_modules to root
    ```
    [package.json]
    "workspaces": [
        "projects/*"
    ]
    ```
5. lerna with yarn workspace
   ```
    [lerna.json]
    "npmClient": "yarn",
    "useWorkspaces": true
    ```
    - You solely use yarn workspaces for the Mono-Repo workflow.npm 
    - You use lerna’s utility commands to optimize managing of multiple packages, e.g., selective execution of npm scripts for testing.
    - You use lerna for publishing packages since lerna provides sophisticated features with its version and publish commands.
[Mono repo lerna yarn](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces)