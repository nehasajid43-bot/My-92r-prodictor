export default function Admin() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel - 92R Predictor</h1>
      
      <div className="bg-gray-900 rounded-xl p-4">
        <p className="text-gray-400 mb-4">Pending Requests:</p>
        
        <div className="bg-gray-800 p-3 rounded-lg flex justify-between items-center mb-2">
          <span>UID: 1234567</span>
          <div className="space-x-2">
            <button className="bg-green-600 px-3 py-1 rounded">Allow</button>
            <button className="bg-red-600 px-3 py-1 rounded">Reject</button>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">Abhi demo hai. Baad me real UID yahan aayenge</p>
      </div>
    </main>
  )
}
