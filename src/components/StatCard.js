import React from 'react'

export default function StatCard({ stat, labelColor, bgColor }) {
  const { label, value, delta } = stat;
  return (
    <div className={`${bgColor}`}>
      <div>
        <h3 className={`${labelColor}`}>{label}</h3>
        <div className={`flex items-center ${labelColor}`}>
          {/* <h1 class=" ml-2 text-sm">+{delta}</h1> */}
          <h1 class=" text-3xl font-medium">{value}</h1>
          <h1 class=" ml-2 text-sm">{delta ? '+' + delta : ''}</h1>
        </div>
      </div>

    </div>
  )
}
