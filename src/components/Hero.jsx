
import { motion as Motion} from "framer-motion";
import { useState } from "react";

export default function Hero() {
      const [mode, setMode] = useState(null);
    const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
  return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden dots mesh pt-20 pb-16 z-10">
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-blue-600/7 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-purple-600/7 blur-3xl pointer-events-none" />

<Motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: false }}
  variants={stagger}
  className="relative z-10 max-w-6xl mx-auto px-6 text-center"
>          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8 float">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"/>
            Where Efficiency Meets Learning Magic
          </div>

<Motion.h1
  variants={fadeUp}
   viewport={{ once: false }}
  className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 d"
>            <span className="block text-white">The Smarter Way</span>
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent shimmer tglow">
              With Zedny
            </span>
          </Motion.h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
           Zedny helps individuals learn faster through smart assessments
            and helps companies build powerful learning platforms
             to train and track their employees.          </p>

<div className="flex flex-wrap items-center justify-center gap-10 mb-14">
  {[["450+","Courses"],["500+","Books"],["1000+","Readings"],["10","AI Engines"],["25+","Enterprises"]].map(([n,l])=>(
    
    <div key={l} className="text-center">

      <Motion.div
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {n}
      </Motion.div>

      <div className="text-gray-600 dark:text-gray-400 text-xs uppercase tracking-widest mt-1">
        {l}
      </div>

    </div>

  ))}
</div>

          <p className="text-gray-500 text-base mb-5 font-medium">I am here as…</p>
          <div className="grid grid-cols-2 gap-5 max-w-xl mx-auto">
            {[
              {id:"individual",icon:"👤",title:"An Individual",sub:"Personal growth & skill-building",ac:"border-blue-500 bg-blue-500/8 glow-b",ic:"border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5"},
              {id:"company",icon:"🏢",title:"An Enterprise",sub:"Team training & custom platforms",ac:"border-purple-500 bg-purple-500/8 glow-p",ic:"border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5"},
            ].map(m=>(
              <button key={m.id}
                onClick={()=>{setMode(m.id);document.getElementById(m.id==="individual"?"journey":"enterprise")?.scrollIntoView({behavior:"smooth"});}}
                className={`group relative p-7 rounded-2xl border-2 text-left transition-all duration-300 ${mode===m.id?m.ac:m.ic}`}
              >
                <div className="text-4xl mb-3">{m.icon}</div>
                <div className="font-bold text-lg d">{m.title}</div>
                <div className="text-gray-400 text-sm mt-1">{m.sub}</div>
                <div className={`absolute bottom-4 right-4 text-xs font-bold transition-opacity ${mode===m.id?"opacity-100 text-blue-300":"opacity-0"}`}>Selected ✓</div>
              </button>
            ))}
          </div>
        </Motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-700 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse"/>
        </div>
      </section>

  );
}