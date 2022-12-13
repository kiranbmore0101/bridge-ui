# Debug Bridge plugins in Bridge app

## Activate plugins for local development

1. First, make sure you have run `npm ci` and `npm run build` in `bridge-ui` or your own plugin
   repo.
2. Go to [bridge-frontend](https://github.com/apache/bridge/tree/master/bridge-frontend), use
   `npm link` to create a symlink of the plugin source code in `node_modules`:

   ```sh
   cd bridge/bridge-frontend
   # npm link ~/path/to/your/plugin
   npm link ../../bridge-ui/plugins/plugin-chart-word-cloud
   ```

3. Start developing with webpack dev server:

   ```sh
   npm run dev-server
   ```

   The dev server will automatically build from the source code under `path/to/your-plugin/src` and
   watch the changes.

## Deactivate plugins

To deactivate a plugin, simply run `npm ci` in `bridge/bridge-frontend` again.
