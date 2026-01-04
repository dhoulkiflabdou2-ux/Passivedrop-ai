export default function PassiveDropAI() { return ( <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white"> {/* HEADER */} <header className="flex justify-between items-center p-6 max-w-7xl mx-auto"> <h1 className="text-2xl font-bold">PassiveDrop AI</h1> <button className="px-5 py-2 rounded-2xl bg-emerald-500 text-black font-semibold">Start AI</button> </header>

{/* LANDING PAGE */}
  <section className="text-center mt-24 px-6">
    <h2 className="text-5xl font-extrabold mb-6">Set it once.
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600"> The AI sells for you.</span>
    </h2>
    <p className="max-w-3xl mx-auto text-gray-300 text-lg">
      PassiveDrop AI is a simple automated dropshipping system. The AI finds products, creates stores, launches ads and optimizes sales while you are offline.
    </p>
    <div className="mt-10 flex justify-center gap-4">
      <button className="px-8 py-4 rounded-2xl bg-emerald-600 font-semibold">Activate AI</button>
      <button className="px-8 py-4 rounded-2xl border border-white/30">See how it works</button>
    </div>
  </section>

  {/* START AI FLOW */}
  <section className="max-w-5xl mx-auto mt-40 px-6">
    <h3 className="text-4xl font-bold mb-10 text-center">Start AI – Setup (5 minutes)</h3>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 rounded-2xl bg-white/5">
        <h4 className="font-bold mb-2">1. Choose Niche</h4>
        <p className="text-gray-300">Home, Fitness, Tech, Beauty (Halal)</p>
      </div>
      <div className="p-6 rounded-2xl bg-white/5">
        <h4 className="font-bold mb-2">2. Set Budget</h4>
        <p className="text-gray-300">Daily ads budget (editable)</p>
      </div>
      <div className="p-6 rounded-2xl bg-white/5">
        <h4 className="font-bold mb-2">3. Activate AI</h4>
        <p className="text-gray-300">One click. AI starts working.</p>
      </div>
    </div>
    <div className="text-center mt-10">
      <button className="px-10 py-4 rounded-2xl bg-emerald-600 font-bold">Start AI Now</button>
    </div>
  </section>

  {/* DASHBOARD */}
  <section className="max-w-7xl mx-auto mt-40 px-6">
    <h3 className="text-4xl font-bold mb-10 text-center">AI Dashboard</h3>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 rounded-2xl bg-white/5"><h4 className="font-bold">Today Profit</h4><p className="text-3xl text-emerald-400">+$42.80</p></div>
      <div className="p-6 rounded-2xl bg-white/5"><h4 className="font-bold">AI Status</h4><p className="text-emerald-400">Running</p></div>
      <div className="p-6 rounded-2xl bg-white/5"><h4 className="font-bold">Active Product</h4><p>Wireless Mini Blender</p></div>
    </div>
  </section>

  {/* BRANDING */}
  <section className="max-w-5xl mx-auto mt-40 px-6 text-center">
    <h3 className="text-4xl font-bold mb-6">Brand Identity</h3>
    <p className="text-gray-300 mb-8">Name: PassiveDrop AI<br/>Colors: Emerald / Black / White<br/>Tone: Clean • Automated • Trust</p>
    <p className="text-gray-400">Slogan: Set it once. The AI sells for you.</p>
  </section>

  <footer className="mt-32 p-6 text-center text-gray-500">
    © 2026 PassiveDrop AI – Automated Dropshipping System
  </footer>
</div>

) }
