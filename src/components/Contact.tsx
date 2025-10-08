import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in discussing security architecture, code quality practices, 
            or potential collaborations? Reach out through LinkedIn or GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/jj-onthelaptop-318538383"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/JlovesYouGit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jjonthelaptop@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
