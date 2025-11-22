import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import UserSelector from "./UserSelector";
import Chat from "./Chat";
import Historico from "./Historico";

function App() {
  const [activeUser, setActiveUser] = useState("A");

  return (
    <BrowserRouter>
      <div className="p-4 sm:p-6 max-w-xl mx-auto">
        <UserSelector activeUser={activeUser} setActiveUser={setActiveUser} />

        <nav className="flex gap-4 mt-4 text-sm sm:text-base justify-center">
          <Link className="text-primary underline" to="/">Chat</Link>
          <Link className="text-primary underline" to="/historico">Histórico</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Chat activeUser={activeUser} />} />
          <Route path="/historico" element={<Historico activeUser={activeUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
