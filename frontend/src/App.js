import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import UserSelector from "./UserSelector";
import Chat from "./Chat";
import Historico from "./Historico";
import Header from "./Header";

function App() {
  const [activeUser, setActiveUser] = useState("A");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-slate-800">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <aside className="w-full lg:w-72">
              <div className="sticky top-6 space-y-4">
                
                <UserSelector activeUser={activeUser} setActiveUser={setActiveUser} />

                <nav className="bg-white/60 backdrop-blur rounded-xl p-3 shadow">
                  <ul className="flex gap-2">

                    <li>
                      <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-lg text-sm font-medium ${
                            isActive
                              ? "bg-blue-700 text-white"
                              : "text-blue-700 hover:bg-blue-50"
                          }`
                        }
                      >
                        Chat
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/historico"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-lg text-sm font-medium ${
                            isActive
                              ? "bg-blue-700 text-white"
                              : "text-blue-700 hover:bg-blue-50"
                          }`
                        }
                      >
                        Histórico
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Conteúdo principal */}
            <section className="flex-1">
              <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
                <Routes>
                  <Route path="/" element={<Chat activeUser={activeUser} />} />
                  <Route path="/historico" element={<Historico activeUser={activeUser} />} />
                </Routes>
              </div>
            </section>

          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
