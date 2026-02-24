import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Mechanical Repair", href: "/#services" },
      { name: "Maintenance", href: "/#services" },
      { name: "Body Work", href: "/#services" },
      { name: "Painting", href: "/#services" },
      { name: "Expert Diagnostics", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Customer Stories", href: "/#reviews" },
      { name: "Contact", href: "/#contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Hours",
    links: [
      { name: "Mon - Sat: 10 AM - 6 PM", href: "#" },
      { name: "Sun: Closed", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F65de2cedf3fc45939c90b463a8a4f93d%2Fa81701624b4e42b3b3416aab7c2b9a15?format=webp&width=800&height=1200"
              alt="Liberty Motors Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-slate-400 max-w-sm">
            Utah's trusted partner for expert mechanical repair, body work, and maintenance. We believe in transparent pricing and fast, honest service.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary transition-colors hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {footerLinks.map((section) => ( section.title !== "Hours" ? (
          <div key={section.title} className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg text-white">{section.title}</h3>
            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div key={section.title} className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg text-white">{section.title}</h3>
            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <p key={link.name} className="text-slate-400">
                  {link.name}
                </p>
              ))}
            </div>
          </div>
        )))}

        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg text-white">Find Us</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <p className="text-slate-400">8480 4000 W #4, West Jordan, UT 84088</p>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <p className="text-slate-400">(801) 651-7808</p>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <p className="text-slate-400">place.holder@libertymotors.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Liberty Motors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
