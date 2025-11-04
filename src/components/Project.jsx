import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

const Projects = () => {
  const projects = [
    {
      title: "ISURF-HR",
      description: "Collaborated on ISURFHR.  The goal of this project is to build a centralized Human Resource Management System (HRMS) that streamlines and automates the core HR operations of the company. The system is designed to improve efficiency, accuracy, and accessibility across the entire employee lifecycle – from recruitment and onboarding to task assignment, performance tracking, payroll, and offboarding..",
      link: "https",
      github: "https:",
      tags: ["React", "Java", "MongoDB"],
    },
    {
      title: "Development of a Fully Functional Inventory Management System (IMS)",
      description: "Collaborated with a one person development team to design, build, and deploy a bespoke, end-to-end inventory management system for Megatop, a multi-location retail client. The goal was to replace fragmented legacy processes (or manual spreadsheets) with a centralized, real-time tracking solution to optimize stock control and operational efficiency.",
      link: "hhttps://megatop.ng/login",
      github: "https://github.com/Bukkytee/ims-application",
      tags: ["React", "Express", "SQL"],
    },
    {
      title: "3CX Unified Communications Deployment",
      description: "using the best practices for cloud-based deployment (Digital Ocean), configuring SIP trunks, FQDN setup, security (SSL), and user provisioning..",
      link: "https://edgerecovery.3cx.co.uk/#/office/dashboard",
      tags: ["3CX", "Digital Ocean", "Firewall"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-fuchsia-300">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover-scale transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </a>
                </Button>
                {project.github && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
