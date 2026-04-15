interface Skill {
  name: string;
  rating: number;
  icon: string;
}

interface SkillCardProps {
  name: string;
  skills: Skill[];
}

export function SkillCard({ name, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-3xl font-bold mb-4 font-playfair">{name}</h2>
      <div className="grid grid-cols-1 gap-4 w-full mt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-between items-center"
          >
            <div className="flex flex-row gap-4 justify-between items-center w-full mb-1">
              <div className="flex items-center gap-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm font-medium text-body">
                  {skill.name}
                </span>
              </div>

              <span className="text-sm font-medium text-body">
                {skill.rating}/5
              </span>
            </div>

            <div className="w-full bg-neutral-quaternary rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{ width: `${(skill.rating / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
