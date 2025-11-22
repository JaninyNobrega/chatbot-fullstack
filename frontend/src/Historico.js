import { useEffect, useState } from "react";

export default function Historico({ activeUser }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/history/${activeUser}/`)
      .then((r) => r.json())
      .then(setHistory);
  }, [activeUser]);

  return (
    <div className="p-4 bg-blue-50 rounded-xl mt-4">
      <h2 className="text-primary mb-3 font-bold">
        Histórico do Usuário {activeUser}
      </h2>

      {history.map((m) => (
        <div key={m.id} className="bg-white shadow p-3 rounded-xl mb-2">
          <p><strong>Pergunta:</strong> {m.text}</p>
          <p className="text-secondary"><strong>Resposta:</strong> {m.response}</p>
        </div>
      ))}
    </div>
  );
}
