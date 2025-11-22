import { useState } from "react";

export default function Chat({ activeUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:8000/api/send/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: activeUser, text })
    });

    const data = await res.json();
    setMessages([...messages, data]);
    setText("");
  };

  return (
    <div className="p-4 bg-blue-50 rounded-xl mt-4 w-full">
      <h2 className="text-primary mb-3 font-bold text-xl">Chat</h2>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          className="border p-2 rounded w-full text-sm sm:text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite sua mensagem..."
        />

        <button
          onClick={sendMessage}
          className="bg-primary text-white px-4 py-2 rounded-xl w-full sm:w-auto"
        >
          Enviar
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {messages.map((m) => (
          <div key={m.id} className="bg-white shadow p-3 rounded-xl">
            <p className="text-sm sm:text-base">
              <strong>Você:</strong> {m.text}
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
