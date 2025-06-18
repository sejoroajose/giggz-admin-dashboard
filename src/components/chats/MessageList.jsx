import React from 'react'
import MessageBubble from './MessageBubble'

const MessageList = ({ messages }) => {
  return (
    <div className="h-full overflow-y-auto p-6 space-y-6">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList
