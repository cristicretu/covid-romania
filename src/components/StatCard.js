import React from 'react'

export default function StatCard({ stat, labelColor, bgColor }) {
  const { label, value, delta } = stat;
  return (
    <div class="h-15 w-15 items-center p-2 flex rounded transition bg-white bg-opacity-5
    transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
    >
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
