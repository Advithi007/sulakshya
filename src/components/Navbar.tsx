import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { publicMedia } from "../lib/public-media";

const NAV = ["About", "Initiatives", "Gallery", "Testimonials", "News", "Volunteer", "Contact"];

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a generic function for the nav links to handle both hash and page routes
  const renderNavLink = (n: string, isMobile = false) => {
    const className = isMobile 
      ? "text-xl font-display hover:text-brand transition-colors py-2" 
      : "hover:text-brand transition-colors";
    
    if (n === "About") {
      return (
        <Link key={n} to="/about" onClick={() => setIsOpen(false)} className={className}>
          {n}
        </Link>
      );
    }
    
    if (n === "Gallery") {
      return (
        <Link key={n} to="/gallery" onClick={() => setIsOpen(false)} className={className}>
          {n}
        </Link>
      );
    }
    
    if (n === "Testimonials") {
      return (
        <Link key={n} to="/testimonials" onClick={() => setIsOpen(false)} className={className}>
          {n}
        </Link>
      );
    }

    if (n === "News") {
      return (
        <Link key={n} to="/news" onClick={() => setIsOpen(false)} className={className}>
          {n}
        </Link>
      );
    }

    const hash = n.toLowerCase();
    
    // On home page, use simple anchor links for smooth scrolling
    if (isHome) {
      return (
        <a key={n} href={`#${hash}`} onClick={() => setIsOpen(false)} className={className}>
          {n}
        </a>
      );
    }

    // On other pages, link back to home with the hash
    return (
      <Link key={n} to="/" hash={hash} onClick={() => setIsOpen(false)} className={className}>
        {n}
      </Link>
    );
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <nav className={`flex items-center justify-between rounded-full transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur shadow-md py-2' : 'bg-cream/80 backdrop-blur-sm py-2.5'} border border-border px-4 sm:px-6 shadow-sm`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 font-display text-sm sm:text-base group">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full overflow-hidden shadow-sm p-0.5 group-hover:scale-110 transition-transform">
            <img src={publicMedia.logo} alt="Sulakshya logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold">Sulakshya</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => renderNavLink(n))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <a 
              href={isHome ? "#volunteer" : "/#volunteer"} 
              className="inline-flex items-center gap-1 rounded-full bg-ink text-cream px-4 py-2 text-xs font-display uppercase hover:bg-brand hover:text-ink transition"
            >
              Join Us <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-ink hover:text-brand transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-3 p-6 bg-cream border border-border rounded-[2.5rem] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {NAV.map((n) => renderNavLink(n, true))}
            
            <div className="mt-4 pt-6 border-t border-border flex flex-col gap-3">
               <a 
                 href={isHome ? "#volunteer" : "/#volunteer"} 
                 onClick={() => setIsOpen(false)} 
                 className="flex items-center justify-center gap-2 rounded-full bg-ink text-cream px-4 py-4 text-xs font-display uppercase hover:bg-brand hover:text-ink transition text-center w-full"
               >
                 Join Us <ArrowUpRight className="w-3 h-3" />
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
