## @bridge-ui/legacy-plugin-chart-word-cloud

[![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-word-cloud.svg?style=flat-square)](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-word-cloud.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-bridge/bridge-ui-plugins.svg?path=packages%2Fbridge-ui-legacy-plugin-chart-word-cloud&style=flat-square)](https://david-dm.org/apache-bridge/bridge-ui-plugins?path=packages/bridge-ui-legacy-plugin-chart-word-cloud)

This plugin provides Word Cloud for Bridge.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import WordCloudChartPlugin from '@bridge-ui/legacy-plugin-chart-word-cloud';

new WordCloudChartPlugin().configure({ key: 'word-cloud' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-bridge.github.io/bridge-ui-plugins/?selectedKind=plugin-chart-word-cloud)
for more details.

```js
<SuperChart
  chartType="word-cloud"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
