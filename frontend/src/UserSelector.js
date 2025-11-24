export default function UserSelector({ activeUser, setActiveUser }) {
  const users = ["A", "B", "C"];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-4">
      <h3 className="text-sm font-medium text-slate-700 mb-2">Selecionar usuário</h3>
      <div className="flex gap-3 flex-wrap">
        {users.map((u) => (
          <button
            key={u}
            onClick={() => setActiveUser(u)}
            className={`px-3 py-2 rounded-lg text-sm font-medium min-w-[72px] ${
              activeUser === u ? "bg-blue-700 text-white shadow" : "bg-white text-blue-700 border border-blue-100"
            }`}
          >
            Usuário {u}
          </button>
        ))}
      </div>
    </div>
  );
}
