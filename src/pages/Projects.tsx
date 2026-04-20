export function Projects() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl md:text-6xl font-bold mb-8 md:mb-12 mt-4 px-4">
        Mes projets
      </h1>

      <div className="flex items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-stretch mb-8 md:mb-10 bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4">
          <div className="flex flex-col gap-2 p-6 md:p-8 md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">HammerKick</h2>
            <p className="text-base md:text-lg text-gray-500">
              Application React de présentation de mes activités gaming et esport
              <br />
              <br />
              Stack : React, Tailwind CSS, Vite, TypeScript
            </p>
            
              <a href="https://hammerkick.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-green-500 hover:bg-green-300 rounded-lg px-6 py-4 mt-4 text-white font-bold self-start"
            >
              Voir le projet
            </a>
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2">
            <img
              src="/images/hammerkick-site.png"
              alt="HammerKick"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-stretch mb-8 md:mb-10 bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4">
          <div className="flex justify-center md:justify-start md:w-1/2">
            <img
              src="/images/backlog.png"
              alt="Backlog"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 p-6 md:p-8 md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Backlog</h2>
            <p className="text-base md:text-lg text-gray-500">
              Application Symfony pour enregistrer des jeux et les noter en
              donnant son avis rédigé et conservé en base de données
              <br />
              <br />
              Stack : Symfony, Twig, Tailwind CSS, Vite, MySQL
            </p>
            
              <a href="https://github.com/HammerKick/Backlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-green-500 hover:bg-green-300 rounded-lg px-6 py-4 mt-4 text-white font-bold self-start"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}