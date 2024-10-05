import React from 'react'

const ActionButton = ({ icon, text }) => (
  <button className="w-full text-left py-2 px-3 bg-white rounded-lg hover:bg-gray-100 transition-colors flex items-center text-gray-700">
    {icon}
    <span className="ml-3">{text}</span>
  </button>
)

export default ActionButton