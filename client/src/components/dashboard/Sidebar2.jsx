import React from 'react'
import { CalendarIcon, BellIcon, ClockIcon, ChevronRightIcon, PaperClipIcon, PlusIcon } from '@heroicons/react/24/outline'
import ActionButton from './ActionButton'

const Sidebar2 = () => (
  <div className="w-80 bg-gray-50 p-6 border-l border-gray-200">
    <h2 className="font-bold text-lg mb-4 text-gray-800">MyAnalytics | Wellbeing Edition</h2>
    <div className="space-y-3">
      <ActionButton icon={<CalendarIcon className="w-5 h-5" />} text="Add to My Day" />
      <ActionButton icon={<BellIcon className="w-5 h-5" />} text="Remind Me" />
      <ActionButton icon={<CalendarIcon className="w-5 h-5" />} text="Add Due Date" />
      <ActionButton icon={<ClockIcon className="w-5 h-5" />} text="Repeat" />
    </div>
    <div className="mt-6">
      <button className="w-full text-left py-2 px-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-between">
        <span className="font-medium">Open in Outlook</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
    <div className="mt-8">
      <h3 className="font-semibold text-gray-800">MyAnalytics</h3>
      <p className="text-sm text-gray-600 mt-2">Discover your habits. Work smarter.</p>
      <p className="text-sm text-gray-600 mt-1">For your eyes only</p>
      <a href="#" className="text-sm text-blue-600 mt-2 inline-block">Learn more &gt;</a>
      <p className="text-xs text-gray-400 mt-2">MyAnalytics - 3 hours ago</p>
    </div>
    <div className="mt-6 space-y-3">
      <button className="w-full text-left py-2 px-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-gray-700">
        <PaperClipIcon className="w-5 h-5 mr-2" />
        <span>Add File</span>
      </button>
      <button className="w-full text-left py-2 px-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-gray-700">
        <PlusIcon className="w-5 h-5 mr-2" />
        <span>Add Note</span>
      </button>
    </div>
  </div>
)

export default Sidebar2