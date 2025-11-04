import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About", "Services", "Contact", "Privacy Policy"],
    Services: ["Web Development", "Mobile Apps", "VOIP Specialist"],
    Resources: ["Blog", "Documentation", "Support", "Community"],
    Connect: ["Twitter", "LinkedIn", "GitHub", "Newsletter"],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/asharrpp", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Asharrpp", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akinpelulateef/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "akinpelu212@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-background text-foreground py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-fuchsia-300 mb-4">
              Asharrpp
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md text-justify">
              Building the future of web development with cutting-edge
              technology and innovative solutions that drive business success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-30">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="min-w-[120px]s">
                <h4 className="font-semibold text-foreground mb-3">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Asharrpp. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
