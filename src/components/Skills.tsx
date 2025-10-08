import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Database, Network } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      items: ["Python", "TypeScript", "React", "Node.js"],
    },
    {
      icon: Shield,
      title: "Security",
      items: ["Authentication", "RBAC", "Encryption", "Vulnerability Scanning"],
    },
    {
      icon: Database,
      title: "Backend & Data",
      items: ["API Design", "Database Design", "Data Processing", "Trading Systems"],
    },
    {
      icon: Network,
      title: "Infrastructure",
      items: ["Network Security", "Protocol Implementation", "System Monitoring", "DevOps"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title}>
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-3 text-foreground">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
