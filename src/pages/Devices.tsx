import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Clock } from "lucide-react";

const devices = [
  {
    brand: "Samsung",
    devices: [
      { name: "Galaxy M31s", codename: "m31s", status: "official", version: "16.0" },
    ],
  },
];

const Devices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Supported <span className="text-gradient">Devices</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              ZienthOS is available for a wide range of devices. Find yours below 
              and start your journey to a better Android experience.
            </p>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Official Build</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Beta Build</span>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      {devices.map((brand, brandIndex) => (
        <section key={brand.brand} className="py-8">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full gradient-hero" />
              {brand.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brand.devices.map((device, index) => (
                <div
                  key={device.codename}
                  className="group p-5 rounded-xl glass hover:border-primary/30 transition-all duration-300 animate-slide-up flex items-center justify-between"
                  style={{ animationDelay: `${(brandIndex * 3 + index) * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    {device.status === "official" ? (
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="font-display font-medium">{device.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {device.codename} • Android {device.version}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Request Device */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-3">
              Don't see your device?
            </h3>
            <p className="text-muted-foreground mb-6">
              Request official support or check our community builds for more devices.
            </p>
            <Button variant="outline">Request Device Support</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Devices;
