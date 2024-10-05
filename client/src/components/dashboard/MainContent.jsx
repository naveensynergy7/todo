import React from 'react'
import { FlagIcon } from '@heroicons/react/24/outline'
import Task from './Task'

const MainContent = ({ activeList }) => (
  <div className="flex-1 bg-white p-8">
    <h1 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
      <FlagIcon className="w-6 h-6 mr-3 text-red-500" />
      {activeList}
    </h1>
    <div className="space-y-6">
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-3">Today</h2>
        <div className="space-y-2">
          <Task title="MyAnalytics | Wellbeing Edition" />
          <Task title="MGCC" />
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-3">Last week</h2>
        <div className="space-y-2">
          <Task title="Payroll and T4 Info" />
        </div>
      </div>
    </div>
  </div>
)

export default MainContent