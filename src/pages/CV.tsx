import { SkillCard } from "../cards/SkillCard";

const frontendSkills = [
  { name: "Angular", rating: 4, icon: "/portfolio/images/angular.png" },
  { name: "React", rating: 5, icon: "/portfolio/images/reactlogo.png" },
  { name: "Vue", rating: 2, icon: "/portfolio/images/vue.png" },
  { name: "JavaScript", rating: 5, icon: "/portfolio/images/JavaScript-Logo.png" },
  { name: "TypeScript", rating: 5, icon: "/portfolio/images/Typescript_logo_.png" },
  { name: "HTML", rating: 5, icon: "/portfolio/images/HTML5_logo_and_wordmark.png" },
  { name: "CSS", rating: 4, icon: "/portfolio/images/CSS3_logo_and_wordmark.png" },
  { name: "Tailwind", rating: 5, icon: "/portfolio/images/tailwind.png" },
];

const backendSkills = [
  { name: "PHP", rating: 3, icon: "/portfolio/images/PHP.png" },
  { name: "Symfony", rating: 3, icon: "/portfolio/images/symfony.png" },
  { name: "MySQL", rating: 4, icon: "/portfolio/images/MySQL.png" },
  { name: "PostgreSQL", rating: 3, icon: "/portfolio/images/Postgresql.svg" },
  { name: "SQL", rating: 4, icon: "/portfolio/images/Sql_data_base_with_logo.png" },
  { name: "Java", rating: 5, icon: "/portfolio/images/Java_Logo.svg" },
];

const otherSkills = [
  { name: "Excel", rating: 4, icon: "/portfolio/images/excel.png" },
  { name: "VBA", rating: 5, icon: "/portfolio/images/vba.jpg" },
];

export function CV() {
  return (
    <div className="p-6 md:p-24">

      <div className="grid grid-cols-1 md:grid-cols-6 items-center mb-10 gap-6">
        <div className="flex justify-center md:hidden">
          <img
            src="/portfolio/images/antoine bournier.png"
            alt="Antoine Bournier"
            className="rounded-lg shadow-lg h-48 w-48 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 md:col-span-3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Antoine Bournier</h1>
          <p className="text-base md:text-lg text-gray-500">
            Passionné d'informatique et de jeux vidéo, mon objectif est de créer
            des interfaces et des applications utiles et fluides en suivant mes
            passions et ma créativité
          </p>
        </div>
        <div className="hidden md:flex col-span-3 flex-row justify-end">
          <img
            src="/portfolio/images/antoine bournier.png"
            alt="Antoine Bournier"
            className="rounded-lg shadow-lg h-96 w-96 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-12 justify-between gap-6 md:gap-8 items-center mb-16">
        <div className="flex justify-center md:col-span-3 md:justify-end">
          <img
            src="/portfolio/images/agile.png"
            alt="Méthode agile"
            className="rounded-lg h-40 w-40 md:h-64 md:w-64 object-cover"
          />
        </div>
        <div className="flex flex-col text-center gap-2 md:col-span-9">
          <h2 className="text-3xl md:text-6xl text-center font-bold mb-4">
            Ce qui me rend unique
          </h2>
          <ul className="text-base md:text-lg text-gray-500 list-none">
            <li className="mb-2">
              Une créativité débordante pour trouver des solutions innovantes
            </li>
            <li className="mb-2">
              Une grande capacité d'adaptation pour apprendre rapidement de
              nouvelles technologies
            </li>
            <li className="mb-2">
              Une forte motivation pour créer des applications utiles et fluides
            </li>
            <li className="mb-2">
              Une culture d'internet me permettant d'être au plus proche du
              besoin utilisateur
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16 gap-8 md:gap-12 flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:p-8">
        <SkillCard name="Front-end" skills={frontendSkills} />
        <hr className="md:hidden border-gray-200" />
        <SkillCard name="Back-end" skills={backendSkills} />
        <hr className="md:hidden border-gray-200" />
        <SkillCard name="Autres compétences" skills={otherSkills} />
      </div>
    </div>
  );
}