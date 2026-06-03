import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-8 md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center">
        <div className="col-span-1 md:col-span-3 flex justify-center md:justify-end md:order-last p-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/portfolio/images/antoine-bournier.png"
              alt="Antoine Bournier"
              className="rounded-lg shadow-lg h-64 w-64 md:h-96 md:w-96 object-cover"
            />
            <div className="flex flex-col border border-gray-400 bg-blue-50 rounded-sm p-2">
              <div className="flex flex-row justify-between gap-8 mb-1">
                <span className="font-light">Localisation</span>
                <span className="font-semibold">Châtillon, Hauts-de-Seine</span>
              </div>
              <hr className="text-gray-400"/>
              <div className="flex flex-row justify-between gap-8 mt-1 mb-1">
                <span className="font-light">Disponibilité</span>
                <span className="font-semibold">Dès que possible</span>
              </div>
              <hr className="text-gray-400"/>
              <div className="flex flex-row justify-between gap-8 mt-1 mb-1">
                <span className="font-light">Rythme</span>
                <span className="font-semibold">3 sem. entreprise / 1 sem. école</span>
              </div>
              <hr className="text-gray-400"/>
              <div className="flex flex-row justify-between gap-8 mt-1 mb-1">
                <span className="font-light">Anglais</span>
                <span className="font-semibold">C1 - TOEIC 910</span>
              </div>
              <hr className="text-gray-400"/>
              <div className="flex flex-row justify-between gap-8 mt-1 mb-1">
                <span className="font-light">Statut</span>
                <span className="font-semibold">Titulaire RQTH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 col-span-1 md:col-span-3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bonjour !</h1>
          <p className="text-base md:text-lg text-gray-500">
            Je suis Antoine Bournier et vous êtes sur mon portfolio ! <br /> <br />
            Développeur Full Stack avec 6 ans d'expérience en environnements professionnels exigeants, j'ai travaillé sur des missions chez Airbus, Safran et PSA avant de me spécialiser en développement web front-end avec React et TypeScript.
            <br/><br/>
            Actuellement en Mastère Lead Dev Full Stack à l'EEMI Paris, je recherche une alternance pour contribuer à des projets web ambitieux — applications cloud, interfaces B2B, automatisation.
            <br/><br/>
            En dehors du code, je suis commentateur esport officiel Blizzard (Overwatch League 2020–2022), ce qui m'a appris à communiquer sous pression, à vulgariser des sujets techniques et à travailler en équipe dans des contextes exigeants.
            <br /> <br/>
            Mon mail : bournierantoine@gmail.com
          </p>
          <div className="flex flex-row gap-4 mt-4 justify-center md:justify-start">
            <div
              className="bg-green-500 hover:bg-green-300 hover:cursor-pointer rounded-lg p-4 mt-4 text-white font-bold"
              onClick={() => navigate("/projects")}
            >
              Mes projets
            </div>
            <div
              className="bg-white hover:bg-gray-100 hover:cursor-pointer border rounded-lg p-4 mt-4"
              onClick={() => navigate("/cv")}
            >
              Mon CV
            </div>
            <a
              className="bg-blue-400 hover:bg-blue-300 text-white hover:cursor-pointer border rounded-lg p-4 mt-4"
              href="https://www.linkedin.com/in/antoine-bournier-80aaa713a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ma page Linkedln
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}