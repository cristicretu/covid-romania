import React from 'react'

export default function StatCard({ stat, labelColor }) {
  const { label, value, delta } = stat;
  return (
    <div class="h-12 items-center p-5 flex">
      <div>
        <h3 className={`${labelColor}`}>{label}</h3>
        <div className={`flex items-center ${labelColor}`}>
          <h1 class=" text-">+{delta}</h1>
          <h1 class=" text-3xl">{value}</h1>
        </div>
      </div>

    </div>
  )
}
