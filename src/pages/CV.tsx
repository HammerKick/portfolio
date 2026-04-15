import { SkillCard } from "../cards/SkillCard";

const frontendSkills = [
  { name: "Angular", rating: 4, icon: "/images/angular.png" },
  { name: "React", rating: 5, icon: "/images/reactlogo.png" },
  { name: "Vue", rating: 2, icon: "/images/vue.png" },
  { name: "JavaScript", rating: 5, icon: "/images/JavaScript-Logo.png" },
  { name: "TypeScript", rating: 5, icon: "/images/Typescript_logo_.png" },
  { name: "HTML", rating: 5, icon: "/images/HTML5_logo_and_wordmark.png" },
  { name: "CSS", rating: 4, icon: "/images/CSS3_logo_and_wordmark.png" },
  { name: "Tailwind", rating: 5, icon: "/images/tailwind.png" },
];

const backendSkills = [
  { name: "PHP", rating: 3, icon: "/images/PHP.png" },
  { name: "Symfony", rating: 3, icon: "/images/symfony.png" },
  { name: "MySQL", rating: 4, icon: "/images/MySQL.png" },
  { name: "PostgreSQL", rating: 3, icon: "/images/Postgresql.svg" },
  { name: "SQL", rating: 4, icon: "/images/Sql_data_base_with_logo.png" },
  { name: "Java", rating: 5, icon: "/images/Java_Logo.svg" },
];

const otherSkills = [
  { name: "Excel", rating: 4, icon: "/images/excel.png" },
  { name: "VBA", rating: 5, icon: "/images/vba.jpg" },
];

export function CV() {
  return (
    <div className="p-24">
      <div className="grid grid-cols-6 items-center mb-10">
        <div className="flex flex-col gap-2 col-span-3">
          <h1 className="text-6xl font-bold mb-4">Antoine Bournier</h1>
          <p className="text-lg text-gray-500">
            Passionné d’informatique et de jeux vidéo, mon objectif est de créer
            des interfaces et des applications utiles et fluides en suivant mes
            passions et ma créativité
          </p>
        </div>

        <div className="col-span-3 flex flex-row justify-end">
          <img
            src="/images/antoine bournier.png"
            alt="Antoine Bournier"
            className="rounded-lg shadow-lg h-96 w-96 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 justify-between gap-8 items-center mb-16">
        <div className="col-span-3 flex flex-row justify-end">
          <img
            src="/images/agile.png"
            alt="Méthode agile"
            className="rounded-lg h-64 w-64 object-cover"
          />
        </div>
        <div className="flex flex-col text-center gap-2 col-span-9">
          <h1 className="text-6xl text-center font-bold mb-4">
            Ce qui me rend unique
          </h1>
          <ul className="text-lg text-gray-500">
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
      <div className="mt-16 gap-12 flex flex-row bg-white rounded-lg shadow-lg p-8">
        <SkillCard name="Front-end" skills={frontendSkills} />
        <SkillCard name="Back-end" skills={backendSkills} />
        <SkillCard name="Autres compétences" skills={otherSkills} />
      </div>
    </div>
  );
}
