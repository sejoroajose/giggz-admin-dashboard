import React, { useState } from 'react'
import SearchInput from '../common/SearchInput'
import { mockConversations } from './mockData'

const ConversationList = ({ selectedConversation, onConversationSelect }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredConversations = mockConversations.filter((conversation) => {
    const matchesSearch =
      conversation.participants.some((participant) =>
        participant.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      conversation.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeFilter === 'Unread') {
      return matchesSearch && conversation.unreadCount > 0
    }

    return matchesSearch
  })

  const handleMarkAsRead = () => {
    // Implement mark as read functionality
    console.log('Mark as read clicked')
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">

        {/* Filter Tabs */}
        <div className="flex space-x-6 mb-4">
          {['All', 'Unread'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-medium ${
                activeFilter === filter
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
          <button
            onClick={handleMarkAsRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 ml-auto"
          >
            Mark as read
          </button>
        </div>

        {/* Search */}
        <SearchInput
          placeholder="Search for chats by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onConversationSelect(conversation)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedConversation?.id === conversation.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {conversation.participants[0]}
                  </h3>
                  {conversation.unreadCount > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 truncate mt-1">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConversationList
