import { motion as Motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function AiEnginesSection() {

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
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden z-10">

      <div className="absolute inset-0 mesh" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-xs uppercase tracking-widest mb-3 font-bold">
            Under The Hood
          </p>

          <h2
            className="text-4xl md:text-5xl font-extrabold d mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            10 AI Engines.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text ">
              One Platform.
            </span>
          </h2>
        </Motion.div>

        {/* CARDS */}
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            { n: "MATE", d: "Content in Egyptian Arabic, Saudi, English & French" },
            { n: "GENE", d: "Multilingual audio transcription via OpenAI Whisper" },
            { n: "SAM", d: "Transforms content for any database or system" },
            { n: "CASY", d: "AI-powered custom assessments in multiple languages" },
            { n: "MUST", d: "Voice cloning for multi-accent education" },
            { n: "ECHO", d: "Lip-sync engine, 4K video, 400% faster production" },
            { n: "LISY", d: "11-layer NLP matrix on 580K Zedny parameters" },
            { n: "MARS", d: "Personalized pathways & reels recommendation" },
            { n: "ROLL", d: "Customized reels recommendation algorithm" },
            { n: "RVC", d: "Advanced real-time voice cloning synthesis" },
          ].map((e, i) => (
            <Motion.div
              key={i}
              variants={scaleIn}
              viewport={{ once: false }}
              whileHover={{ scale: 1.08, y: -6 }}
            >
              <GlassCard className="p-5 text-center group cursor-default">

                <div
                  className={`text-xl font-extrabold mb-2 d bg-gradient-to-r ${
                    i % 3 === 0
                      ? "from-blue-400 to-cyan-300"
                      : i % 3 === 1
                      ? "from-purple-400 to-pink-300"
                      : "from-violet-400 to-blue-300"
                  } bg-clip-text `}
                >
                  {e.n}
                </div>

                <p className="text-gray-500 text-xs leading-snug group-hover:text-gray-400 transition-colors">
                  {e.d}
                </p>

              </GlassCard>
            </Motion.div>
          ))}
        </Motion.div>

      </div>
    </section>
  );
}