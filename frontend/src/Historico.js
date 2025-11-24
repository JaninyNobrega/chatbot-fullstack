import { useEffect, useState } from "react";

export default function Historico({ activeUser }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/history/${activeUser}/`)
      .then((r) => r.json())
      .then((data) => setHistory(data))
      .catch(() => setHistory([]))
      .finally(() => setLoading(false));
  }, [activeUser]);

  return (
    <div>
      <h2 className="text-xl font-bold text-blue-800 mb-2">Histórico – Usuário {activeUser}</h2>

      {loading ? (
        <div className="text-sm text-slate-500">Carregando histórico...</div>
      ) : history.length === 0 ? (
        <div className="text-sm text-slate-500">Nenhuma mensagem registrada para este usuário.</div>
      ) : (
        <div className="space-y-3">
          {history.map((m) => (
            <div key={m.id} className="bg-white rounded-xl p-3 shadow">
              <div className="text-sm text-slate-600"><strong>Pergunta</strong></div>
              <div className="text-slate-800 mb-2">{m.text}</div>

              <div className="text-sm text-slate-600"><strong>Resposta</strong></div>
              <div className="text-slate-800">{m.response}</div>

              <div className="text-xs text-slate-400 mt-2">{new Date(m.created_at).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
