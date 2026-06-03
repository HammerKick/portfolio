interface Skill {
  name: string;
  rating: number;
}

interface SkillCardProps {
  name: string;
  skills: Skill[];
}

export function SkillCard({ name, skills }: SkillCardProps) {
  return (
    <div
      className="
        h-full
        bg-[#0f1525]
        border
        border-[#1c2a40]
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:border-[#00d4aa]
        hover:-translate-y-1
      "
    >
      <h2
        className="
          text-[#00d4aa]
          text-sm
          uppercase
          tracking-[0.25em]
          font-semibold
          mb-6
        "
      >
        {name}
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="
              px-3
              py-2
              rounded-md
              text-sm
              text-slate-300
              bg-[#111a2e]
              border
              border-[#22415a]
              hover:border-[#00d4aa]
              hover:text-[#00d4aa]
              transition-all
              duration-300
            "
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}