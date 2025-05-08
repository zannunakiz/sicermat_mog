import { Menu } from "lucide-react"
import { useState } from "react"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import { fetchData } from "./lib/fetchData"
import Device from "./pages/Device"
import History from "./pages/History"
import HomePage from "./pages/HomePage"
import Jump from "./pages/Jump"
import Pushup from "./pages/Puhshup"
import Punch from "./pages/Punch"
import Situp from "./pages/Situp"
import Squat from "./pages/Squat"

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className={`min-h-screen bg-slate-900 `}>
        <header className=" shadow-sm border-b border-slate-700 py-3 fixed top-0 z-50 bg-slate-900/80 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center  mt-1 md:mt-0">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <Link to="/" className="ml-4 font-bold text-lg md:text-2xl text-gray-300">
                  SICERMAT<span className="hidden md:inline"> (Sistem Cerdas Monitoring Atlet Terpadu)</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className={`pt-32 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8  bg-transparent`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/device" element={<Device />} />
            <Route path="/history" element={<History />} />
            <Route path="/pushup" element={<Pushup fetchData={fetchData} />} />
            <Route path="/situp" element={<Situp fetchData={fetchData} />} />
            <Route path="/squat" element={<Squat fetchData={fetchData} />} />
            <Route path="/jump" element={<Jump fetchData={fetchData} />} />
            <Route path="/punch" element={<Punch fetchData={fetchData} />} />
          </Routes>
        </main>
      </div>
    </Router >
  )
}

export default App