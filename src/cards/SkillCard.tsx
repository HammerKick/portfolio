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
    <div className="flex flex-col items-start justify-start w-full h-full px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair text-left">
        {name}
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full mt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-between items-center"
          >
            <div className="flex flex-row gap-2 justify-between items-center w-full mb-1">
              <span className="text-xs md:text-sm font-medium text-body truncate">
                {skill.name}
              </span>
              <span className="text-xs md:text-sm font-medium text-body flex-shrink-0 ml-2">
                {skill.rating}/5
              </span>
            </div>
            <div className="w-full bg-neutral-quaternary rounded-full h-3 md:h-4">
              <div
                className="bg-green-600 h-3 md:h-4 rounded-full transition-all"
                style={{ width: `${(skill.rating / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}