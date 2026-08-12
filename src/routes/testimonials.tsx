import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, Quote } from "lucide-react";
import { publicMedia } from "../lib/public-media";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Sulakshya" },
      {
        name: "description",
        content:
          "Kind words from distinguished personalities, IAS/IPS officers, Padma Shri awardees, and community leaders who support Sulakshya.",
      },
    ],
  }),
});

const TESTIMONIALS = [
  {
    quote: 'Dear Santhosh, "Knowledge makes you great". My blessings and greetings to Sulakshya Seva Samithi.',
    name: '"Bharat Ratna" Dr. APJ Abdul Kalam',
    designation: "Former President of India",
    photo: publicMedia.testimonialPhoto("kalam.jpg"),
    fallback: "AK",
    accent: "#FF6B35",
    featured: true,
  },
  {
    quote: "సంతోష్ గారు , ఒక గొప్ప సమాజ నిర్మాణానికి మీరు చేస్తున్న కృషి అమోఘం . మీరు చేపట్టే కార్యక్రమాల ద్వారా ఉన్నత స్థితికి , ఉన్నత స్థాయి కి చేరారు . మీ కార్యక్రమాలను మరింత విస్తృత పరచండి . భారత దేశాన్ని ఒక మధురమైన అమృత బాండంగా అందరం కలిసి చేద్దాం . అభినందనలతో .. శుభాసిస్సులతో ..",
    name: '"Padmashree", "Kalatapasvi" K. Viswanath',
    designation: "Renowned Film Director, Dadasaheb Phalke Awardee",
    photo: publicMedia.testimonialPhoto("viswanath.jpg"),
    fallback: "KV",
    accent: "#7209B7",
  },
  {
    quote: "పరోపకారం ఇదం శరీరం ! ఇంత చిన్న వయస్సులో సమాజ అభ్యున్నతికై పరితపించి , ఒక మహోన్నత లక్ష్యంతో నిస్వార్ధంగా సేవా కార్యక్రమాలు చేపడుతున్న సులక్ష్య సేవా సమితిని మనస్పూర్తిగా అభినందిస్తున్నాను . ఈ యువ బృందానికి మరెందరి జీవితాల్లోనో వెలుగులు నింపే శక్తిని ఇవ్వాలని ఆ భగవంతుణ్ణి ప్రార్ధిస్తున్నాను . ఆశీస్సులతో ...",
    name: '"Padmashree", "Vanajeevi" Daripalli Ramaiah',
    designation: "Padma Shri Awardee & Renowned Environmentalist",
    photo: publicMedia.testimonialPhoto("ramaiah.jpg"),
    fallback: "DR",
    accent: "#2DC653",
  },
  {
    quote: "సులక్ష్యం, సేవ, సమితి అనే మూడు పదాలు గొప్పవి. లక్ష్యం మంచిది కావాలె, సేవాభావం అవసరం, సమితి అంటే అందరూ కలిసి ఉండాలని అర్థం . బడి అవసరాలు తీర్చాలనే సులక్ష్యంతో సేవ చేస్తున్న ఈ సమితిని, సమితి వ్యవస్థాపక అధ్యక్షులు శ్రీ మండువ సంతోష్ కు నా అభినందనలు",
    name: "Dr. Chukka Ramaiah",
    designation: "Renowned Educationist",
    photo: publicMedia.testimonialPhoto("chukka.jpg"),
    fallback: "CR",
    accent: "#0096C7",
  },
  {
    quote: "ప్రభుత్వ పాఠశాలలు ఉపాధ్యాయులు మరియు మీలాంటి స్వచ్చంధ సంస్థల ద్వారా అభివృద్ధి చెందబడతాయి . గతంలో పలుమార్లు మీరు చేపట్టిన సేవా కార్యక్రమాలకు విచ్చెయ్యడం జరిగింది . ప్రభుత్వ పాఠశాలల బలోపేతానికి అహర్నిశలు కృషి చేస్తున్న సులక్ష్య సేవా సమితికి నా హృదయపూర్వక అభినందనలు , ఆశిస్సులు.",
    name: "Smt. Vakati Karuna, IAS",
    designation: "Former District Collector, Warangal; Director of Public Health & Family Welfare, Govt. of Telangana",
    photo: publicMedia.testimonialPhoto("karuna.jpg"),
    fallback: "VK",
    accent: "#E63946",
  },
  {
    quote: "పిల్లలకు చిన్నతనం నుంచే మొక్కలు నాటాలనే తలంపుతో మా దంపతులను ఖమ్మం నుంచి ఇక్కడికి పిలిపించి , మా చేత మొక్కలు నాటించి , ఘనంగా సన్మానించినందుకు సులక్ష్య సేవా సమితికి కృతజ్ఞతలు.. నేను , నా అని ఆలోచించే ఈ రోజుల్లో సమాజం కోసం ఎంతో కొంత చెయ్యాలని తలచి సమాజ సేవ సామాజిక కార్యక్రమాలు చేస్తున్న సులక్ష్య సేవా సమితి వారికీ , ప్రత్యేకించి మండువ సంతోష్ గారికి నా ప్రకృతి మాత ప్రణామాలు.",
    name: "Shri Madabhushi Sridhar",
    designation: "Central Information Commissioner, New Delhi",
    photo: publicMedia.testimonialPhoto("sridhar.jpg"),
    fallback: "MS",
    accent: "#9B5DE5",
  },
  {
    quote: "Very good and inspiring work. Keep it up. I wholeheartedly appreciate you personally and on behalf of the government for the exemplary work you are doing for the benefit of the needy. Congratulations to Sulakshya Seva Samithi headed by Santhosh. All the best.",
    name: "Shri V. V. Lakshminarayana, IPS",
    designation: "Former Joint Director, CBI; Additional DGP (Maharashtra)",
    photo: publicMedia.testimonialPhoto("lakshminarayana.jpg"),
    fallback: "VL",
    accent: "#4361EE",
  },
  {
    quote: "సమాజంలో మానవీయ విలువలు పెంపొందించాలనే మహత్తర సంకల్పంతో సులక్ష్య సేవా సమితి చేపడుతున్న సామాజిక సేవా కార్యక్రమాలు అపూర్వమైనవి, ఉన్నతమైనవి మరియు స్ఫూర్తిదాయకమైనవి . శుభం భూయాత్ .",
    name: "Shri Tanikella Bharani",
    designation: "Renowned Actor & Writer",
    photo: publicMedia.testimonialPhoto("bharani.jpg"),
    fallback: "TB",
    accent: "#8338EC",
  },
  {
    quote: "సులక్ష్య సేవ సమితి చేసిన కార్యక్రమాలు చూచి ఆనందమయింది. ప్రారంభించిన ఆనతి కాలంలోనే అన్ని రంగాలలో వినూత్నంగా సేవా కార్యక్రమాలు చేసిన ఈ సంస్థ అభినందనీయం. అధ్యక్షలు, సభ్యులు ఎంతో ఉత్సాహంతో , దీక్షతో చేస్తున్నారు. ఇంకా ఎన్నో సేవలు చేసే శక్తి భగవంతుడు వీరికి ఇవ్వాలని మనసారా కోరుతూ ఆశిర్వదిస్తున్నాను.",
    name: '"Padmashree" Nerella Venu Madhav',
    designation: "Padma Shri Awardee, Renowned Mimicry Artist",
    photo: publicMedia.testimonialPhoto("venumadhav.jpg"),
    fallback: "NV",
    accent: "#06D6A0",
  },
  {
    quote: "Initiatives like those coming from Sulakshya Seva Samithi (SSS) are not only laudable for their spirit and ethos but also for the social positive externality they engender. Our country needs many more such youngsters to come together on fora such as these and contribute towards social, economical and moral upliftment.",
    name: "Shri Karthikeya Mishra, IAS",
    designation: "Former CMD, APNPDCL",
    photo: publicMedia.testimonialPhoto("mishra.jpg"),
    fallback: "KM",
    accent: "#3A86FF",
  },
  {
    quote: "Sulakshya Seva Samithi is doing a commendable job for the well-being of society. I wish them all the best in all their future endeavours.",
    name: "Smt. Amrapali Kata, IAS",
    designation: "Deputy Secretary, Prime Minister's Office (PMO)",
    photo: publicMedia.testimonialPhoto("amrapali.jpg"),
    fallback: "AK",
    accent: "#FF006E",
  },
  {
    quote: "Great work Santhosh. Please keep it up. You are an asset to this society & country. Let your tribe increase in this world. All the best.",
    name: "Shri V. C. Sajjanar, IPS",
    designation: "VC & MD, TSRTC",
    photo: publicMedia.testimonialPhoto("sajjanar.jpg"),
    fallback: "VS",
    accent: "#FB5607",
  },
  {
    quote: "జ్ఞానం సృష్టి సమస్య పూరణమ్ ధాన్యం మూల రహస్య ప్రేరణం జ్ఞానాన్ని పిల్లలకు అందిస్తూ ఎంతో మంది యువ నాయకులను ప్రేరేపిస్తున్న \\\" సులక్ష్య సేవా సమితి\\\" సంతోష్ కు నా హృదయపూర్వక అభినందనలు",
    name: "Prof. Nishanth Dongari",
    designation: "Scientist, Indian Institute of Technology Hyderabad",
    photo: publicMedia.testimonialPhoto("dongari.jpg"),
    fallback: "ND",
    accent: "#FFBE0B",
  },
  {
    quote: "Very grateful for the service Sulakshya Seva Samithi is rendering to the needy & vulnerable. More power to their tribe. God bless & Godspeed.",
    name: "Smt. Pamela Satpathy, IAS",
    designation: "Former Municipal Commissioner",
    photo: publicMedia.testimonialPhoto("satpathy.jpg"),
    fallback: "PS",
    accent: "#56CFE1",
  },
];

function PhotoCard({
  photo, fallback, accent, name, designation, quote
}: {
  photo: string; fallback: string; accent: string; name: string; designation: string; quote: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col">
      {/* Decorative accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 opacity-80" style={{ background: accent }} />
      
      <Quote className="w-8 h-8 mb-6" style={{ color: accent, opacity: 0.15 }} />
      <blockquote className="text-ink/80 leading-relaxed text-base italic mb-8 relative z-10 flex-grow">"{quote}"</blockquote>

      {/* Person header: photo + name */}
      <div className="flex items-center gap-4 mt-6">
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-white font-display text-3xl font-bold shadow-md ring-2 ring-cream transition-transform duration-500 group-hover:scale-105"
          style={{ background: accent }}
        >
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const p = (e.currentTarget as HTMLImageElement).parentElement;
              if (p) p.textContent = fallback;
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm sm:text-base text-ink font-semibold leading-tight mb-1">{name}</p>
          <p className="text-xs text-ink/60 leading-snug">{designation}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <div className="bg-cream text-ink min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-ink/50 font-display mb-4">Words of Encouragement</p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none mb-6">Testimonials</h1>
        <p className="text-ink/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Kind words from India's most distinguished personalities — former Presidents, IAS & IPS officers,
          Padma Shri awardees, renowned artists and community leaders.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="font-display text-4xl text-brand">100+</p>
            <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">Distinguished voices</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="font-display text-4xl text-brand">13+</p>
            <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">Years of trust</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="font-display text-4xl text-brand">∞</p>
            <p className="text-xs uppercase tracking-widest text-ink/50 mt-1">Blessings received</p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="relative bg-ink text-cream rounded-3xl p-10 sm:p-14 overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-brand/20" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-display mb-6">Featured Testimonial</p>
            <blockquote className="font-display text-2xl sm:text-3xl leading-snug mb-10 max-w-3xl">
              "{featured.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg"
                style={{ background: featured.accent }}
              >
                <img
                  src={featured.photo}
                  alt={featured.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const p = (e.currentTarget as HTMLImageElement).parentElement;
                    if (p) p.textContent = featured.fallback;
                  }}
                />
              </div>
              <div>
                <p className="font-display text-lg text-cream">{featured.name}</p>
                <p className="text-cream/60 text-sm">{featured.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/50 font-display mb-12 text-center">All Testimonials</p>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {rest.map((t, i) => (
            <div key={i} className="break-inside-avoid">
              <PhotoCard
                photo={t.photo}
                fallback={t.fallback}
                accent={t.accent}
                name={t.name}
                designation={t.designation}
                quote={t.quote}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand text-center">
        <h2 className="font-display text-4xl sm:text-6xl mb-6 text-ink">Be part of the story.</h2>
        <p className="text-ink/70 mb-10 max-w-xl mx-auto">
          Join Sulakshya as a volunteer, donor, or partner and help us create more stories worth telling.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://docs.google.com/forms/d/1FzEgjcwpuzY4pXLKU1CwGrvqzGbVhoy5yLifg_YbC28/viewform"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-8 py-4 font-display uppercase hover:bg-cream hover:text-ink transition"
          >
            Volunteer now <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-display uppercase hover:bg-ink hover:text-cream transition"
          >
            Back to Home <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
