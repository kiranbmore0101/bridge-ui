## @bridge-ui/plugin-chart-table

[![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-table.svg?style=flat-square)](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-table.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-bridge/bridge-ui-plugins.svg?path=packages%2Fbridge-ui-plugin-chart-table&style=flat-square)](https://david-dm.org/apache-bridge/bridge-ui-plugins?path=packages/bridge-ui-plugin-chart-table)

This plugin provides Table for Bridge.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import TableChartPlugin from '@bridge-ui/plugin-chart-table';

new TableChartPlugin().configure({ key: 'table' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-bridge.github.io/bridge-ui-plugins/?selectedKind=plugin-chart-table)
for more details.

```js
<SuperChart
  chartType="table"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
