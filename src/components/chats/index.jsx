import React, { useState } from 'react'
import ConversationList from './ConversationList'
import ChatArea from './ChatArea'

const Chats = () => {
  const [selectedConversation, setSelectedConversation] = useState(null)

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation)
  }

  return (
    <div className="h-screen bg-white flex">
      <div className="w-1/3 border-r border-gray-200">
        <ConversationList
          selectedConversation={selectedConversation}
          onConversationSelect={handleConversationSelect}
        />
      </div>

      {/* Right Side - Chat Area */}
      <div className="flex-1">
        <ChatArea conversation={selectedConversation} />
      </div>
    </div>
  )
}

export default Chats
