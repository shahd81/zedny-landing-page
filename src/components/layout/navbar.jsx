export default function navbar (){
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "backdrop-blur-xl bg-gray-950/80 border-b border-white/5" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold glow-blue">Z</div>
            <span className="text-xl font-bold tracking-tight" style={{fontFamily:'Syne,sans-serif'}}>zedny<span className="text-blue-400">.com</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#why" className="hover:text-white transition-colors">Why Zedny</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a>
            <a href="#clients" className="hover:text-white transition-colors">Clients</a>
          </div>
          <button className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold">Get Started</button>
        </div>
      </nav>
    )
}