import MessageForm from './components/MessageForm'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Next.js Server/Client Components Demo
        </h1>
        
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">About This Demo</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Server Action (use server)</h3>
                <p className="text-gray-800">
                  The message handling is performed by a server action in 
                  <code className="bg-gray-100 px-2 py-1 rounded">actions.ts</code>
                  marked with &apos;use server&apos;. This code runs exclusively on the server.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Client Component (use client)</h3>
                <p className="text-gray-800">
                  The form below is a client component marked with &apos;use client&apos;. 
                  It handles user interactions and state management in the browser.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Try It Out</h2>
            <MessageForm />
          </section>
        </div>
      </div>
    </main>
  )
}
