export default function GlassCard({ children, className="" }) {
  return (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}