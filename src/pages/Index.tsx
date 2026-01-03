import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Shield, Smartphone, Sparkles, ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for maximum performance with zero bloatware.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. No telemetry, no tracking.",
  },
  {
    icon: Smartphone,
    title: "Pure Android",
    description: "Clean, stock-like experience with powerful customizations.",
  },
  {
    icon: Sparkles,
    title: "Always Fresh",
    description: "Regular updates with the latest Android features.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Based on Android 16
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Experience{" "}
              <span className="text-gradient">ZienthOS</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A custom ROM built for performance, privacy, and pure Android 
              experience. Transform your device into something extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Download className="w-5 h-5" />
                Download Now
              </Button>
              <Link to="/features">
                <Button variant="glass" size="xl">
                  Explore Features
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">ZienthOS</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built by enthusiasts, for enthusiasts. Every line of code is crafted 
              with care to deliver the best Android experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Device?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of users who have already made the switch. 
              Your journey to a better Android experience starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devices">
                <Button variant="hero" size="lg">
                  View Supported Devices
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="outline" size="lg">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
