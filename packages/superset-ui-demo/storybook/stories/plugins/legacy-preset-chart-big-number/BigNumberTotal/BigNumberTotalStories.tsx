/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { SuperChart } from '@bridge-ui/core';
import { BigNumberTotalChartPlugin } from '@bridge-ui/legacy-preset-chart-big-number';
import data from './data';

new BigNumberTotalChartPlugin()
  .configure({ key: 'big-number-total' })
  .register();

export default {
  title: 'Legacy Chart Plugins/legacy-preset-big-number/BigNumberTotal',
};

export const totalBasic = () => (
  <SuperChart
    chartType="big-number-total"
    width={400}
    height={400}
    queriesData={[{ data }]}
    formData={{
      metric: 'sum__num',
      subheader: 'total female participants',
      vizType: 'big_number_total',
      yAxisFormat: '.3s',
    }}
  />
);

export const totalNoData = () => (
  <SuperChart
    chartType="big-number-total"
    width={400}
    height={400}
    queriesData={[{ data: [] }]}
    formData={{
      metric: 'sum__num',
      subheader: 'total female participants',
      vizType: 'big_number_total',
      yAxisFormat: '.3s',
    }}
  />
);
