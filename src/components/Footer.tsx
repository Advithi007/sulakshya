import { Link, useLocation } from "@tanstack/react-router";
import { publicMedia } from "../lib/public-media";
import { Youtube, Facebook, Instagram, Twitter, MailOpen, MapPin } from "lucide-react";

const SOCIALS = [
  { name: "YouTube", href: "https://www.youtube.com/@SulakshyaSevaSamithi", icon: Youtube },
  { name: "Facebook", href: "https://www.facebook.com/SulakshyaSevaSamithi/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/sulakshya_seva_samithi/", icon: Instagram },
  { name: "X (Twitter)", href: "https://x.com/SulakshyaNGO", icon: Twitter },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer id="contact" className="bg-ink text-cream px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 sm:gap-16">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3 font-display text-2xl">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full overflow-hidden shadow-md p-1">
              <img src={publicMedia.logo} alt="Sulakshya logo" className="w-full h-full object-contain" />
            </div>
            Sulakshya
          </div>
          <p className="text-cream/60 max-w-sm text-lg leading-relaxed">
            A volunteer-led NGO bringing joy, care and opportunity to underprivileged children — one small
            gesture at a time. Together, we can make a difference.
          </p>
          <div className="flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-brand hover:text-ink hover:border-brand transition-all duration-300"
                aria-label={s.name}
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display uppercase text-xs tracking-[0.2em] mb-6 text-brand">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li>
              <Link to="/about" className="hover:text-brand transition-colors">About Us</Link>
            </li>
            <li>
              <a href={isHome ? "#initiatives" : "/#initiatives"} className="hover:text-brand transition-colors">Our Initiatives</a>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand transition-colors">Gallery</Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-brand transition-colors">News & Articles</Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-brand transition-colors">Testimonials</Link>
            </li>
            <li>
              <a href={isHome ? "#volunteer" : "/#volunteer"} className="hover:text-brand transition-colors">Join as Volunteer</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase text-xs tracking-[0.2em] mb-6 text-brand">Reach us</h4>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex items-center gap-3">
              <MailOpen className="w-5 h-5 text-brand shrink-0" />
              <a href="mailto:sulakshyasevasamithi@gmail.com" className="hover:text-brand transition-colors">sulakshyasevasamithi@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand shrink-0" />
              <span>Warangal, Telangana, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 sm:mt-24 pt-8 border-t border-cream/10 text-xs text-cream/40 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} Sulakshya. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>Registered NGO · 917/2013</span>
          <span className="hidden sm:inline">·</span>
          <span>Made with ❤️ for the community</span>
        </div>
      </div>
    </footer>
  );
}
