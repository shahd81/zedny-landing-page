import { useState } from "react";
export default function CTA() {
      const [mode, setMode] = useState(null);

    return(
        <section className="py-32 relative overflow-hidden z-10">
                <div className="absolute inset-0 mesh"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-3xl pointer-events-none"/>
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                  <div className="text-7xl mb-6 float">🚀</div>
                  <h2 className="text-5xl md:text-7xl font-extrabold mb-6 d" style={{letterSpacing:"-0.035em"}}>
                    Ready to Grow
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent shimmer tglow"> Smarter?</span>
                  </h2>
                  <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto font-light">Join thousands of learners and hundreds of organizations who've transformed how they grow with Zedny.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={()=>{setMode("individual");document.getElementById("journey")?.scrollIntoView({behavior:"smooth"});}} className="btn-g px-8 py-4 rounded-2xl font-bold text-lg">
                      Start as Individual →
                    </button>
                    <button onClick={()=>{setMode("company");document.getElementById("enterprise")?.scrollIntoView({behavior:"smooth"});}} className="px-8 py-4 rounded-2xl font-bold text-lg border border-purple-500/40 bg-purple-500/8 text-purple-300 hover:bg-purple-500/15 transition-all">
                      Enterprise Solutions →
                    </button>
                  </div>
                </div>
              </section>
        
    )
}