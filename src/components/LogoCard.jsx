import { motion as Motion } from "framer-motion";
import GlassCard from "./GlassCard";
export default function LogoCard () {
  return (
    <Motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:.5 }}
      whileHover={{ scale:1.06, y:-4 }}
    >
      <GlassCard className="px-5 py-3.5 flex items-center gap-3">
         <img 
      src="https://zedny.ai/assets/home/main-logo.svg" 
      alt="Zedny Logo" 
      className={`h-8 md:h-10 transition-transform duration-300 group-hover:scale-105`} 
    />
      </GlassCard>
    </Motion.div>
  );
}