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
                <h3 className="font-medium text-gray-900">Server Actions (use server)</h3>
                <p className="text-gray-800">
                  Multiple server actions in <code className="bg-gray-100 px-2 py-1 rounded">actions.ts</code>
                  marked with &apos;use server&apos;. These include message handling, word/character counting, and text transformations.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Client Component (use client)</h3>
                <p className="text-gray-800">
                  The form below is a client component marked with &apos;use client&apos;. 
                  It handles user interactions, state management, loading states, and maintains a history of all actions.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Features</h3>
                <ul className="text-gray-800 list-disc list-inside space-y-1">
                  <li>Multiple server action types</li>
                  <li>Loading states with visual feedback</li>
                  <li>Form validation</li>
                  <li>Action history tracking</li>
                  <li>Responsive design</li>
                </ul>
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