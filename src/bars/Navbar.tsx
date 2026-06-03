import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="border-b border-[#1c2a40]">
      <nav className="max-w-7xl mx-auto h-20 px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="
            cursor-pointer
            font-mono
            text-xl
            font-bold
            text-[#00d4aa]
            tracking-wider
            select-none
          "
        >
          {"<AB/>"}
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 md:gap-12">
          <li
            onClick={() => navigate("/")}
            className="
              cursor-pointer
              text-slate-400
              hover:text-[#00d4aa]
              transition-colors
              duration-300
            "
          >
            Accueil
          </li>

          <li
            onClick={() => navigate("/projects")}
            className="
              cursor-pointer
              text-slate-400
              hover:text-[#00d4aa]
              transition-colors
              duration-300
            "
          >
            Projets
          </li>

          <li
            onClick={() => navigate("/cv")}
            className="
              cursor-pointer
              text-slate-400
              hover:text-[#00d4aa]
              transition-colors
              duration-300
            "
          >
            CV
          </li>

        </ul>
      </nav>
    </header>
  );
}