'use client'

import { useState } from 'react'
import { addMessage } from '../actions'

export default function MessageForm() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await addMessage(message)
    setResponse(result)
    setMessage('')
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Enter Message
          </label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-gray-900 placeholder-gray-500"
            placeholder="Type your message..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium"
        >
          Send to Server
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h2 className="text-sm font-medium text-gray-900 mb-2">Server Response:</h2>
          <p className="text-gray-900">{response}</p>
        </div>
      )}
    </div>
  )
}
