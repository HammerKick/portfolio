import { useInView } from "../hooks/useInView";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  icon?: string;
}

const projects: Project[] = [
  {
    title: "HammerKick.fr — Site vitrine esport",
    description:
      "Site React développé de A à Z pour centraliser les activités de commentateur esport. Présentation des streams Twitch, vidéos YouTube et parcours de caster officiel Blizzard.",
    tags: ["React", "CSS", "GitHub Pages"],
    image: "/portfolio/images/hammerkick-site.png",
    liveUrl: "https://hammerkick.fr",
    githubUrl: "https://github.com/HammerKick/hammerkick-site",
    icon: "⌨️",
  },
  {
    title: "Backlog - Review de jeux vidéo",
    description:
      "Site Symfony et Twig permettant d'ajouter et de noter des jeux vidéo tout en écrivant une critique. Projet d'école lors de mes études à l'EEMI qui m'a appris à manipuler le framework Symfony.",
    tags: ["Symfony", "Twig"],
    image: "/portfolio/images/backlog.png",
    githubUrl: "https://github.com/HammerKick/Backlog",
    icon: "🎮",
  },
  {
    title: "Portfolio développeur",
    description:
      "Ce portfolio, en React/TypeScript développé de A à Z pour présenter mes projets et compétences. Design responsive, tailwind, hébergement sur GitHub Pages.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    image: "/portfolio/images/ce-portfolio.PNG",
    githubUrl: "https://github.com/HammerKick/portfolio",
    icon: "💼",
  },
  {
    title: "Casampro - Interface B2B — Simulation énergétique",
    description:
      "Interface React/TypeScript développée chez JG&Co — simulation énergétique pour clients grands comptes.",
    image: "/portfolio/images/casampro.jpg",
    tags: ["React", "TypeScript", "Tailwind", "REST API"],
    icon: "⚡",
  },
  {
    title: "Gestion des satellites — Airbus",
    description:
      "Application Excel/VBA développée pour Airbus — gestion et suivi de satellites de l'entreprise. Collaboration directe avec les ingénieurs métier en environnement critique.",
    tags: ["VBA", "Excel", "SQL", "Automatisation"],
    icon: "🛸",
  },
  {
    title: "Refonte base de données — Safran Aeronautics",
    description:
      "Refonte complète d'une base de données interne chez Safran. Génération via SQL et développement d'une application Excel/VBA pour automatiser le traitement et la modification des données.",
    tags: ["SQL", "VBA", "PostgreSQL", "Automatisation"],
    icon: "✈️",
  },
  {
    title: "Application web — Yoplait / Laforêt",
    description:
      "Développement full stack d'applications web pour deux clients grands comptes chez Wismas : outils d'écriture collaborative, listing produits, gestion d'événements internes.",
    tags: ["Angular 2", "Java REST", "SQL", "Bootstrap"],
    icon: "🌐",
  },
  {
    title: "Automatisation qualité — Groupe PSA",
    description:
      "Outil Excel/VBA pour automatiser la validation des pièces en usine avant envoi en production. Fiches automatisées, reporting multi-langue, gestion des chutes de découpe.",
    tags: ["VBA", "Excel", "Automatisation", "Qualité"],
    icon: "🚗",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView();
  const fromLeft = index % 2 === 0;
  const hasImage = Boolean(project.image);
  const hasLinks = project.liveUrl || project.githubUrl;

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0)"
          : `translateX(${fromLeft ? "-40px" : "40px"})`,
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      className="flex flex-col md:flex-row justify-between items-stretch mb-8 md:mb-10 bg-[#0f1525] rounded-lg shadow-lg overflow-hidden w-full md:w-3/4"
    >
      <div
        className={`flex flex-col gap-2 p-6 md:p-8 ${
          hasImage ? "md:w-1/2" : "w-full"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          {project.icon && (
            <span className="text-3xl" aria-hidden>
              {project.icon}
            </span>
          )}
          <h2 className="text-[#00d4aa] text-2xl uppercase font-semibold">
            {project.title}
          </h2>
        </div>

        <p className="text-base md:text-lg text-gray-500 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-green-500 hover:bg-green-400 transition-colors rounded-lg px-5 py-3 text-white font-bold text-sm"
              >
                🌐 Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg px-5 py-3 text-white font-bold text-sm"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>

      {hasImage && (
        <div className="flex justify-center md:justify-end md:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}

export function Projects({ id }: { id?: string }) {
  return (
    <div id={id}>
      <h1 className="flex items-center justify-center text-4xl md:text-6xl font-bold mb-8 md:mb-12 mt-4 px-4">
        Mes projets
      </h1>

      <div className="flex flex-col items-center px-4 md:px-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
