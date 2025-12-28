'use server'

export async function addMessage(message: string) {
  // Simulate a slight delay for demo purposes
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    type: 'message',
    content: `Server received: ${message} at ${new Date().toISOString()}`
  }
}

export async function getWordCount(message: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const wordCount = message.trim().split(/\s+/).filter(word => word.length > 0).length
  return {
    type: 'word-count',
    content: `Word count: ${wordCount}`
  }
}

export async function getCharacterCount(message: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  const charCount = message.length
  return {
    type: 'character-count',
    content: `Character count: ${charCount}`
  }
}

export async function transformText(message: string, transformation: 'uppercase' | 'lowercase' | 'reverse') {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  let result = ''
  switch (transformation) {
    case 'uppercase':
      result = message.toUpperCase()
      break
    case 'lowercase':
      result = message.toLowerCase()
      break
    case 'reverse':
      result = message.split('').reverse().join('')
      break
  }
  
  return {
    type: 'transform',
    content: `Transformed (${transformation}): ${result}`
  }
}