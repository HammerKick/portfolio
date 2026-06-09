import { useState } from "react";
import { SkillCard } from "../cards/SkillCard";
import { useInView } from "../hooks/useInView";

type AnimVariant = "fade-up" | "fade-left" | "fade-right";

function Animated({
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
}: {
  children: React.ReactNode;
  variant?: AnimVariant;
  delay?: number;
  threshold?: number;
  className?: string;
}) {
  const { ref, inView } = useInView(threshold);

  const initial: Record<AnimVariant, string> = {
    "fade-up": "translateY(28px)",
    "fade-left": "translateX(-36px)",
    "fade-right": "translateX(36px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : initial[variant],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const frontendSkills = [
  { name: "React", rating: 5 },
  { name: "TypeScript", rating: 5 },
  { name: "Vue", rating: 2 },
  { name: "Angular", rating: 4 },
  { name: "JavaScript", rating: 5 },
  { name: "HTML/CSS", rating: 5 },
  { name: "Tailwind", rating: 5 },
  { name: "Bootstrap", rating: 4 },
];

const backendSkills = [
  { name: "Node.js", rating: 5 },
  { name: "Symfony", rating: 3 },
  { name: "Java REST", rating: 5 },
  { name: "PHP", rating: 3 },
  { name: "Python", rating: 3 },
  { name: "Bash", rating: 3 },
];

const databaseSkills = [
  { name: "SQL", rating: 4 },
  { name: "PostgreSQL", rating: 3 },
  { name: "MySQL", rating: 4 },
  { name: "Oracle", rating: 2 },
  { name: "MongoDB", rating: 2 },
];

const devopsSkills = [
  { name: "Docker", rating: 3 },
  { name: "Linux", rating: 4 },
  { name: "CI/CD", rating: 2 },
  { name: "Git", rating: 5 },
  { name: "GitHub Actions", rating: 2 },
  { name: "AWS (notions)", rating: 2 },
];

const dataSkills = [
  { name: "VBA", rating: 5 },
  { name: "Excel avancé", rating: 4 },
  { name: "Automatisation data", rating: 2 },
  { name: "Reporting SQL", rating: 1 },
];

const methodSkills = [
  { name: "Agile Scrum", rating: 5 },
  { name: "Jira", rating: 5 },
  { name: "Git", rating: 5 },
  { name: "REST API", rating: 4 },
  { name: "Clean Code", rating: 3 },
  { name: "IA / ChatGPT / Claude", rating: 4 },
];

const diplomas = [
  {
    title: "Mastère Lead Dev Full Stack",
    school: "EEMI Paris",
    period: "2025 - 2027 (en cours)",
  },
  {
    title: "Licence SISW",
    school: "IUT de Vélizy",
    period: "2018 - 2019",
  },
  {
    title: "DUT Informatique",
    school: "IUT de Vélizy",
    period: "2016 - 2018",
  },
  {
    title: "EXIN Agile Scrum Fundation",
    school: "EXIN",
    period: "2026",
  },
  {
    title: "TOEIC (910)",
    school: "IUT de Vélizy",
    period: "2018",
  },
];

const experiences = [
  {
    period: "2025 → 2027",
    title: "Mastère Lead Dev Full Stack",
    company: "EEMI Paris · En alternance",
    description:
      "Formation avancée full stack : React, Vue.js, Next.js, Symfony, Node.js/MongoDB, Docker, DevOps, Sécurité Web, Architecture logicielle, IA intégrée.",
    tags: ["React", "Vue.js", "Docker", "DevOps", "Node.js"],
  },
  {
    period: "2024 → 2025",
    title: "Développeur Front-End — React / TypeScript",
    company: "JG&Co · CDD",
    description:
      "Développement d'interfaces interactives React/TypeScript pour 3 clients grands comptes (Casampro, Mitsubishi, Guy Hoquet). Interface B2B de simulation énergétique.",
    tags: ["React", "TypeScript", "Tailwind", "REST API"],
  },
  {
    period: "2019 → 2023",
    title: "Développeur VBA / SQL — Grands comptes industriels",
    company: "ESN AUSY · Missions Airbus & Safran",
    description:
      "Développement d'outils d'automatisation pour Airbus (gestion satellites) et Safran (refonte BDD interne). Environnements industriels critiques, collaboration métier.",
    tags: ["VBA", "SQL", "Oracle", "PostgreSQL", "Jira", "Agile"],
  },
  {
    period: "2018 → 2019",
    title: "Développeur VBA — Automatisation qualité",
    company: "Groupe PSA · Alternance",
    description:
      "Automatisation de la validation des pièces en usine, reporting multi-langue, fiches de suivi process.",
    tags: ["VBA", "Excel", "Automatisation"],
  },
  {
    period: "2017 → 2018",
    title: "Développeur Full Stack",
    company: "Wismas · Alternance",
    description:
      "Applications web front & back pour Yoplait et Laforêt. Outils collaboratifs, listing produits, coordination client.",
    tags: ["Angular 2", "Java REST", "SQL", "Bootstrap"],
  },
  {
    period: "2020 → 2022",
    title: "Commentateur officiel Overwatch League",
    company: "Activision Blizzard · Freelance",
    description:
      "Commentateur FR officiel pour l'Overwatch League. Tournois internationaux, millions de spectateurs, communication sous pression, vulgarisation technique.",
    tags: ["Communication", "Live", "Esport", "Blizzard"],
  },
];

type FilterType =
  | "all"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "data"
  | "other";

const filters: { label: string; value: FilterType }[] = [
  { label: "Tout afficher", value: "all" },
  { label: "Front-end", value: "frontend" },
  { label: "Back-end", value: "backend" },
  { label: "Bases de données", value: "database" },
  { label: "Cloud & DevOps", value: "devops" },
  { label: "Data & Automatisation", value: "data" },
  { label: "Méthodes & Outils", value: "other" },
];

export function CV({ id }: { id?: string }) {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <div className="p-6 md:p-24" id={id}>
      {/* ── Section : Ce qui me rend unique ── */}
      <Animated variant="fade-up" className="flex flex-col text-center gap-2">
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
            Une culture d'internet me permettant d'être au plus proche du besoin
            utilisateur
          </li>
        </ul>
      </Animated>

      {/* ── Section : Diplômes ── */}
      <div>
        <Animated variant="fade-up">
          <h2 className="text-2xl flex items-center justify-center md:text-5xl font-bold mt-12 mb-4">
            Diplômes et certifications
          </h2>
        </Animated>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-6 mb-8">
          {diplomas.map((d, i) => (
            <Animated key={i} variant="fade-up" delay={i * 80} threshold={0.1}>
              <div className="bg-[#0f1525] rounded-lg shadow-lg p-6 md:p-8 w-full border border-[#1c2a40] hover:border-[#00d4aa] hover:text-[#00d4aa] transition-all duration-300">
                <h2 className="text-[#00d4aa] text-sm uppercase font-semibold mb-6">
                  {d.title}
                </h2>
                <p className="text-sm text-slate-400 mb-1">{d.school}</p>
                <p className="text-sm text-slate-400">{d.period}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>

      {/* ── Section : Stack technique ── */}
      <Animated
        variant="fade-up"
        className="flex items-center justify-center gap-4 mb-10"
      >
        <h2 className="text-3xl md:text-5xl flex font-bold text-white">
          Stack technique
        </h2>
      </Animated>

      <Animated
        variant="fade-up"
        delay={100}
        className="flex flex-wrap items-center justify-center gap-3 mb-6"
      >
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-5 py-2 rounded-lg text-sm border transition-all ${
              filter === value
                ? "bg-blue-100 text-blue-700 border-transparent font-medium"
                : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            {label}
          </button>
        ))}
      </Animated>

      <Animated variant="fade-up" delay={200} threshold={0.05}>
        <div
          className={`bg-[#0f1525] rounded-lg shadow-lg p-6 md:p-8 ${
            filter === "all"
              ? "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8 items-start"
              : "flex flex-col md:flex-row flex-wrap gap-8 md:gap-12"
          }`}
        >
          {(filter === "all" || filter === "frontend") && (
            <SkillCard name="Front-end" skills={frontendSkills} />
          )}
          {(filter === "all" || filter === "backend") && (
            <SkillCard name="Back-end" skills={backendSkills} />
          )}
          {(filter === "all" || filter === "database") && (
            <SkillCard name="Bases de données" skills={databaseSkills} />
          )}
          {(filter === "all" || filter === "devops") && (
            <SkillCard name="Cloud & DevOps" skills={devopsSkills} />
          )}
          {(filter === "all" || filter === "data") && (
            <SkillCard name="Data & Automatisation" skills={dataSkills} />
          )}
          {(filter === "all" || filter === "other") && (
            <SkillCard name="Méthodes & Outils" skills={methodSkills} />
          )}
        </div>
      </Animated>

      <Animated variant="fade-up">
        <h2 className="text-2xl flex items-center justify-center md:text-5xl font-bold mt-8 mb-8">
          Mon parcours
        </h2>
      </Animated>

      <div className="bg-[#0f1525] rounded-lg shadow-lg p-6 md:p-8 mt-8 flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <Animated
            key={i}
            variant={i % 2 === 0 ? "fade-left" : "fade-right"}
            threshold={0.1}
            className="border-b last:border-0 pb-6 last:pb-0"
          >
            <span className="text-x font-semibold">{exp.period}</span>
            <h2 className="text-[#00d4aa] text-lg uppercase font-semibold mb-6">
              {exp.title}
            </h2>
            <p className="text-blue-500 text-sm mb-2">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Animated>
        ))}
      </div>
    </div>
  );
}
