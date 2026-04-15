import { useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-16 p-4 flex justify-between items-center max-w-6xl mt-10 ml-auto mr-auto">
      <div className="flex flex-col items-center justify-center font-nunito">
        Antoine Bournier
      </div>
      <ul className="flex flex-row gap-8 font-nunito">
        <li
          className="hover:cursor-pointer hover:text-gray-500"
          onClick={() => navigate("/")}
        >
          Accueil
        </li>
        <li
          className="hover:cursor-pointer hover:text-gray-500"
          onClick={() => navigate("/projects")}
        >
          Projets
        </li>
        <li
          className="hover:cursor-pointer hover:text-gray-500"
          onClick={() => navigate("/cv")}
        >
          CV
        </li>
      </ul>
    </nav>
  );
}
