
export default function Footer() {
    return(
         <footer className="py-10 border-t border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
                <img 
      src="https://zedny.ai/assets/home/main-logo.svg" 
      alt="Zedny Logo" 
      className={`h-8 md:h-10 transition-transform duration-300 group-hover:scale-105`} 
    />
          </div>
          <p className="text-gray-700 text-sm">© 2024 Zedny · Where Efficiency Meets Learning Magic</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            {["Privacy","Terms","Contact"].map(l=><a key={l} href="#" className="hover:text-gray-300 transition-colors">{l}</a>)}
          </div>
        </div>
      </footer>
    )
}