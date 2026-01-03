import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Zap, Shield, Palette, Battery, Bell, Lock, 
  Smartphone, Settings, Wifi, Moon, Volume2, Eye 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Kernel optimizations and system tweaks for buttery smooth performance. Every millisecond counts.",
    category: "Performance",
  },
  {
    icon: Battery,
    title: "Extended Battery Life",
    description: "Advanced power management and doze optimizations to keep you going all day long.",
    category: "Performance",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Monthly security patches and hardened system components to keep your data safe.",
    category: "Privacy",
  },
  {
    icon: Lock,
    title: "App Lock",
    description: "Secure your sensitive apps with biometric or PIN protection built right into the system.",
    category: "Privacy",
  },
  {
    icon: Eye,
    title: "Privacy Dashboard",
    description: "Complete visibility into what apps are accessing your camera, microphone, and location.",
    category: "Privacy",
  },
  {
    icon: Palette,
    title: "Theming Engine",
    description: "Customize every aspect of your device with our powerful Monet-based theming system.",
    category: "Customization",
  },
  {
    icon: Settings,
    title: "Status Bar Tweaks",
    description: "Full control over status bar icons, clock position, battery styles, and more.",
    category: "Customization",
  },
  {
    icon: Bell,
    title: "Notification Control",
    description: "Advanced notification management with custom LED patterns and edge lighting.",
    category: "Customization",
  },
  {
    icon: Moon,
    title: "Night Mode",
    description: "System-wide dark mode with scheduled activation and per-app preferences.",
    category: "Features",
  },
  {
    icon: Volume2,
    title: "Sound Control",
    description: "Per-app volume control, custom audio profiles, and equalizer settings.",
    category: "Features",
  },
  {
    icon: Wifi,
    title: "Network Manager",
    description: "Advanced Wi-Fi and cellular settings with network priority and data controls.",
    category: "Features",
  },
  {
    icon: Smartphone,
    title: "Gesture Navigation",
    description: "Customizable gesture controls for a seamless navigation experience.",
    category: "Features",
  },
];

const categories = ["Performance", "Privacy", "Customization", "Features"];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Packed with <span className="text-gradient">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Every feature is carefully crafted to enhance your Android experience 
              without compromising stability or battery life.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {categories.map((category) => (
        <section key={category} className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full gradient-hero" />
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((f) => f.category === category)
                .map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Features;
