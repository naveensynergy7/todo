import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import MainContent from '../components/dashboard/MainContent'
import Sidebar2 from '../components/dashboard/Sidebar2'

export default function Dashboard() {
  const [activeList, setActiveList] = useState('Flagged email')
  const lists = [
    { name: 'My Day', icon: 'CalendarIcon', color: 'text-blue-600' },
    { name: 'Important', icon: 'FlagIcon', color: 'text-red-500', count: 1 },
    { name: 'Planned', icon: 'CalendarIcon', color: 'text-green-500', count: 4 },
    { name: 'Assigned to you', icon: 'CircleIcon', color: 'bg-purple-500' },
    { name: 'Flagged email', icon: 'FlagIcon', color: 'text-orange-500', count: 1 },
    { name: 'Tasks', icon: 'CircleIcon', color: 'bg-blue-500', count: 4 },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar lists={lists} activeList={activeList} setActiveList={setActiveList} />
      <MainContent activeList={activeList} />
      <Sidebar2 />
    </div>
  )
}