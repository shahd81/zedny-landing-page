import { motion as Motion} from "framer-motion";
import { personalJourney } from "../data/data";
import { useState ,useEffect } from "react";
import GlassCard from "./GlassCard";
export default function IndividualSection() {
    const [activeStep, setActiveStep] = useState(0);
      useEffect(() => {
    const iv = setInterval(() => setActiveStep(s => (s + 1) % personalJourney.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="journey" className="py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 mesh"/>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">👤 Your Personal Learning Cycle</div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 d" style={{letterSpacing:"-0.03em"}}>
              Six Steps to <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mastery</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">A continuous, AI-driven loop — no wasted time, no gap left behind.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              {personalJourney.map((step,i)=>(
                <button key={i} onClick={()=>setActiveStep(i)} className="w-full text-left">
                  <div className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-400 ${activeStep===i?"border-blue-500/50 bg-blue-500/8 glow-b scale-[1.02]":"border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15"}`}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${step.color} shadow-lg`}>{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">Step {step.step}</span>
                        {activeStep===i&&<span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold">Active</span>}
                      </div>
                      <h3 className="font-bold text-white d">{step.title}</h3>
                      <div className={`transition-all duration-500 overflow-hidden ${activeStep===i?"max-h-24 mt-2 opacity-100":"max-h-0 opacity-0"}`}>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 text-xs flex items-center justify-center font-bold transition-all ${activeStep===i?"border-blue-400 bg-blue-400/20 text-blue-300":"border-gray-700 text-gray-600"}`}>
                      {activeStep===i?"✓":step.step}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="sticky top-32">
              <GlassCard className="p-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"/>
                <div className="relative text-center">
                  <div className="text-6xl mb-5 float">{personalJourney[activeStep].icon}</div>
                  <h3 className="text-2xl font-extrabold mb-4 d bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">{personalJourney[activeStep].title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">{personalJourney[activeStep].desc}</p>
                  <div className="flex justify-center gap-2 mb-8">
                    {personalJourney.map((_,i)=>(
                      <button key={i} onClick={()=>setActiveStep(i)} className={`rounded-full transition-all duration-300 ${activeStep===i?"w-8 h-2.5 bg-blue-400":"w-2.5 h-2.5 bg-gray-700 hover:bg-gray-500"}`}/>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 flex-wrap pt-4 border-t border-white/8">
                    {personalJourney.map((s,i)=>(
                      <div key={i} className="flex items-center gap-1">
                        <div className={`w-7 h-7 rounded-full text-xs flex items-center justify-center border-2 font-bold transition-all duration-300 ${activeStep===i?"border-blue-400 bg-blue-400/20 text-blue-300 scale-125":"border-gray-700 text-gray-600"}`}>{s.step}</div>
                        {i<personalJourney.length-1&&<div className="text-gray-700 text-xs">›</div>}
                      </div>
                    ))}
                    <div className="text-blue-500/50 text-sm font-bold ml-1">↺</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-500/8 to-purple-500/8 border border-white/8 text-center">
            <p className="text-gray-300 font-medium text-lg">🔄 The cycle never ends — Zedny keeps adapting, recommending, and pushing you forward with every course completed.</p>
          </div>
        </div>
      </section>
  );
}