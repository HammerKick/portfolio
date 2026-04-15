export function Projects() {
  return (
    <>
      <h1 className="flex items-center justify-center text-6xl font-bold mb-12 mt-4">
        Mes projets
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row justify-between items-stretch mb-10 bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
          <div className="flex flex-col gap-2 col-span-3 p-8">
            <h1 className="text-6xl font-bold mb-4">HammerKick</h1>
            <p className="text-lg text-gray-500">
              Application React de présentation de mes activités gaming et
              esport <br /> <br />
              Stack : React, Tailwind CSS, Vite, TypeScript
            </p>
            <a
              href="https://hammerkick.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-green-500 hover:bg-green-300 hover:cursor-pointer rounded-lg p-4 mt-4 text-white font-bold w-max"
            >
              Voir le projet
            </a>
          </div>
          <div className="col-span-3 flex flex-row justify-end">
            <img
              src="/images/hammerkick-site.png"
              alt="HammerKick"
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row justify-between items-stretch mb-10 bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
          <div className="col-span-3 flex flex-row justify-end">
            <img
              src="/images/backlog.png"
              alt="Backlog"
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-3 p-8">
            <h1 className="text-6xl font-bold mb-4">Backlog</h1>
            <p className="text-lg text-gray-500">
              Application Symfony pour enregistrer des jeux et les noter en
              donnant son avis rédigé et conservé en base de données <br />{" "}
              <br />
              Stack : Symfony, Twig, Tailwind CSS, Vite, MySQL
            </p>
            <a
              href="https://github.com/HammerKick/Backlog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-green-500 hover:bg-green-300 hover:cursor-pointer rounded-lg p-4 mt-4 text-white font-bold w-max"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
