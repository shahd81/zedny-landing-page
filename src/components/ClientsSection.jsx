import { clientLogos } from "../data/data";
import LogoCard from "./LogoCard";
import { motion as Motion } from "framer-motion";
import GlassCard from './GlassCard'
export default function ClientsSection() {
  return (
    <section id="clients" className="py-28 overflow-hidden z-10 relative">
        <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-3 font-bold">Trusted By Leaders</p>
          <h2 className="text-4xl md:text-5xl font-extrabold d mb-4" style={{letterSpacing:"-0.03em"}}>
            Egypt's Top Organizations
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Choose Zedny</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">From global banks to government ministries to the United Nations — they all trust Zedny to upskill their teams.</p>
        </div>

        <div className="overflow-hidden mb-4" style={{maskImage:"linear-gradient(to right,transparent,black 8%,black 92%,transparent)"}}>
          <div className="mq1">
            {[...clientLogos.slice(0,13),...clientLogos.slice(0,13)].map((c,i)=>(
              <div key={i} className="flex-shrink-0 group cursor-default" style={{transition:"transform 0.3s"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06) translateY(-3px)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
                <GlassCard className="px-5 py-3.5 flex items-center gap-3 hover:bg-white/9 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-lg" style={{background:c.color}}>
                     <img
                        src={c.logo}
                        alt={c.name}
                       className="h-12 object-contain"
                      />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold whitespace-nowrap">{c.name}</div>
                    <div className="text-gray-600 text-xs font-bold">{c.abbr}</div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section> 
  );
}