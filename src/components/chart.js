import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default ({data, color, units}) => (
  <div>
    <Sparklines width={180} height={120} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Average : {average(data)} {units}</div>
  </div>
);
