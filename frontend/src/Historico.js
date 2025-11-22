import { useEffect, useState } from "react";

export default function Historico({ activeUser }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/history/${activeUser}/`)
      .then((r) => r.json())
      .then(setHistory);
  }, [activeUser]);

  return (
    <div className="p-4 bg-blue-50 rounded-xl mt-4 w-full">
      <h2 className="text-primary mb-3 font-bold text-xl">
        Histórico – Usuário {activeUser}
      </h2>

      <div className="flex flex-col gap-3">
        {history.map((m) => (
          <div key={m.id} className="bg-white shadow p-3 rounded-xl">
            <p className="text-sm sm:text-base">
              <strong>Pergunta:</strong> {m.text}
            </p>
            <p className="text-secondary text-sm sm:text-base">
              <strong>Resposta:</strong> {m.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
