export default function UserSelector({ activeUser, setActiveUser }) {
  return (
    <div className="flex gap-3 p-4 bg-blue-100 rounded-xl flex-wrap justify-center">
      <button
        onClick={() => setActiveUser("A")}
        className={`px-4 py-2 rounded-xl w-full sm:w-auto ${
          activeUser === "A"
            ? "bg-primary text-white"
            : "bg-secondary text-white"
        }`}
      >
        Usuário A
      </button>

      <button
        onClick={() => setActiveUser("B")}
        className={`px-4 py-2 rounded-xl w-full sm:w-auto ${
          activeUser === "B"
            ? "bg-primary text-white"
            : "bg-secondary text-white"
        }`}
      >
        Usuário B
      </button>
    </div>
  );
}
