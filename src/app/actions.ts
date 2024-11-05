'use server'

export async function addMessage(message: string) {
  // In a real app, this might save to a database
  // For demo purposes, we'll just return a modified message
  return `Server received: ${message} at ${new Date().toISOString()}`
}
