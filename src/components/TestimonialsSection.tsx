const TESTIMONIALS = [
  {
    quote: "Dear Santhosh, \"Knowledge makes you great\". My blessings and greetings to Sulakshya Seva Samithi.",
    name: "\"Bharat Ratna\" Dr. APJ Abdul Kalam",
    designation: "Former President of India",
    initials: "AK",
    color: "bg-orange-100 text-orange-700",
  },
  {
    quote: "సంతోష్ గారు , ఒక గొప్ప సమాజ నిర్మాణానికి మీరు చేస్తున్న కృషి అమోఘం . మీరు చేపట్టే కార్యక్రమాల ద్వారా ఉన్నత స్థితికి , ఉన్నత స్థాయి కి చేరారు . మీ కార్యక్రమాలను మరింత విస్తృత పరచండి . భారత దేశాన్ని ఒక మధురమైన అమృత బాండంగా అందరం కలిసి చేద్దాం . అభినందనలతో .. శుభాసిస్సులతో ..",
    name: "\"Padmashree\", \"Kalatapasvi\" K. Viswanath",
    designation: "Renowned Film Director, Dada Saheb Phalke Awardee",
    initials: "KV",
    color: "bg-purple-100 text-purple-700",
  },
  {
    quote: "పరోపకారం ఇదం శరీరం ! ఇంత చిన్న వయస్సులో సమాజ అభ్యున్నతికై పరితపించి , ఒక మహోన్నత లక్ష్యంతో నిస్వార్ధంగా సేవా కార్యక్రమాలు చేపడుతున్న సులక్ష్య సేవా సమితిని మనస్పూర్తిగా అభినందిస్తున్నాను . ఈ యువ బృందానికి మరెందరి జీవితాల్లోనో వెలుగులు నింపే శక్తిని ఇవ్వాలని ఆ భగవంతుణ్ణి ప్రార్ధిస్తున్నాను . ఆశీస్సులతో ...",
    name: "\"Padmashree\", \"Vanajeevi\" Daripalli Ramaiah",
    designation: "Padmashree Awardee & Environmentalist",
    initials: "DR",
    color: "bg-green-100 text-green-700",
  },
  {
    quote: "సులక్ష్యం, సేవ, సమితి అనే మూడు పదాలు గొప్పవి. లక్ష్యం మంచిది కావాలె, సేవాభావం అవసరం, సమితి అంటే అందరూ కలిసి ఉండాలని అర్థం . బడి అవసరాలు తీర్చాలనే సులక్ష్యంతో సేవ చేస్తున్న ఈ సమితిని, సమితి వ్యవస్థాపక అధ్యక్షులు శ్రీ మండువ సంతోష్ కు నా అభినందనలు",
    name: "Dr. Chukka Ramaiah",
    designation: "Renowned Educationist",
    initials: "CR",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote: "ప్రభుత్వ పాఠశాలలు ఉపాధ్యాయులు మరియు మీలాంటి స్వచ్చంధ సంస్థల ద్వారా అభివృద్ధి చెందబడతాయి . ప్రభుత్వ పాఠశాలల బలోపేతానికి అహర్నిశలు కృషి చేస్తున్న సులక్ష్య సేవా సమితికి నా హృదయపూర్వక అభినందనలు , ఆశిస్సులు.",
    name: "Smt. Vakati Karuna, IAS",
    designation: "Former District Collector, Warangal; Director of Public Health & Family Welfare, Govt. of Telangana",
    initials: "VK",
    color: "bg-rose-100 text-rose-700",
  },
  {
    quote: "పిల్లలకు చిన్నతనం నుంచే మొక్కలు నాటాలనే తలంపుతో మా దంపతులను ఖమ్మం నుంచి ఇక్కడికి పిలిపించి , మా చేత మొక్కలు నాటించి , ఘనంగా సన్మానించినందుకు సులక్ష్య సేవా సమితికి కృతజ్ఞతలు. నేను , నా అని ఆలోచించే ఈ రోజుల్లో సమాజం కోసం ఎంతో కొంత చెయ్యాలని తలచి సమాజ సేవ చేస్తున్న సులక్ష్య సేవా సమితి వారికీ నా ప్రకృతి మాత ప్రణామాలు.",
    name: "Shri Madabhushi Sridhar",
    designation: "Central Information Commissioner, New Delhi",
    initials: "MS",
    color: "bg-amber-100 text-amber-700",
  },
  {
    quote: "Very good and inspiring work. Keep it up. I wholeheartedly appreciate you personally and on behalf of the government for the exemplary work you are doing for the benefit of the needy. Congratulations to Sulakshya Seva Samithi headed by Santhosh. All the best.",
    name: "Shri V. V. Lakshminarayana",
    designation: "IPS, Additional DGP (Maharashtra), Former JD of CBI",
    initials: "VL",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    quote: "సమాజంలో మానవీయ విలువలు పెంపొందించాలనే మహత్తర సంకల్పంతో సులక్ష్య సేవా సమితి చేపడుతున్న సామాజిక సేవా కార్యక్రమాలు అపూర్వమైనవి, ఉన్నతమైనవి మరియు స్ఫూర్తిదాయకమైనవి . శుభం భూయాత్ .",
    name: "Distinguished Personality",
    designation: "Eminent Leader",
    initials: "EP",
    color: "bg-teal-100 text-teal-700",
  },
  {
    quote: "సులక్ష్య సేవ సమితి చేసిన కార్యక్రమాలు చూచి ఆనందమయింది. ప్రారంభించిన ఆనతి కాలంలోనే అన్ని రంగాలలో వినూత్నంగా సేవా కార్యక్రమాలు చేసిన ఈ సంస్థ అభినందనీయం. అధ్యక్షలు, సభ్యులు ఎంతో ఉత్సాహంతో , దీక్షతో చేస్తున్నారు. ఇంకా ఎన్నో సేవలు చేసే శక్తి భగవంతుడు వీరికి ఇవ్వాలని మనసారా కోరుతూ ఆశిర్వదిస్తున్నాను.",
    name: "Community Elder",
    designation: "Well-Wisher",
    initials: "CE",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    quote: "Initiatives like those coming from Sulakshya Seva Samithi (SSS) are not only laudable for their spirit and ethos but also for the social positive externality they engender. Our country needs many more such youngsters to come together on fora such as these and contribute towards social, economical and moral upliftment.",
    name: "Eminent Academic",
    designation: "Social Commentator",
    initials: "EA",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote: "Sulakshya Seva Samithi is doing a commendable job for the well-being of society. I wish them all the best in all their future endeavours.",
    name: "Distinguished Supporter",
    designation: "Community Leader",
    initials: "DS",
    color: "bg-lime-100 text-lime-700",
  },
  {
    quote: "Great work Santhosh. Please keep it up. You are an asset to this society & country. Let your tribe increase in this world. All the best.",
    name: "Senior Volunteer",
    designation: "Friend & Well-Wisher",
    initials: "SV",
    color: "bg-pink-100 text-pink-700",
  },
  {
    quote: "జ్ఞానాన్ని పిల్లలకు అందిస్తూ ఎంతో మంది యువ నాయకులను ప్రేరేపిస్తున్న \" సులక్ష్య సేవా సమితి\" సంతోష్ కు నా హృదయపూర్వక అభినందనలు",
    name: "Community Leader",
    designation: "Social Activist",
    initials: "CL",
    color: "bg-orange-100 text-orange-700",
  },
  {
    quote: "Very grateful for the service Sulakshya Seva Samithi is rendering to the needy & vulnerable. More power to their tribe. God bless & Godspeed.",
    name: "Faithful Supporter",
    designation: "Donor & Well-Wisher",
    initials: "FS",
    color: "bg-sky-100 text-sky-700",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Words of Encouragement</p>
        <h2 className="font-display text-4xl sm:text-6xl text-ink">Testimonials</h2>
        <p className="mt-4 text-ink/60 max-w-xl mx-auto">Kind words from distinguished personalities, community leaders and well-wishers who inspire us every day.</p>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <p className="text-ink/80 leading-relaxed text-sm md:text-base italic mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-display text-sm font-bold ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <p className="font-display text-sm text-ink leading-tight">{t.name}</p>
                <p className="text-xs text-ink/50 mt-0.5 leading-snug">{t.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
