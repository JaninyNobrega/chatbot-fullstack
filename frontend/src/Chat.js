import { useEffect, useRef, useState } from "react";

export default function Chat({ activeUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    
    setMessages([]);
    setError("");
  }, [activeUser]);

  useEffect(() => {
   
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/send/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: activeUser, text })
      });

      if (!res.ok) throw new Error("Erro ao enviar mensagem");

      const data = await res.json();
      setMessages((prev) => [...prev, data]);
      setText("");
    } catch (err) {
      setError("Não foi possível enviar. Verifique o backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] sm:h-[65vh]">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-blue-800">Chat — Usuário {activeUser}</h2>
        <p className="text-sm text-slate-500">Converse com o sistema. As respostas são salvas no backend.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-sm text-slate-500 mt-6">Nenhuma mensagem ainda. Envie a primeira!</div>
        )}

        {messages.map((m) => (
          <div key={m.id} className="max-w-[80%]">
            {/* user bubble */}
            <div className="flex gap-3 items-start mb-2">
              <div className="flex-1">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-2xl shadow">
                  <div className="text-sm"><strong>Você</strong></div>
                  <div className="mt-1">{m.text}</div>
                </div>
              </div>
            </div>

            {/* response bubble */}
            <div className="flex gap-3 items-start mb-4">
              <div className="flex-1">
                <div className="inline-block bg-white border border-blue-100 px-4 py-2 rounded-2xl shadow-sm">
                  <div className="text-sm text-slate-600"><strong>Resposta</strong></div>
                  <div className="mt-1 text-slate-700">{m.response}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div ref={endRef} />
      </div>

      <div className="mt-4">
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-2xl border border-blue-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-700 text-white px-4 py-2 rounded-2xl min-w-[96px] disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}
