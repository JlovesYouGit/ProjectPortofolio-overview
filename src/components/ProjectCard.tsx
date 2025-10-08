import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  securityHighlight: string;
  techStack: string[];
  githubUrl: string;
  qualityBadge?: string;
}

const ProjectCard = ({
  title,
  description,
  securityHighlight,
  techStack,
  githubUrl,
  qualityBadge,
}: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {qualityBadge && (
            <Badge variant="outline" className="text-xs">
              {qualityBadge}
            </Badge>
          )}
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="flex items-start gap-2 p-3 bg-security/10 rounded-md border border-security/20">
            <Shield className="h-4 w-4 text-security mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">{securityHighlight}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="outline" className="w-full gap-2">
            View on GitHub
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
