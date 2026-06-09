export function Navbar() {
  return (
    <header className="border-b border-[#1c2a40]">
      <nav className="max-w-7xl mx-auto h-20 px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
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
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
            onClick={() =>
              document
                .getElementById("cv")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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

          <li
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
        </ul>
      </nav>
    </header>
  );
}
