import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Code Quality & Security Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building secure, scalable systems with focus on enterprise-grade code quality, 
            multi-layer authentication, and automated security protocols.
          </p>
          <Link to="/projects">
            <Button size="lg" className="gap-2">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
