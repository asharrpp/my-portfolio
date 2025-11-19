import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "5+ years of industry experience",
    "Expert in modern web technologies",
    "Proven track record of success",
    "Client-focused approach",
    "Agile development methodology",
    "Continuous learning and innovation"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="gradient-primary bg-clip-text text-fuchsia-300">A-sharp</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
              I am a passionate developer and dedicated to creating 
              exceptional digital experiences. My mission is to help businesses thrive 
              in the digital age through innovative web solutions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
              With expertise in cutting-edge technologies and a commitment to excellence, 
              I deliver solutions that not only meet your current needs but scale with 
              your future growth.
            </p>

            {/* Achievements List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Me
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="gradient-secondary rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Projects Completed</span>
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="gradient-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-primary">99%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="gradient-primary h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">On-Time Delivery</span>
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="gradient-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About