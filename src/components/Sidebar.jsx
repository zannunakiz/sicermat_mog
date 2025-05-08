import { ArrowDown, ArrowUp, ChevronRight, Dumbbell, Hand, History, X, Zap } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Sidebar = ({ isOpen, setIsOpen }) => {
   const location = useLocation()

   const navItems = [
      { name: "Pushups", path: "/pushup", icon: Dumbbell },
      { name: "Situps", path: "/situp", icon: ArrowUp },
      { name: "Squats", path: "/squat", icon: ArrowDown },
      { name: "Jumps", path: "/jump", icon: Zap },
      { name: "Punches", path: "/punch", icon: Hand },
      { name: "History", path: "/history", icon: History },
   ]

   return (
      <div>
         {/* Overlay */}
         {isOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 z-20"
               onClick={() => setIsOpen(false)}
            />
         )}

         {/* Sidebar */}
         <div
            className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
         >
            <div className="p-4 border-b border-slate-700 flex justify-between items-center mt-28">
               <h2 className="text-xl font-bold text-slate-100">Features</h2>
               <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-slate-800"
               >
                  <X className="h-5 w-5 text-slate-300" />
               </button>
            </div>

            <nav className="p-4">
               <ul className="space-y-2">
                  {navItems.map((item) => (
                     <li key={item.path}>
                        <Link
                           to={item.path}
                           className={`flex items-center justify-between p-3 rounded-md transition-colors ${location.pathname === item.path
                              ? "bg-slate-700 text-white"
                              : "hover:bg-slate-800 text-slate-300"
                              }`}
                           onClick={() => setIsOpen(false)}
                        >
                           <div className="flex items-center">
                              <item.icon className="h-5 w-5 mr-3" />
                              {item.name}
                           </div>
                           <ChevronRight className="h-4 w-4 text-blue-600 " />
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Sidebar
