import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A comprehensive showcase of security-focused applications, network tools, 
                and enterprise systems built with emphasis on code quality and robust architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
