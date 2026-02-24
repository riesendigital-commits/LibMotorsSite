import { motion } from "framer-motion";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Car, 
  Zap, 
  Star, 
  ArrowRight, 
  ChevronRight,
  Shield,
  Gauge,
  Phone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Expert Maintenance",
    description: "Full preventive maintenance including oil changes, fluid flushes, and safety inspections to keep you on the road.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://images.pexels.com/photos/8986030/pexels-photo-8986030.jpeg"
  },
  {
    title: "Body Work & Paint",
    description: "Professional dent repair and full-body painting in our advanced spray booths for a factory finish.",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg"
  },
  {
    title: "Mechanical Repair",
    description: "From engine rebuilds to brake replacements, our expert mechanics handle everything with precision.",
    icon: <Wrench className="w-6 h-6" />,
    image: "https://images.pexels.com/photos/8986030/pexels-photo-8986030.jpeg"
  },
  {
    title: "Expert Diagnostics",
    description: "State-of-the-art computer diagnostics to find the root cause of any issue quickly and accurately.",
    icon: <Gauge className="w-6 h-6" />,
    image: "https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg"
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5k+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24h", label: "Turnaround Time" }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/15085608/pexels-photo-15085608.jpeg" 
            alt="Liberty Motors Showroom" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <Badge className="mb-6 px-3 py-1 text-sm bg-primary/20 text-primary border-primary/20 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 mr-2 fill-primary" />
              Utah's Most Trusted Auto Shop
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Quality Work Done <br />
              <span className="text-primary italic">Right the First Time</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Professional mechanical repair, body work, and maintenance in Utah. Transparent pricing, fast turnaround, and honest communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base font-semibold px-8 h-14 shadow-xl shadow-primary/20">
                <Link to="/book-service">
                  Book Service
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-bold">500+</span> recent 5-star reviews from Utah car owners
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-900 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Full-Service Solutions for Every Vehicle Needs
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Whether it's a routine checkup, complex engine work, or a fresh coat of paint, Liberty Motors combines expert craft with modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <Card className="h-full border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link to="/book-service" className="inline-flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 text-left">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Built on Integrity, <br />
                <span className="text-primary italic">Driven by Quality</span>
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees or unexpected costs. We provide clear, itemized quotes before any work begins.",
                    icon: <ShieldCheck className="w-6 h-6" />
                  },
                  {
                    title: "Fast Turnaround",
                    desc: "We value your time. Our efficient process ensures most routine repairs are finished same-day.",
                    icon: <Clock className="w-6 h-6" />
                  },
                  {
                    title: "Expert Mechanics",
                    desc: "ASE-certified technicians with decades of combined experience across all vehicle makes.",
                    icon: <Shield className="w-6 h-6" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-white dark:bg-slate-800 p-2.5 rounded-lg shadow-sm text-primary shrink-0 h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg" 
                  alt="Quality Work" 
                  className="w-full h-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Guaranteed Service</p>
                        <p className="text-white/70 text-sm">Every repair comes with a 12-month warranty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-20 hidden lg:block">
          <img
            src="https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg"
            alt="Showroom"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/20 via-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Experience the Difference <br />
              <span className="text-primary">of Quality Automotive Care</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We're ready to get you back on the road safely. Whether you need a simple oil change or complex body work, our team in West Jordan is here to help.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-white text-lg font-bold">(801) 651-7808</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Visit Shop</p>
                  <p className="text-white text-lg font-bold">West Jordan, UT</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20">
              <Link to="/book-service">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
