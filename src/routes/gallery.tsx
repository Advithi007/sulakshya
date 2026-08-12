import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { publicMedia } from "../lib/public-media";
import { galleryData } from "../lib/galleryData";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Sulakshya" },
      {
        name: "description",
        content: "A visual record of smiles, joy visits, and educational milestones from our grassroots community work.",
      },
    ],
  }),
});

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < galleryData.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryData.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="bg-cream text-ink overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="pt-40 pb-12 px-6 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center pb-12 border-b border-ink/10">
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
                Moments
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none text-brand tracking-tight font-extrabold uppercase">
                Sulakshya
              </h1>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight font-semibold uppercase pl-1">
                Gallery
              </h2>
            </div>

            <p className="text-ink/75 max-w-2xl text-lg sm:text-xl font-light leading-relaxed pt-2">
              A visual chronicle of the smiles, milestones, joy visits, and educational campaigns we have shared with children over the years.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 max-w-6xl mx-auto w-full flex-1 pb-24">
        {galleryData.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white border border-ink/10 rounded-[2.5rem] shadow-sm max-w-3xl mx-auto space-y-6 animate-in fade-in duration-700">
            <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
              <Camera className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold">No photos in gallery yet</h3>
              <p className="text-ink/60 max-w-md mx-auto">
                We are currently compiling our latest images and albums. Please check back soon or help us capture more beautiful moments!
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/1FzEgjcwpuzY4pXLKU1CwGrvqzGbVhoy5yLifg_YbC28/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 font-display uppercase text-xs hover:bg-brand hover:text-ink transition"
            >
              Sign up as Volunteer <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="masonry-grid w-full">
            {galleryData.map((item, idx) => (
              <div
                key={idx}
                className="masonry-item relative group overflow-hidden rounded-2xl border border-ink/10 bg-white cursor-pointer shadow-sm animate-in fade-in duration-500"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-cream">
                  <span className="text-[10px] uppercase tracking-widest text-brand font-semibold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display text-lg font-bold leading-snug line-clamp-2">
                    {item.caption}
                  </h4>
                  <p className="text-xs opacity-75 mt-1 font-light">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Component */}
      {lightboxIndex !== null && galleryData[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center select-none animate-in fade-in duration-300">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryData.length - 1))
            }
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[80vh] flex items-center justify-center p-4">
            <img
              src={galleryData[lightboxIndex].src}
              alt={galleryData[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev < galleryData.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-cream max-w-2xl w-full px-6">
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              {galleryData[lightboxIndex].caption}
            </p>
            <div className="flex items-center justify-center gap-3 mt-2 text-xs opacity-75">
              <span className="uppercase tracking-widest font-semibold text-brand">
                {galleryData[lightboxIndex].category}
              </span>
              <span>•</span>
              <span>{galleryData[lightboxIndex].date}</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
