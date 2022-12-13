# @bridge-ui

[![Codecov branch](https://img.shields.io/codecov/c/github/apache-bridge/bridge-ui/master.svg?style=flat-square)](https://codecov.io/gh/apache-bridge/bridge-ui/branch/master)
[![Build Status](https://img.shields.io/travis/com/apache-bridge/bridge-ui/master.svg?style=flat-square)](https://travis-ci.com/apache-bridge/bridge-ui)
[![David](https://img.shields.io/david/dev/apache-bridge/bridge-ui.svg?style=flat-square)](https://david-dm.org/apache-bridge/bridge-ui?type=dev)

**🔴This repo has been archived, and is no longer receiving issues/pull requests. Please open all new issues/PRs on the [Apache Bridge GitHub repo](http://github.com/apache/bridge).🔴**

Collection of packages that power the
[Apache Bridge](https://github.com/apache/incubator-bridge) UI, and can be used to craft custom
data applications that leverage a Bridge backend :chart_with_upwards_trend:

## Demo

Most recent release: https://apache-bridge.github.io/bridge-ui/

Current master: https://bridge-ui.now.sh/

## Packages

### Core packages

| Package                                                                                                                       | Version                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@bridge-ui/core](https://github.com/apache-bridge/bridge-ui/tree/master/packages/bridge-ui-core)                     | [![Version](https://img.shields.io/npm/v/@bridge-ui/core.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/core)                             |
| [@bridge-ui/chart-controls](https://github.com/apache-bridge/bridge-ui/tree/master/packages/bridge-ui-chart-controls) | [![Version](https://img.shields.io/npm/v/@bridge-ui/core.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/chart-controls)                   |
| [@bridge-ui/generator-bridge](https://github.com/apache-bridge/bridge-ui/tree/master/packages/generator-bridge)     | [![Version](https://img.shields.io/npm/v/@bridge-ui/generator-bridge.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/generator-bridge) |

### Chart plugin packages

`@bridge-ui/legacy-*` packages are extracted from the classic
[Apache Bridge](https://github.com/apache/incubator-bridge) and converted into plugins. These
packages are extracted with minimal changes (almost as-is). They also depend on legacy API
(`viz.py`) to function.

| Package                                                                                                                                                              | Version                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@bridge-ui/legacy-preset-chart-big-number](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-preset-chart-big-number)                     | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-preset-chart-big-number.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-preset-chart-big-number)                     |
| [@bridge-ui/legacy-preset-chart-nvd3](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-preset-chart-nvd3)                                 | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-preset-chart-nvd3.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-preset-chart-nvd3)                                 |
| [@bridge-ui/legacy-plugin-chart-calendar](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-calendar)                         | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-calendar.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-calendar)                         |
| [@bridge-ui/legacy-plugin-chart-chord](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-chord)                               | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-chord.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-chord)                               |
| [@bridge-ui/legacy-plugin-chart-country-map](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-country-map)                   | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-country-map.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-country-map)                   |
| [@bridge-ui/legacy-plugin-chart-event-flow](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-event-flow)                     | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-event-flow.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-event-flow)                     |
| [@bridge-ui/legacy-plugin-chart-force-directed](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-force-directed)             | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-force-directed.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-force-directed)             |
| [@bridge-ui/legacy-plugin-chart-heatmap](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-heatmap)                           | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-heatmap.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-heatmap)                           |
| [@bridge-ui/legacy-plugin-chart-histogram](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-histogram)                       | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-histogram.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-histogram)                       |
| [@bridge-ui/legacy-plugin-chart-horizon](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-horizon)                           | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-horizon.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-horizon)                           |
| [@bridge-ui/legacy-plugin-chart-iframe](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-iframe)                             | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-iframe.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-iframe)                             |
| [@bridge-ui/legacy-plugin-chart-markup](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-markup)                             | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-markup.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-markup)                             |
| [@bridge-ui/legacy-plugin-chart-map-box](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-map-box)                           | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-map-box.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-map-box)                           |
| [@bridge-ui/legacy-plugin-chart-paired-t-test](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-paired-t-test)               | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-paired-t-test.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-paired-t-test)               |
| [@bridge-ui/legacy-plugin-chart-parallel-coordinates](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-parallel-coordinates) | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-parallel-coordinates.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-parallel-coordinates) |
| [@bridge-ui/legacy-plugin-chart-partition](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-partition)                       | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-partition.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-partition)                       |
| [@bridge-ui/legacy-plugin-chart-pivot-table](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-pivot-table)                   | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-pivot-table.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-pivot-table)                   |
| [@bridge-ui/legacy-plugin-chart-rose](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-rose)                                 | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-rose.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-rose)                                 |
| [@bridge-ui/legacy-plugin-chart-sankey](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-sankey)                             | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-sankey.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-sankey)                             |
| [@bridge-ui/legacy-plugin-chart-sankey-loop](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-sankey-loop)                   | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-sankey-loop.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-sankey-loop)                   |
| [@bridge-ui/legacy-plugin-chart-sunburst](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-sunburst)                         | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-sunburst.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-sunburst)                         |
| [@bridge-ui/legacy-plugin-chart-treemap](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-treemap)                           | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-treemap.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-treemap)                           |
| [@bridge-ui/legacy-plugin-chart-world-map](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/legacy-plugin-chart-world-map)                       | [![Version](https://img.shields.io/npm/v/@bridge-ui/legacy-plugin-chart-world-map.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/legacy-plugin-chart-world-map)                       |

`@bridge-ui/plugin-*` packages are newer and higher quality in general. A key difference that they
do not depend on `viz.py` (which contain visualization-specific python code) and interface with
`/api/v1/query/`, a new generic endpoint instead meant to serve all visualizations, instead. Also
should be written in Typescript.

| Package                                                                                                                            | Version                                                                                                                                                                   | Note |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| [@bridge-ui/plugin-chart-word-cloud](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/plugin-chart-word-cloud) | [![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-word-cloud.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/plugin-chart-word-cloud) |      |
| [@bridge-ui/plugin-chart-table](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/plugin-chart-table)           | [![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-table.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/plugin-chart-table)           |      |
| [@bridge-ui/preset-chart-xy](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/preset-chart-xy)                 | [![Version](https://img.shields.io/npm/v/@bridge-ui/preset-chart-xy.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/preset-chart-xy)                 |      |
| [@bridge-ui/plugin-chart-echarts](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/plugin-chart-echarts)       | [![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-echarts.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/plugin-chart-echarts)       |      |
| [@bridge-ui/plugin-filter-antd](https://github.com/apache-bridge/bridge-ui/tree/master/plugins/plugin-filter-antd)           | [![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-chart-echarts.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/plugin-filter-antd)         |      |

## Contribution and development guide

Please read the [contributing guidelines](CONTRIBUTING.md) which include development environment
setup and other things you should know about coding in this repo.

### License

Apache-2.0
