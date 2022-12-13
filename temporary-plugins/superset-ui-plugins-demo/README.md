## @bridge-ui/demo

[![David (path)](https://img.shields.io/david/apache-bridge/bridge-ui-plugins.svg?path=packages%2Fbridge-ui-demo&style=flat-square)](https://david-dm.org/apache-bridge/bridge-ui-plugins?path=packages/bridge-ui-demo)

Storybook of `@bridge-ui-plugins` packages. See it live at
[apache-bridge.github.io/bridge-ui-plugins](https://apache-bridge.github.io/bridge-ui-plugins)

### Development

#### Run storybook

To view the storybook locally, you should:

1. Clone [bridge-ui-plugins](https://github.com/apache-bridge/bridge-ui-plugins) repo.
2. Run `npm ci && npm build` in the `bridge-ui-plugins` root directory.
3. Change to the demo directory `cd packages/bridge-ui-plugins-demo`.
4. Run `npm run storybook`. This will open up a dev server at http://localhost:9001.

#### Adding new stories

###### Existing package

If stories already exist for the package you are adding, simply extend the `examples` already
exported for that package in the `storybook/stories/<package>/index.js` file.

###### New package

If you are creating stories for a package that doesn't yet have any stories, follow these steps:

1. Add any new package dependencies via `npm install <package>`, but if it is `@bridge-ui/*`
   packages, manually add it to `peerDependencies`.

2. Create a new folder that mirrors the package name

   > e.g., `mkdir storybook/stories/bridge-ui-color/`

3. Add an `index.js` file to that folder with a default export with the following shape:

> you can use the `|` separator within the `storyPath` string to denote _nested_ stories e.g.,
> `storyPath: '@bridge-ui/package|Nested i|Nested ii'`

```javascript
 default export {
   examples: [
     {
       storyPath: <string>,
       storyName: <string>,
       renderStory: <func> () => node,
     },
     ...
   ]
 };
```
