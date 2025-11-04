import { Card } from "@/components/ui/Card";
import { Code, Smartphone, Zap, Shield, Globe, Paintbrush } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and exceptional user experience.",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security implementation to protect your data and users.",
    },
    {
      icon: Globe,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions using AWS, Vercel, and other leading platforms.",
    },
    {
      icon: Paintbrush,
      title: "VoIP Specialist",
      description: "Solving Complex Communication Problems with 3CX.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-fuchsia-300">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital vision to life with cutting-edge technology and expert craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-spring border-border/20 bg-card/50 backdrop-blur-sm group hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;