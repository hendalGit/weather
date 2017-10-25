import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  return _.round(_.sum(data)/data.length);
}

function max(data) {
  return _.round(data.reduce((x, y) => x > y ? x : y, data[0]));
}

function min(data) {
  return _.round(data.reduce((x, y) => x < y ? x : y, data[0]));
}

export default ({data, color, units}) => (
  <div>
    <Sparklines width={180} height={120} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div className="chart"><div className="top average">Average : {average(data)} {units}</div></div>
    <div className="chart"><div className="top max">{max(data)} {units}</div></div>
    <div className="chart"><div className="min">{min(data)} {units}</div></div>
  </div>
);
