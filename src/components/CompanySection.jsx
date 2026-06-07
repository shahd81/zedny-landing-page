import { upgradeSteps ,platformTiers } from "../data/data";
import { useState } from "react";
import GlassCard from "./GlassCard";
export default function CompanySection() {
    const [activeTier, setActiveTier] = useState(1);
  return (
    <section id="enterprise" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-6">🏢 Enterprise Solutions</div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 d" style={{letterSpacing:"-0.03em"}}>
              Build Your Platform.
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Grow It Your Way.</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">Start where you are — and upgrade seamlessly as your organization evolves.</p>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {upgradeSteps.map((s,i)=>(
              <div key={i} className="relative">
                <GlassCard className="p-6 text-center h-full hover:bg-white/7 hover:scale-105 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-2xl mx-auto mb-4">{s.icon}</div>
                  <h4 className="font-bold mb-2 d text-sm">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </GlassCard>
                {i<upgradeSteps.length-1&&<div className="hidden md:block absolute top-1/2 -right-2 z-10 text-purple-500/40 text-xl font-bold">›</div>}
              </div>
            ))}
          </div>

          {/* Tiers */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold d mb-3" style={{letterSpacing:"-0.02em"}}>Choose Your Starting Point</h3>
            <p className="text-gray-500">Every tier is upgradeable — zero migration pain, all your data intact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {platformTiers.map((tier,i)=>(
              <div key={i} onClick={()=>setActiveTier(i)} className={`tc cursor-pointer ${activeTier===i?"ta":""}`}>
                <div className="relative rounded-2xl border-2 overflow-hidden transition-all duration-300"
                  style={{borderColor:activeTier===i?tier.borderColor:"rgba(255,255,255,0.08)", boxShadow:activeTier===i?`0 0 40px ${tier.borderColor}30`:"none"}}>
                  {tier.badge&&<div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold">{tier.badge}</div>}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${tier.color}`}/>
                  <div className={`p-7 ${activeTier===i?"bg-gradient-to-b from-white/4 to-transparent":""}`}>
                    <div className="text-3xl mb-3">{tier.icon}</div>
                    <h3 className="text-2xl font-extrabold mb-1 d">{tier.tier}</h3>
                    <p className={`text-sm font-semibold mb-6 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>{tier.price}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((f,fi)=>(
                        <li key={fi} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center text-xs font-bold text-white mt-0.5`}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTier===i?`bg-gradient-to-r ${tier.color} text-white shadow-lg hover:opacity-90`:"border border-white/15 text-gray-400 hover:border-white/30 hover:text-white"}`}>
                      {tier.cta} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-purple-500/8 to-blue-500/8 border border-purple-500/15 text-center">
            <p className="text-gray-300 text-lg">⬆️ <span className="font-semibold text-white">Already have a Zedny platform?</span> Upgrading is instant — all your learner data, content, and progress stays perfectly intact.</p>
          </div>
        </div>
      </section>
  );
}