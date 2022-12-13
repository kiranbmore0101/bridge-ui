## Using Storybook

You can demo your changes by running the storybook demo locally with the following commands:

```sh
npm ci
npm run build
npm run storybook
```

The Storybook will
[automatically build from the source code](https://github.com/apache-bridge/bridge-ui/blob/master/packages/bridge-ui-demo/.storybook/main.js#L49-L58)
when package names start with `@bridge-ui/`.
