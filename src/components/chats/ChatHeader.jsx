import React from 'react'

const ChatHeader = ({ conversation }) => {
  return (
    <div className="p-6 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

          {/* Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {conversation.participants.join(' and ')}
            </h2>
            <p className="text-sm text-gray-600">{conversation.jobTitle}</p>
          </div>
        </div>

        {/* Menu Button */}
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
