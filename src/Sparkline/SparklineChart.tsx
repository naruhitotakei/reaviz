import React, { Component } from 'react';
import { LineChart, LineChartProps } from '../LineChart';
import { ChartShallowDataShape } from '../common/data';
import { AreaSeries, Line } from '../AreaChart';
import { PointSeries } from '../AreaChart';
import {
  LinearXAxis,
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearXAxisTickSeries,
} from '../common/Axis/LinearAxis';

export interface SparklineChartProps extends LineChartProps {
  data: ChartShallowDataShape[];
}

export class SparklineChart extends Component<SparklineChartProps, {}> {
  static defaultProps: Partial<SparklineChartProps> = {
    gridlines: null,
    series: (
      <AreaSeries
        symbols={<PointSeries show="hover" />}
        interpolation="smooth"
        markLine={null}
        area={null}
        line={<Line strokeWidth={2} />}
      />
    ),
    yAxis: (
      <LinearYAxis
        scaled={true}
        type="value"
        axisLine={null}
        tickSeries={<LinearYAxisTickSeries line={null} label={null} />}
      />
    ),
    xAxis: (
      <LinearXAxis
        type="time"
        scaled={true}
        axisLine={null}
        tickSeries={<LinearXAxisTickSeries line={null} label={null} />}
      />
    ),
  };

  render() {
    return <LineChart {...this.props} />;
  }
}
