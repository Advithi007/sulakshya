import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AboutSection } from "../components/AboutSection";
import { publicMedia } from "../lib/public-media";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Sulakshya" },
      {
        name: "description",
        content:
          "Learn about Sulakshya — our mission, vision, objectives, deeds, and the story behind our logo.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <div className="pt-40 pb-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center pb-12 border-b border-ink/10">
          {/* Logo with elegant scale, shadow & soft brand glow */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-brand/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-full overflow-hidden shadow-xl p-3 hover:scale-105 hover:rotate-3 transition-all duration-500 shrink-0 border border-border">
              <img src={publicMedia.logo} alt="Sulakshya logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-brand"></span>
              <p className="text-xs uppercase tracking-[0.4em] text-brand font-display font-semibold">
                Who We Are
              </p>
            </div>
            
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none text-brand tracking-tight font-extrabold uppercase">
                Sulakshya
              </h1>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight font-semibold uppercase pl-1">
                About Us
              </h2>
            </div>

            <p className="text-ink/75 max-w-2xl text-lg sm:text-xl font-light leading-relaxed pt-2">
              A noble goal brought to life. We are a volunteer-driven NGO dedicated to bringing joy, care, and opportunity to underprivileged children through heartfelt gestures and absolute transparency.
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <AboutSection />

      <Footer />
    </div>
  );
}
