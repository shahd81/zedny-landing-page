import { motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";
import ClientsSection from "../components/ClientsSection";
import AiEnginesSection from "../components/AiEngines";
import Footer from "../components/layout/footer";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import IndividualSection from "../Components/IndividualSection";
import CompanySection from "../Components/CompanySection";
import GlassCard from "../components/GlassCard";
import { differentiators } from "../data/data";
import LogoCard from "../components/LogoCard";
export default function ZednyLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap');
        *, body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .d { font-family: 'Bricolage Grotesque', sans-serif !important; }

        .mesh { background: radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 90%, rgba(6,182,212,0.08) 0%, transparent 60%); }
        .dots { background-image: radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px); background-size: 30px 30px; }

        .float { animation: fy 6s ease-in-out infinite; }
        @keyframes fy { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }

        .shimmer { background-size:200% auto; animation:sh 3.5s linear infinite; }
        @keyframes sh { to{background-position:200% center} }

        .glow-b { box-shadow:0 0 50px rgba(59,130,246,0.2); }
        .glow-p { box-shadow:0 0 50px rgba(139,92,246,0.2); }
        .tglow { text-shadow:0 0 60px rgba(99,102,241,0.45); }

        .mq1 { display:flex; gap:1rem; animation:mq 30s linear infinite; }
        .mq2 { display:flex; gap:1rem; animation:mq 38s linear infinite reverse; }
        @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .btn-g { background:linear-gradient(135deg,#3b82f6,#8b5cf6); transition:all 0.3s; }
        .btn-g:hover { transform:translateY(-2px); box-shadow:0 14px 40px rgba(99,102,241,0.4); }

        .tc { transition:all 0.35s cubic-bezier(.22,1,.36,1); }
        .tc:hover { transform:translateY(-5px); }
        .ta { transform:translateY(-8px) scale(1.02) !important; }

        .particle { position:absolute; border-radius:50%; pointer-events:none; animation:pulse 3s ease-in-out infinite; }

        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#030712}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#3b82f6,#8b5cf6);border-radius:4px}
      `}</style>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 16 }, (_, i) => {
          const size = (i % 5) * 2 + 4;
          const left = (i * 13) % 100;
          const top = (i * 17) % 100;

          return (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 animate-pulse`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background:
                  i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
              }}
            />
          );
        })}
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? "backdrop-blur-2xl bg-gray-950/85 border-b border-white/5 shadow-2xl" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <LogoCard />
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            {[
              ["#why", "Why Zedny"],
              ["#journey", "Journey"],
              ["#enterprise", "Enterprise"],
              ["#clients", "Clients"],
            ].map(([h, l]) => (
              <a
                key={h}
                href={h}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <Motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
            className="btn-g px-5 py-2.5 rounded-xl text-sm font-bold"
          >
            Get Started →
          </Motion.button>
        </div>
      </nav>
      {/* HERO */}
      <Hero />
      {/* WHY DIFFERENT */}
      <section id="why" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-bold">
              The Difference
            </p>
            <h2
              className="text-5xl md:text-6xl font-extrabold mb-5 d"
              style={{ letterSpacing: "-0.03em" }}
            >
              Not Another{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                E-Learning App
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Other platforms throw content at you. Zedny engineers your growth
              — precisely, intelligently, relentlessly.
            </p>
          </div>
<Motion.div
  variants={stagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
>            {differentiators.map((d, i) => (
               <Motion.div key={i} variants={scaleIn}
              viewport={{once:false}}>
                <GlassCard className="p-7 group hover:bg-white/8 hover:scale-105 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl mb-5">
                    {d.icon}
                  </div>

                  <h3 className="font-bold text-lg mb-2 d">{d.title}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </GlassCard>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* INDIVIDUAL JOURNEY */}
      <IndividualSection />

      {/* ENTERPRISE */}
      <CompanySection />

      {/* AI ENGINES */}
      <AiEnginesSection />

      {/* STATS */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-purple-600/8 to-cyan-600/6" />
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once:false }}
          className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
        >
          {" "}
          {[
            ["25+", "Enterprise Clients"],
            ["450+", "Courses"],
            ["1000+", "Readings"],
            ["120", "Assessment Qs"],
            ["580K", "AI Parameters"],
          ].map(([n, l]) => (
            <Motion.div
              key={l}
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text d">
                {n}
              </div>
              <div className="text-gray-600 text-xs uppercase tracking-wider mt-2">
                {l}
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </section>
      <ClientsSection />
      {/* CTA */}
      <CTA />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
