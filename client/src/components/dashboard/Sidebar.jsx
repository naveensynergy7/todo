import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import ListItem from './ListItem'

const Sidebar = ({ lists, activeList, setActiveList }) => (
  <div className="w-64 h-full bg-gray-50 p-4 overflow-y-auto">
    <div className="mb-6">
      <div className="relative">
        <PlusIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    {lists.map((list, index) => (
      <ListItem
        key={index}
        list={list}
        isActive={activeList === list.name}
        onClick={() => setActiveList(list.name)}
      />
    ))}
    <button className="mt-6 flex items-center text-blue-600 font-medium">
      <PlusIcon className="w-5 h-5 mr-2" />
      New List
    </button>
  </div>
)

export default Sidebar