import React from 'react'
import { FlagIcon, CalendarIcon } from '@heroicons/react/24/outline'

const IconMap = {
  FlagIcon: FlagIcon,
  CalendarIcon: CalendarIcon,
  CircleIcon: ({ className }) => <div className={`w-5 h-5 rounded-full ${className}`} />,
}

const ListItem = ({ list, isActive, onClick }) => {
  const Icon = IconMap[list.icon]

  return (
    <div
      className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <Icon className={`w-5 h-5 ${list.color}`} />
      <span className="ml-3 font-medium">{list.name}</span>
      {list.count && (
        <span className="ml-auto text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
          {list.count}
        </span>
      )}
    </div>
  )
}

export default ListItem