import Landing from './pages/Landing'

function App() {
  return (
     <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/50 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/50 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <Landing/>
    </div>
  )
}
export default App
