import React, { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle, X, AlertCircle, Info } from 'lucide-react'

// Notification types
const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
}

// Create context
const NotificationContext = createContext()

// Notification component
function NotificationItem({ notification, onClose }) {
  const { id, type, title, message, autoClose } = notification

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertCircle,
  }

  const styles = {
    success: 'bg-success-50 border-success-200 text-success-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  }

  const iconStyles = {
    success: 'text-success-500',
    error: 'text-red-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
  }

  const Icon = icons[type]

  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose(id)
      }, autoClose)
      return () => clearTimeout(timer)
    }
  }, [id, autoClose, onClose])

  return (
    <div
      className={`
      relative flex items-start p-4 border rounded-lg shadow-card mb-3
      animate-slide-up ${styles[type]}
    `}
    >
      <Icon
        className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${iconStyles[type]}`}
      />

      <div className="flex-1 min-w-0">
        {title && <h4 className="text-sm font-semibold mb-1">{title}</h4>}
        {message && <p className="text-sm opacity-90">{message}</p>}
      </div>

      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 ml-3 p-1 hover:bg-black/5 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// Notification provider component
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random()
    const newNotification = {
      id,
      type: NOTIFICATION_TYPES.INFO,
      autoClose: 5000, // Default 5 seconds
      ...notification,
    }

    setNotifications((prev) => [...prev, newNotification])
    return id
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    )
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  // Convenience methods
  const showSuccess = useCallback(
    (title, message, options = {}) => {
      return addNotification({
        type: NOTIFICATION_TYPES.SUCCESS,
        title,
        message,
        ...options,
      })
    },
    [addNotification]
  )

  const showError = useCallback(
    (title, message, options = {}) => {
      return addNotification({
        type: NOTIFICATION_TYPES.ERROR,
        title,
        message,
        autoClose: 7000, // Longer for errors
        ...options,
      })
    },
    [addNotification]
  )

  const showInfo = useCallback(
    (title, message, options = {}) => {
      return addNotification({
        type: NOTIFICATION_TYPES.INFO,
        title,
        message,
        ...options,
      })
    },
    [addNotification]
  )

  const showWarning = useCallback(
    (title, message, options = {}) => {
      return addNotification({
        type: NOTIFICATION_TYPES.WARNING,
        title,
        message,
        ...options,
      })
    },
    [addNotification]
  )

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    showSuccess,
    showError,
    showInfo,
    showWarning,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}

      {/* Notification Container */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClose={removeNotification}
            />
          ))}
        </div>
      )}
    </NotificationContext.Provider>
  )
}

// Custom hook to use notification context
export function useNotification() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    )
  }
  return context
}
