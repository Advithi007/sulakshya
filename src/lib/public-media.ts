/** Root-relative URLs; source files live in `/public` (copied to site root at build). */
export const publicMedia = {
  logo: "/logo.png",
  hero1: "/hero-1.jpg",
  hero2: "/hero-2.jpg",
  hero3: "/hero-3.jpg",
  about1: "/about-1.jpg",
  about2: "/about-2.jpg",
  founder: "/founder.jpg",
  testimonialPhoto: (filename: string) => `/testimonials/${filename}`,
} as const;
