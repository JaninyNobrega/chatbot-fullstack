export default function UserSelector({ activeUser, setActiveUser }) {
  return (
    <div className="flex gap-4 p-4 bg-blue-100 rounded-xl">
      <button
        onClick={() => setActiveUser("A")}
        className={`px-4 py-2 rounded-xl ${activeUser === "A" ? "bg-primary text-white" : "bg-secondary text-white"}`}
      >
        Usuário A
      </button>

      <button
        onClick={() => setActiveUser("B")}
        className={`px-4 py-2 rounded-xl ${activeUser === "B" ? "bg-primary text-white" : "bg-secondary text-white"}`}
      >
        Usuário B
      </button>
    </div>
  );
}
