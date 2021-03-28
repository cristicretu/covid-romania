import React from 'react'
import { report, labelColor } from '../constant/index.js';
import StatCard from './StatCard.js'

export default function ListOfStat() {
  return (
    <div class="w-11/12 mx-auto mt-10 grid gap-10 rounded">
      {report.casese.map((stat, index) => {
        return (
          <StatCard stat={stat} key={index} labelColor={labelColor[index]} />
        );
      })}
    </div>
  )
}
