import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import ContextMenu from './ContextMenu'

const ChatArea = ({ conversation }) => {
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })

  const handleContextMenu = (event) => {
    if (!conversation) return

    event.preventDefault()
    setContextMenuPosition({
      x: event.clientX,
      y: event.clientY,
    })
    setShowContextMenu(true)
  }

  const handleCloseContextMenu = () => {
    setShowContextMenu(false)
  }

  const handleMenuAction = (action) => {
    console.log('Menu action:', action)
    setShowContextMenu(false)
    // Implement navigation to different views
  }

  if (!conversation) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Select Conversation
          </h3>
          <p className="text-gray-600 max-w-md">
            Dignissim nulla id in lectus purus eu. Eget eget gravida augue
            libero tempus. Sit augue mi elementum purus.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col" onContextMenu={handleContextMenu}>
      <ChatHeader conversation={conversation} />

      <div className="flex-1 overflow-hidden">
        <MessageList messages={conversation.messages} />
      </div>

      {showContextMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={handleCloseContextMenu}
          />
          <ContextMenu
            position={contextMenuPosition}
            onAction={handleMenuAction}
            onClose={handleCloseContextMenu}
          />
        </>
      )}
    </div>
  )
}

export default ChatArea
