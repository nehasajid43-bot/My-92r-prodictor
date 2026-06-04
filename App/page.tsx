export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-2">92R Predictor</h1>
        <p className="text-center text-gray-400 mb-6">Admin Approval Required</p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Apna 92R UID dalo" 
            className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 focus:border-green-500 outline-none"
          />
          <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg font-bold">
            Request Access
          </button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          Request bhejne ke baad admin se approval lo
        </p>
      </div>
    </main>
  )
}
