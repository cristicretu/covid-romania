import React from 'react'
import { report, labelColor, bgColor } from '../constant/index.js';
import StatCard from './StatCard.js'
import { fetchData } from '../constant';


export default function ListOfStat() {
  return (
    <div class="w-11/12 mx-auto mt-10 grid gap-5 grid-cols-2 rounded">
      {report.casese.map((stat, index) => {
        return (
          <StatCard stat={stat} key={index} labelColor={labelColor[index]} bgColor={bgColor[index]} />
        );
      })}
    </div>

  )
}
