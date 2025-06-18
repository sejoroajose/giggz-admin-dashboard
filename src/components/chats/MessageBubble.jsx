import React from 'react'

const MessageBubble = ({ message }) => {
  const isServiceProvider = message.role === 'Service Provider'
  const isClient = message.role === 'Client'

  return (
    <div className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex ${
          isClient ? 'flex-row-reverse' : 'flex-row'
        } items-start space-x-3 max-w-3xl`}
      >
        <div
          className={`w-10 h-10 rounded-full flex-shrink-0 ${
            isClient ? 'ml-3' : 'mr-3'
          } ${isServiceProvider ? 'bg-orange-200' : 'bg-pink-200'}`}
        ></div>

        <div className={`flex-1 ${isClient ? 'text-right' : 'text-left'}`}>
          <div
            className={`inline-block p-4 rounded-2xl ${
              isClient
                ? 'bg-pink-100 text-gray-900'
                : 'bg-gray-100 text-gray-900'
            } max-w-md`}
          >
            <p className="text-sm leading-relaxed">{message.message}</p>
          </div>

          <div
            className={`mt-2 text-xs text-gray-500 ${
              isClient ? 'text-right' : 'text-left'
            }`}
          >
            <span className="font-medium">
              {message.sender} - {message.role}
            </span>
            <br />
            <span>{message.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBubble
