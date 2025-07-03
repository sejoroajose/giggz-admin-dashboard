import React, { useState, useRef, useEffect } from 'react'

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null)
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || ''
    }
  }, [value])

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current.focus()
    updateContent()
  }

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleKeyDown = (e) => {
    updateContent()
  }

  const handleInput = () => {
    updateContent()
  }

  const handleAddLink = () => {
    const selection = window.getSelection()
    if (selection.rangeCount > 0 && !selection.isCollapsed) {
      setIsLinkDialogOpen(true)
    } else {
      alert('Please select text to add a link')
    }
  }

  const confirmAddLink = () => {
    if (linkUrl) {
      handleCommand('createLink', linkUrl)
    }
    setIsLinkDialogOpen(false)
    setLinkUrl('')
  }

  const ToolbarButton = ({ onClick, active = false, children, title }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        active ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex border-b border-gray-300 bg-gray-50 p-2">
        <ToolbarButton
          onClick={() => handleCommand('bold')}
          title="Bold"
        >
          <strong>B</strong>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => handleCommand('italic')}
          title="Italic"
        >
          <em>I</em>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => handleCommand('underline')}
          title="Underline"
        >
          <u>U</u>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={handleAddLink}
          title="Add Link"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </ToolbarButton>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="p-4 min-h-[120px] focus:outline-none"
        style={{ 
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}
        suppressContentEditableWarning={true}
        data-placeholder={placeholder}
      />

      {/* Link Dialog */}
      {isLinkDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Add Link</h3>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Enter URL..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              autoFocus
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsLinkDialogOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmAddLink}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Link
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9CA3AF;
          font-style: italic;
        }
      `}</style>
    </div>
  )
}

export default RichTextEditor