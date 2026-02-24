import { motion } from "framer-motion";
import { Wrench, Clock, Phone, Mail, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function BookService() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Form Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-[0.2em] font-bold">Service Appointment</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Expert Care <br /><span className="text-primary italic">At Your Convenience</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl">
              From routine maintenance to complex engine work, our team in West Jordan is ready to get you back on the road safely.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(801) 555-0123" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Required</Label>
                <Select>
                  <SelectTrigger id="serviceType" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine">Routine Maintenance (Oil, Filters, etc.)</SelectItem>
                    <SelectItem value="mechanical">Mechanical Repair (Brakes, Engine, etc.)</SelectItem>
                    <SelectItem value="body">Body Work & Paint</SelectItem>
                    <SelectItem value="diagnostics">Diagnostics & Troubleshooting</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicleInfo">Vehicle Information (Year, Make, Model)</Label>
                <Input id="vehicleInfo" placeholder="e.g. 2018 Toyota Camry" className="h-12 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details (Optional)</Label>
                <Textarea id="details" placeholder="Tell us more about the issues you're experiencing..." className="min-h-[120px] bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800" />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20">
                Confirm Appointment Request
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Right Column - Info Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 lg:mt-32"
        >
          <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <h4 className="text-2xl font-bold mb-8">What to Expect</h4>
            <div className="space-y-8">
              {[
                { title: "Fast Confirmation", desc: "Our team will contact you within 2 business hours to confirm your time slot.", icon: <Clock className="w-6 h-6" /> },
                { title: "Expert Diagnosis", desc: "ASE-certified technicians will perform a comprehensive initial check of your vehicle.", icon: <Wrench className="w-6 h-6" /> },
                { title: "Transparent Quote", desc: "No work will be performed without your explicit approval of the estimated costs.", icon: <CheckCircle2 className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-primary/20 p-2.5 rounded-lg text-primary shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <Phone className="w-6 h-6 text-primary mb-4" />
              <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Direct Line</p>
              <p className="font-bold text-lg">(801) 651-7808</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <Mail className="w-6 h-6 text-primary mb-4" />
              <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Support Email</p>
              <p className="font-bold text-lg">place.holder@libertymotors.com</p>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1 text-left">Our Shop Location</p>
              <p className="font-bold text-lg">8480 4000 W #4, West Jordan, UT 84088</p>
              <p className="text-slate-500 text-sm mt-1">Conveniently located in West Jordan.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
