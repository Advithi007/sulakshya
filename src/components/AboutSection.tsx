"use client";

import { publicMedia } from "../lib/public-media";

const OBJECTIVES = [
  { title: "Education For All", desc: "Making parents and citizens aware of the Importance and Need of Education and Seeing to it that Every child goes to school. We will motivate parents and students to go to school & continue their education further. We will also support them with books, stationery etc in the best possible way we can." },
  { title: "Health Care", desc: "As the adage goes, Health is wealth. The majority of the poor in the country spends a lot of money on their health and that affects their savings. We wish to educate people on simple but effective methods to keep themselves healthy and educate them on the various Government policies available." },
  { title: "Protecting Environment", desc: "We will try to protect the environment by creating awareness among the citizens about eco-friendly measures. Planting trees, fighting for plastic bans etc are part of this." },
  { title: "Empowering Youth", desc: "Youth is the cornerstone of this country. Any change in the country is possible only with the active participation of young people. We will motivate young people to take up social causes and ingrain a sense of social responsibility in them. We will also equip them to stand up on their own by educating them about various opportunities available." },
  { title: "Providing Basic Needs", desc: "Many people in our country are not able to meet their basic needs for food clothing and shelter. With whatever we have, we will try to reduce the hunger of at least a few. We will give clothes to those who badly need them and join them in well-established organisations if they are homeless." },
  { title: "Spreading Love & Affection", desc: "Not everyone needs financial support. Moral support is all that some people need. A warm hug, a gentle touch, and a gesture of togetherness are what make their lives happier. We will spend time with people in such need and spread the message of love and affection." },
  { title: "Dignity of Labour", desc: "Dignity of labour is not only about respecting different jobs that people do, but also about trying to understand the importance of each such job in building society. As a country, we are yet to imbibe this principle. We will spread the message to shed the attitude of looking down upon certain jobs as 'menial.' We will take up activities that are considered menial to highlight the importance of each of these jobs like sweeping the streets etc." },
  { title: "Protecting Indian Heritage & Culture", desc: "It is every citizen's responsibility to protect our rich heritage and culture. It is also our responsibility to see that our precious heritage is transferred to the next generation. We shall try to create awareness in this aspect." },
  { title: "Promoting Good Governance", desc: "Good governance is possible only when people acquire the strength to question when things go wrong. We will educate people about the importance of voting, choosing the right candidate and being a part of the Governance process." },
  { title: "Transforming Rural India", desc: "The difference between the two different Indias is more vividly visible than ever. And as Gandhiji said, Villages are where India lives. We will help people from rural areas by using the latest technology and resources so that they can improve their livelihood. We will also work with Handloom weavers & those involved in Handicrafts. With the support of the burgeoning e-commerce market across the world, we will showcase and market the products of these traditional crafts so that they get their due and lead better lives." },
];

const DEEDS = [
  { title: "Education for all", desc: "Aiding Government Schools by providing them with the required infrastructure, and distributing School Uniforms, Play Items, Books & Other stationery needs. Setting up Libraries at various underprivileged homes and assisting financially meritorious students." },
  { title: "Health care", desc: "Conducting awareness sessions to educate citizens on the importance of keeping oneself healthy. Launched 'Sulakshya Swasthya Sena' to educate citizens on the ill effects of Alcohol, Drugs & Tobacco." },
  { title: "Protecting Environment", desc: "Planting & nurturing saplings in Government Schools & Public Places. Creating awareness of the adverse effects of Plastic usage & distributing Clay Ganesh Idols." },
  { title: "Empowering youth", desc: "Organizing awareness sessions & motivational talks on various topics such as Career Guidance, Stress Management, and Cracking Competitive Examinations at schools & colleges." },
  { title: "Providing basic needs", desc: "Distributing Groceries & Other Stationary Needs to underprivileged homes. Distributing Blankets to the Homeless & Poor to gift them warmth, comfort, and protection during winter." },
  { title: "Spreading love & affection", desc: "Taking underprivileged children to movies, trips, amusement parks, restaurants, science centres etc. Conducting programs like music concerts, and spiritual discourses to bring cheer to abandoned elderly." },
  { title: "Dignity of labour", desc: "Felicitating municipal sanitation workers, spreading the message to shed the attitude of looking down upon certain jobs as menial. Felicitating unsung heroes to give them deserved recognition." },
  { title: "Promoting good governance", desc: "Conducting awareness sessions on RTI, voting, consumer rights, citizen rights & other contemporary issues." },
  { title: "Heritage & Relief", desc: "Taking children to historical places. Educating rural people on organic farming. Carried out massive Covid Relief Activities and celebrating festivals with the underprivileged." },
];

export function AboutSection() {
  return (
    <section id="about" className="pb-24 space-y-32">
      
      {/* Intro Editorial Layout */}
      <div className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink font-display mb-12">
          We are a group of friends bonded by the belief that our <span className="text-brand">well-being</span> is ensured by the well-being of <span className="text-brand">society</span>.
        </h2>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <p className="text-ink/80 text-lg leading-relaxed">
              So, we take it as our primary responsibility to put all possible efforts into the welfare of our society apart from our day-to-day tidings. We wish to contribute in our way to enrich society in various areas like Education, Healthcare, Environment, and Youth Empowerment.
            </p>
            <p className="text-ink/80 text-lg leading-relaxed">
              We also wish to work towards protecting our Rich Heritage and Culture, while spreading core humane values of our culture to strive for the well-being of all. 
            </p>
            <p className="font-display text-2xl text-brand italic">
              'Sarve Jana Sukhinobhavanthu.'
            </p>
          </div>
          
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-[2rem] overflow-hidden">
              <img src={publicMedia.about1} alt="Volunteers in action" className="w-full h-full object-cover object-[center_20%] rounded-[2rem]" />
            </div>
            <div className="flex flex-col justify-between bg-white border border-border p-8 rounded-[2rem]">
              <p className="text-ink/80 leading-relaxed mb-8">
                Transparency is one of our uncompromising principles and we will be of utmost sincerity regarding the way funds are spent on various activities. We have set up a few parameters regarding fundraising, we only take funds from the members of the group who voluntarily come forward to support this humanitarian cause.
              </p>
              <div className="mt-auto">
                <div className="w-12 h-1 bg-brand mb-4"></div>
                <p className="font-medium text-ink text-sm">
                  Registered with Govt. of Andhra Pradesh under the AP Societies Registration Act. 2001 (Reg. No. 917/2013).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="bg-ink text-cream p-12 sm:p-20 rounded-t-[3rem] md:rounded-tr-none md:rounded-l-[3rem] flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand font-display mb-6">Our Future</p>
            <h3 className="font-display text-5xl mb-8">Vision</h3>
            <p className="text-cream/80 text-xl leading-relaxed font-light">
              To work towards a more equitable society where the basic needs of all people are met, and everyone develops a responsible attitude towards society.
            </p>
          </div>
          <div className="bg-brand text-ink p-12 sm:p-20 rounded-b-[3rem] md:rounded-bl-none md:rounded-r-[3rem] flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-6">Our Purpose</p>
            <h3 className="font-display text-5xl mb-8">Mission</h3>
            <p className="text-ink/90 text-xl leading-relaxed font-light">
              We are committed to reaching out to more people and empowering them to make a transformative impact on their lives and cultural livelihoods. We aspire to continue our philosophical work by educating, empowering, and enlightening the lives of many.
            </p>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">The Emblem</p>
              <h3 className="font-display text-4xl sm:text-6xl">About Our Logo</h3>
            </div>
            <div className="space-y-6 text-lg text-ink/80 leading-relaxed font-light">
              <p>
                The three S's in tricolour in the form of an unfurled flag represent the name of our organisation "Sulakshya Seva Samithi" and the colours of the Indian National Flag. 'Sulakshya' is a combination of two words 'Su' (Good) & 'Lakshya' (Goal), summing as a Noble Goal.
              </p>
              <p>
                The four pictures in the logo represent our core objectives: Education, Youth empowerment, Protecting Environment & Healthcare. We have used tricolour in most parts which conveys Indianness.
              </p>
              <p>
                The eleven-member human chain at the bottom represents teamwork. We have specifically chosen eleven because Cricket is like a religion in India & a Cricket team comprises eleven members. As we play as a team in this game, we will work as a real team in the organization.
              </p>
            </div>
          </div>
          <div className="relative aspect-square sm:aspect-auto sm:h-[600px] rounded-[3rem] overflow-hidden bg-white border border-border flex items-center justify-center p-12 group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.975_0.009_88),transparent)] opacity-50"></div>
            <img src={publicMedia.logo} alt="Sulakshya Logo" className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>

      {/* Objectives (List style) */}
      <div className="bg-white border-y border-border py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brand font-display mb-4">Our Pillars</p>
          <h3 className="font-display text-5xl sm:text-7xl mb-16 text-ink">Our Objectives</h3>
          <div className="space-y-12">
            {OBJECTIVES.map((obj, i) => (
              <div key={i} className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-12 group">
                <span className="font-display text-4xl sm:text-6xl text-ink/20 group-hover:text-brand transition-colors duration-500">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-2xl sm:text-3xl text-ink">{obj.title}</h4>
                  <p className="text-ink/70 leading-relaxed text-lg">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Deeds */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60 font-display mb-4">Impact</p>
            <h3 className="font-display text-5xl sm:text-7xl mb-6">Our Deeds</h3>
            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl font-light">
              Apart from the hundreds of events from 2008 – 2013, we have been carrying out various philanthropic activities since our inception in 2013.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-[4/3] sm:aspect-[3/2] rounded-3xl overflow-hidden hidden lg:block">
            <img src={publicMedia.about2} alt="Sulakshya Event" className="w-full h-full object-cover object-[center_10%]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEEDS.map((deed, i) => (
            <div key={i} className="bg-secondary p-10 rounded-[2rem] hover:bg-ink hover:text-cream transition-colors duration-300 group">
              <h4 className="font-display text-2xl mb-4 group-hover:text-brand">{deed.title}</h4>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed group-hover:text-cream/80">{deed.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sincere Gratitude */}
      <div className="px-6 max-w-5xl mx-auto pt-12">
        <div className="text-center">
          <h3 className="font-display text-5xl sm:text-7xl mb-12">Our Sincere Gratitude</h3>
          <div className="space-y-8 text-xl sm:text-2xl text-ink/80 leading-relaxed font-light">
            <p>
              We are deeply grateful for the testimonials from distinguished personalities from various fields of life, the blessings of the elderly destitute, and the joy on the faces of underprivileged children. 
            </p>
            <p>
              The unwavering trust of our donors and the unparalleled support from family, friends, and well-wishers, along with the endless encouragement from the media fraternity, have been the driving force behind our success at Sulakshya Seva Samithi. Without all of you, our achievements would not have been possible.
            </p>
            <p>
              We are not only grateful for your support, but we also treasure every moment we have spent with you on our journey over the past decade. We hope to receive the same kind of support from you in our future endeavours. 
            </p>
          </div>
          <div className="mt-16 pt-12 border-t border-ink/10">
            <p className="font-display text-3xl sm:text-5xl text-brand italic">
              "Sarve Jana Sukhinobhavanthu."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
