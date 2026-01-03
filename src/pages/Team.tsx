import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Github, Twitter, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "ZaraKinyYu",
    role: "Founder / Lead Developer",
    bio: "Visionary behind ZienthOS. Dedicated to creating the ultimate custom Android experience.",
    avatar: "ZK",
    links: { github: "#", twitter: "", website: "" },
  },
  {
    name: "Parbindar7",
    role: "Co-founder / Co-developer",
    bio: "Building ZienthOS alongside ZaraKinyYu. Passionate about Android customization and performance.",
    avatar: "P7",
    links: { github: "#", twitter: "", website: "" },
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Meet the <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              ZienthOS is built by a passionate team of developers, designers, and 
              Android enthusiasts from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center font-display font-bold text-xl text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.links.twitter && (
                        <a
                          href={member.links.twitter}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.links.website && (
                        <a
                          href={member.links.website}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-3">
              Want to Join Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented developers, designers, and contributors 
              to help make ZienthOS even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
