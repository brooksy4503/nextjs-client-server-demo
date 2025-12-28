'use client'

import { useState } from 'react'
import { addMessage, getWordCount, getCharacterCount, transformText } from '../actions'
import { Loader2, Send, FileText, Hash, RotateCcw } from 'lucide-react'

type Action = 'message' | 'word-count' | 'character-count' | 'uppercase' | 'lowercase' | 'reverse'

type HistoryItem = {
  id: number
  action: Action
  input: string
  result: string
  timestamp: string
}

export default function MessageForm() {
  const [message, setMessage] = useState('')
  const [selectedAction, setSelectedAction] = useState<Action>('message')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [history, setHistory] = useState<HistoryItem[]>([])

  const actionOptions = [
    { value: 'message' as Action, label: 'Send Message', icon: Send },
    { value: 'word-count' as Action, label: 'Word Count', icon: FileText },
    { value: 'character-count' as Action, label: 'Character Count', icon: Hash },
    { value: 'uppercase' as Action, label: 'Uppercase', icon: RotateCcw },
    { value: 'lowercase' as Action, label: 'Lowercase', icon: RotateCcw },
    { value: 'reverse' as Action, label: 'Reverse Text', icon: RotateCcw },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!message.trim()) {
      setError('Please enter a message')
      return
    }
    
    setError('')
    setIsLoading(true)
    
    try {
      let result
      switch (selectedAction) {
        case 'message':
          result = await addMessage(message)
          break
        case 'word-count':
          result = await getWordCount(message)
          break
        case 'character-count':
          result = await getCharacterCount(message)
          break
        case 'uppercase':
        case 'lowercase':
        case 'reverse':
          result = await transformText(message, selectedAction)
          break
      }
      
      // Add to history
      const newItem: HistoryItem = {
        id: Date.now(),
        action: selectedAction,
        input: message,
        result: result.content,
        timestamp: new Date().toLocaleTimeString()
      }
      
      setHistory(prev => [newItem, ...prev])
      setMessage('')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const getActionLabel = (action: Action) => {
    return actionOptions.find(opt => opt.value === action)?.label || action
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="action" className="block text-sm font-medium text-gray-900 mb-2">
            Select Action
          </label>
          <select
            id="action"
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value as Action)}
            className="w-full px-3 py-2 border rounded-md text-gray-900 bg-white"
          >
            {actionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Enter Text
          </label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setError('')
            }}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 placeholder-gray-500 ${
              error ? 'border-red-500' : ''
            }`}
            placeholder="Type your text..."
            disabled={isLoading}
          />
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Execute
            </>
          )}
        </button>
      </form>

      {history.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">History</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {history.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {getActionLabel(item.action)}
                  </span>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Input:</span> {item.input}
                  </p>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Result:</span> {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}