import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 py-12 md:px-24 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-16 items-center">
        {/* PHOTO + INFOS */}
        <div
          className="col-span-1 md:col-span-2 flex justify-center md:justify-end md:order-last anim-fade-right"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex flex-col items-center gap-6">
            <img
              src="/portfolio/images/antoine-bournier.png"
              alt="Antoine Bournier"
              className="
                h-64
                w-64
                md:h-96
                md:w-96
                object-cover
                rounded-xl
                border
                border-[#1c2a40]
                shadow-2xl
              "
            />

            <div
              className="
                w-full
                max-w-md
                bg-[#0f1525]
                border
                border-[#1c2a40]
                rounded-xl
                p-5
              "
            >
              <InfoRow label="Localisation" value="Châtillon, Hauts-de-Seine" />

              <InfoRow label="Disponibilité" value="Dès que possible" />

              <InfoRow
                label="Rythme"
                value="3 sem. entreprise / 1 sem. école"
              />

              <InfoRow label="Anglais" value="C1 - TOEIC 910" />

              <InfoRow label="Statut" value="Titulaire RQTH" last />
            </div>
          </div>
        </div>

        {/* TEXTE */}
        <div
          className="col-span-1 md:col-span-4 flex flex-col anim-fade-left"
          style={{ animationDelay: "100ms" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Bonjour<span className="text-[#00d4aa]"> !</span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-8">
            Je suis{" "}
            <span className="text-white font-semibold">Antoine Bournier</span>{" "}
            et vous êtes sur mon portfolio.
            <br />
            <br />
            Développeur Full Stack avec 6 ans d'expérience en environnements
            professionnels exigeants, j'ai travaillé sur des missions chez
            <span className="text-white"> Airbus</span>,
            <span className="text-white"> Safran</span> et
            <span className="text-white"> PSA</span> avant de me spécialiser en
            développement web front-end avec React et TypeScript.
            <br />
            <br />
            Actuellement en Mastère Lead Dev Full Stack à l'EEMI Paris, je
            recherche une alternance pour contribuer à des projets web ambitieux
            : applications cloud, interfaces B2B, automatisation et outils
            métiers.
            <br />
            <br />
            En dehors du code, je suis commentateur esport officiel Blizzard
            (Overwatch League 2020–2022), ce qui m'a appris à communiquer sous
            pression, à vulgariser des sujets techniques et à travailler en
            équipe dans des contextes exigeants.
            <br />
            <br />
            Mon mail :
            <span className="text-[#00d4aa] ml-2">
              bournierantoine@gmail.com
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => navigate("/projects")}
              className="
                px-6
                py-3
                rounded-lg
                bg-[#00d4aa]
                text-black
                font-semibold
                transition-all
                duration-300
                hover:bg-[#00f0c0]
                hover:scale-105
              "
            >
              Mes projets
            </button>

            <button
              onClick={() => navigate("/cv")}
              className="
                px-6
                py-3
                rounded-lg
                border
                border-[#1c2a40]
                text-white
                transition-all
                duration-300
                hover:border-[#00d4aa]
                hover:text-[#00d4aa]
              "
            >
              Mon CV
            </button>

            <a
              href="https://www.linkedin.com/in/antoine-bournier-80aaa713a/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6
                py-3
                rounded-lg
                border
                bg-blue-500
                border-[#2369db]
                text-white
                transition-all
                duration-300
                hover:bg-blue-700
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  last?: boolean;
};

function InfoRow({ label, value, last }: InfoRowProps) {
  return (
    <>
      <div className="flex justify-between gap-6 py-2">
        <span className="text-slate-400">{label}</span>
        <span className="text-white font-medium text-right">{value}</span>
      </div>

      {!last && <div className="border-b border-[#1c2a40]" />}
    </>
  );
}
