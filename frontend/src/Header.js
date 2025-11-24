export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-300 via-blue-700 to-blue-600 text-white shadow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-30 h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
              <img
              src={`${process.env.PUBLIC_URL}/4blue.jpg`}
              alt="Logo Chatbot"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">
              Chatbot Fullstack
            </h1>
            <p className="text-xs text-blue-100/70">
              Django + React • Dashboard admin
            </p>
          </div>
        </div>

        <div className="text-sm">
          <a
            href="http://127.0.0.1:8000/"
            target="_blank"
            rel="noopener noreferrer"            
            className="bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition"
          >
            Painel Admin
          </a>
        </div>
      </div>
    </header>
  );
}
