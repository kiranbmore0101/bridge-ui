<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## @bridge-ui/plugin-chart-time-table

[![Version](https://img.shields.io/npm/v/@bridge-ui/plugin-time-table.svg?style=flat-square)](https://www.npmjs.com/package/@bridge-ui/plugin-chart-time-table)
[![David (path)](https://img.shields.io/david/apache-bridge/bridge-ui-plugins.svg?path=packages%2Fbridge-ui-plugin-chart-time-table&style=flat-square)](https://david-dm.org/apache-bridge/bridge-ui-plugins?path=packages/bridge-ui-plugin-chart-time-table)

This plugin provides Time Table for Bridge.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import TimeTableChartPlugin from '@bridge-ui/legacy-plugin-chart-time-table';

new TimeTableChartPlugin().configure({ key: 'time-table' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-bridge.github.io/bridge-ui-plugins/?selectedKind=plugin-chart-time-table)
for more details.

```js
<SuperChart
  chartType="time-table"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
