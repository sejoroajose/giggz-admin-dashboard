import React, { useState } from 'react'
import Button from '../common/Button'

const AddFAQModal = ({ isOpen, onClose, onSave }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [errors, setErrors] = useState({})

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    if (!question.trim()) {
      newErrors.question = 'Question is required'
    }
    if (!answer.trim()) {
      newErrors.answer = 'Answer is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSave({
      question: question.trim(),
      answer: answer.trim()
    })

    // Reset form
    setQuestion('')
    setAnswer('')
    setErrors({})
  }

  const handleClose = () => {
    setQuestion('')
    setAnswer('')
    setErrors({})
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Question Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.question ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.question && (
                <p className="text-red-500 text-sm mt-1">{errors.question}</p>
              )}
            </div>

            {/* Answer Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer <span className="text-red-500">*</span>
              </label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="A very long line of text which is expected to span more than two to three lines so it breaks as the text increases."
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                  errors.answer ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.answer && (
                <p className="text-red-500 text-sm mt-1">{errors.answer}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white"
              >
                ADD FAQ
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddFAQModal