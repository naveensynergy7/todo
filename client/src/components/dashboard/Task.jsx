import React from 'react'

const Task = ({ title }) => (
  <div className="flex items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
    <span className="ml-3 text-gray-700">{title}</span>
  </div>
)

export default Task