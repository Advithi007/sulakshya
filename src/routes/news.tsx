import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Newspaper, ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { publicMedia } from "../lib/public-media";
import { newsData, NewsItem } from "../lib/newsData";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News & Articles — Sulakshya" },
      {
        name: "description",
        content: "Stay up to date with our grassroots initiatives, media coverage, and feature stories of change.",
      },
    ],
  }),
});

const getCategoryStyles = (category: NewsItem["category"]) => {
  switch (category) {
    case "Joy Visit":
      return "bg-blue-50 text-blue-600 border border-blue-100";
    case "Education":
      return "bg-amber-50 text-amber-600 border border-amber-100";
    case "Press":
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    case "Festive":
      return "bg-pink-50 text-pink-600 border border-pink-100";
  }
};

function NewsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < newsData.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : newsData.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="bg-cream text-ink overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="pt-40 pb-16 px-6 max-w-6xl mx-auto w-full">
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
                Journal
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none text-brand tracking-tight font-extrabold uppercase">
                Sulakshya
              </h1>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight font-semibold uppercase pl-1">
                News & Press
              </h2>
            </div>

            <p className="text-ink/75 max-w-2xl text-lg sm:text-xl font-light leading-relaxed pt-2">
              Discover stories of change, newspaper clippings, press releases, and deep logs of our operations.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 max-w-4xl mx-auto w-full flex-1 pb-24">
        {newsData.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white border border-ink/10 rounded-[2.5rem] shadow-sm max-w-3xl mx-auto space-y-6 animate-in fade-in duration-700">
            <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
              <Newspaper className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold">No articles published yet</h3>
              <p className="text-ink/60 max-w-md mx-auto">
                We are currently compiling our latest feature reports, coverage stories, and announcements. Please stay tuned!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {newsData.map((item, idx) => {
              const isPress = item.category === "Press";
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-6 bg-white border border-ink/10 rounded-2xl overflow-hidden p-4 card-lift shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Thumbnail */}
                  <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden rounded-xl bg-ink/5 shrink-0 relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-display font-semibold tracking-wider ${getCategoryStyles(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-ink/40 font-medium">
                          {item.date}
                        </span>
                        {isPress && item.publication && (
                          <span className="text-xs text-brand font-semibold italic">
                            via {item.publication}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug text-ink group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-ink/70 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(idx);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-brand hover:underline cursor-pointer bg-transparent border-none p-0"
                      >
                        View Article
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Component */}
      {lightboxIndex !== null && newsData[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between select-none animate-in fade-in duration-300">
          {/* Header Bar */}
          <div className="w-full flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-sm z-[110]">
            <div className="text-cream">
              <h4 className="font-display text-lg sm:text-xl font-bold leading-snug line-clamp-1">
                {newsData[lightboxIndex].title}
              </h4>
              <div className="flex items-center gap-3 mt-1 text-xs opacity-75">
                <span className="uppercase tracking-widest font-semibold text-brand">
                  {newsData[lightboxIndex].category}
                </span>
                {newsData[lightboxIndex].publication && (
                  <>
                    <span>•</span>
                    <span className="italic">via {newsData[lightboxIndex].publication}</span>
                  </>
                )}
                <span>•</span>
                <span>{newsData[lightboxIndex].date}</span>
              </div>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : newsData.length - 1))
            }
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Previous clipping"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center p-4 max-w-[90vw] max-h-[75vh]">
            <img
              src={newsData[lightboxIndex].thumbnail}
              alt={newsData[lightboxIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Navigation */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null && prev < newsData.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-cream rounded-full flex items-center justify-center hover:scale-105 transition duration-300 z-[110]"
            aria-label="Next clipping"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom description / caption */}
          <div className="w-full text-center text-cream bg-black/40 backdrop-blur-sm py-4 px-6 z-[110]">
            <p className="text-xs sm:text-sm font-light opacity-80 max-w-2xl mx-auto">
              {newsData[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

