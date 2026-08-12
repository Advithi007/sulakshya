export interface NewsItem {
  thumbnail: string;
  category: "Joy Visit" | "Education" | "Press" | "Festive";
  date: string;
  title: string;
  description: string;
  link: string;
  publication?: string;
}

export const newsData: NewsItem[] = [
  {
    "thumbnail": "/news/Eenadu Eetharam.jpg",
    "category": "Press",
    "date": "12/10/2015",
    "title": "సరదాలు తీర్చే స్నేహితుడు",
    "publication": "Eenadu",
    "description": "అనాథ పిల్లల చిన్న చిన్న కోరికలను తీరుస్తూ, వారి జీవితాల్లో ఆనందాన్ని నింపుతున్న హన్మకొండ యువకుడు మండువ సంతోష్ స్ఫూర్తిదాయక సేవానిరతి",
    "link": "/news/Eenadu Eetharam.jpg"
  },
  {
    "thumbnail": "/news/Sakshi Special Story.jpg",
    "category": "Press",
    "date": "15/04/2013",
    "title": "సులక్ష్యం",
    "publication": "Sakshi",
    "description": "అనాథ పిల్లలకు, వృద్ధులకు చేయూతనందిస్తూ.. విద్యా సేవలు, దుప్పట్ల పంపిణీ మరియు వివిధ సామాజిక సేవా కార్యక్రమాల ద్వారా సమాజంలో మార్పు తెస్తున్న 'సులక్ష్య సేవా సమితి' విశేషాలపై 'సాక్షి' పత్రిక ప్రచురించిన ప్రత్యేక కథనం.",
    "link": "/news/Sakshi Special Story.jpg"
  },
  {
    "thumbnail": "/news/Hans India Special Story.jpg",
    "category": "Press",
    "date": "06/07/2014",
    "title": "Professionals come forward to help the underprivileged",
    "publication": "The Hans India",
    "description": "An article highlighting how a group of eight young professionals in Warangal came together to form Sulakshya Seva Samithi. It details their journey of pooling personal savings to support old age homes, orphanages, and government schools through educational aid, furniture donations, and welfare activities.",
    "link": "/news/Hans India Special Story.jpg"
  },
  {
    "thumbnail": "/news/Eenadu Sulakshya Special Story.jpg",
    "category": "Press",
    "date": "08/04/2013",
    "title": "ఈ తరం స్ఫూర్తి పయనం",
    "publication": "Eenadu",
    "description": "ఆరుగురు పట్టభద్రులైన యువకులు కలసి 'సులక్ష్య సేవా సమితి'గా ఏర్పడి, హన్మకొండ మరియు వరంగల్ పరిసర ప్రాంతాల్లోని అనాథాశ్రమాలు, వృద్ధాశ్రమాలు మరియు ప్రభుత్వ పాఠశాలలకు వివిధ సేవా కార్యక్రమాల ద్వారా సాయమందిస్తున్న తీరుపై 'ఈనాడు' పత్రిక ప్రచురించిన ప్రత్యేక కథనం.",
    "link": "/news/Eenadu Sulakshya Special Story.jpg"
  },
  {
    "thumbnail": "/news/TNSE_VAN_HYD_17-04-2022-page-002.jpg",
    "category": "Press",
    "date": "17/04/2022",
    "title": "An org that fills the lives of orphans, elderly with cheer",
    "publication": "The New Indian Express",
    "description": "An article highlighting the philanthropic journey of Sulakshya Seva Samithi (SSS) led by Santhosh Manduva. It details how the organization brings joy to children in orphanages and residents in old-age homes through outings, educational support, health camps, and infrastructure donations, as well as founder Santhosh's memorable meeting with former President Dr. A.P.J. Abdul Kalam.",
    "link": "/news/TNSE_VAN_HYD_17-04-2022-page-002.jpg"
  },
  {
    "thumbnail": "/news/NT-2023-02-05-MAI-5_13-f0ac17-05022023111032-uxz-page-001.jpg",
    "category": "Press",
    "date": "05/02/2023",
    "title": "Youth Volunteer Drive and Educational Kits",
    "publication": "Namasthe Telangana",
    "description": "An article showcasing Sulakshya's drive to distribute high-quality notebooks and school stationary bags to children in state-run primary schools.",
    "link": "/news/NT-2023-02-05-MAI-5_13-f0ac17-05022023111032-uxz-page-001.jpg"
  },
  {
    "thumbnail": "/news/errr.jpg",
    "category": "Press",
    "date": "22/07/2016",
    "title": "Sharing Happiness with Underprivileged Children",
    "publication": "Daily Jagran",
    "description": "A story highlighting the joy visits conducted by Sulakshya Seva Samithi to science centers and amusement parks in Hyderabad, bringing smiles to the faces of many orphanage children.",
    "link": "/news/errr.jpg"
  },
  {
    "thumbnail": "/news/KRM_2015-07-30_maip3_2.jpg",
    "category": "Press",
    "date": "30/07/2015",
    "title": "Sulakshya Education Aid Program Launched",
    "publication": "Karimnagar Media",
    "description": "Report on the launch of the annual education assistance program by Sulakshya Seva Samithi to support children's school fees and supply desks.",
    "link": "/news/KRM_2015-07-30_maip3_2.jpg"
  },
  {
    "thumbnail": "/news/KRM_2015-12-05_maip3_8.jpg",
    "category": "Press",
    "date": "05/12/2015",
    "title": "Warmth for All: Winter Blanket Drive",
    "publication": "Karimnagar Media",
    "description": "A news report covering the distribution of warm blankets to shelter inmates and elderly persons during the cold winter wave.",
    "link": "/news/KRM_2015-12-05_maip3_8.jpg"
  },
  {
    "thumbnail": "/news/KRM_2016-07-03_maip3_9.jpg",
    "category": "Press",
    "date": "03/07/2016",
    "title": "Supporting Government School Infrastructure",
    "publication": "Karimnagar Media",
    "description": "A news clipping on Sulakshya donating benches and blackboards to underprivileged state schools to improve the learning environment.",
    "link": "/news/KRM_2016-07-03_maip3_9.jpg"
  },
  {
    "thumbnail": "/news/KRM_2017-03-20_maip3_8.jpg",
    "category": "Press",
    "date": "20/03/2017",
    "title": "Cleanliness and Health Camp Organised",
    "publication": "Karimnagar Media",
    "description": "Details of a dental and hygiene awareness camp organized by Sulakshya volunteers in collaboration with local medical practitioners.",
    "link": "/news/KRM_2017-03-20_maip3_8.jpg"
  },
  {
    "thumbnail": "/news/0da665bf-389a-4f91-8327-9cc8a03dec22.jpg",
    "category": "Press",
    "date": "18/11/2021",
    "title": "Blanket Distribution Campaign",
    "publication": "Vaartha Daily",
    "description": "Sulakshya Seva Samithi volunteers distributing blankets to the homeless and pavement dwellers in Warangal.",
    "link": "/news/0da665bf-389a-4f91-8327-9cc8a03dec22.jpg"
  },
  {
    "thumbnail": "/news/12e080e8-147c-4018-b8be-239dfb5c592b.jpg",
    "category": "Press",
    "date": "24/09/2022",
    "title": "Fulfilling Dreams: Movie Excursion for Kids",
    "publication": "Andhra Jyothi",
    "description": "Coverage of a fun trip where Sulakshya volunteers took over 60 children from local shelter homes to a multiplex movie screening.",
    "link": "/news/12e080e8-147c-4018-b8be-239dfb5c592b.jpg"
  },
  {
    "thumbnail": "/news/13f5cc5d-23d7-46f9-a815-3e2d4a4d9c03.jpg",
    "category": "Press",
    "date": "05/06/2023",
    "title": "Planting a Green Future: Plantation Drive",
    "publication": "Mana Telangana",
    "description": "Report on the environmental awareness and tree plantation campaign run by Sulakshya Seva Samithi on World Environment Day.",
    "link": "/news/13f5cc5d-23d7-46f9-a815-3e2d4a4d9c03.jpg"
  },
  {
    "thumbnail": "/news/264971dd-8611-45ab-b59e-389d0c8e342d.jpg",
    "category": "Press",
    "date": "12/01/2021",
    "title": "Felicitation of Sulakshya Founders",
    "publication": "Prabhat Khabar",
    "description": "Founders of Sulakshya being recognized by municipal leaders on National Youth Day for their dedication to social work.",
    "link": "/news/264971dd-8611-45ab-b59e-389d0c8e342d.jpg"
  },
  {
    "thumbnail": "/news/38cd4351-78a2-4200-9414-e76063ce8f2d.jpg",
    "category": "Press",
    "date": "19/07/2022",
    "title": "Stationary Distribution at Rural Schools",
    "publication": "Sakshi Warangal",
    "description": "A photo-feature highlighting Sulakshya volunteers distributing notebooks, school bags, and pencil boxes to rural students.",
    "link": "/news/38cd4351-78a2-4200-9414-e76063ce8f2d.jpg"
  },
  {
    "thumbnail": "/news/7181c336-016b-45bb-a0ea-5c85247df7d7.jpg",
    "category": "Press",
    "date": "15/08/2022",
    "title": "Celebrating Independence Day with Orphanages",
    "publication": "Eenadu Regional",
    "description": "Sulakshya team celebrating Independence Day with children, distributing sweets, organizing patriotic games, and donating storybooks.",
    "link": "/news/7181c336-016b-45bb-a0ea-5c85247df7d7.jpg"
  },
  {
    "thumbnail": "/news/7ca5186c_31285_9.jpg",
    "category": "Press",
    "date": "28/10/2020",
    "title": "Warangal NGO clocks eight",
    "publication": "Telangana Today",
    "description": "Drawing inspiration from Swami Vivekananda’s words 'They only live, who live for the others', a youngster, Santhosh Manduva...",
    "link": "/news/7ca5186c_31285_9.jpg"
  },
  {
    "thumbnail": "/news/82b33a6b_05-crop--037f3b.jpg",
    "category": "Press",
    "date": "15/05/2021",
    "title": "Sulakshya Covid-19 Relief Outreach",
    "publication": "Deccan Chronicle",
    "description": "Distribution of sanitizers, face masks, and essential ration kits to daily wage laborers during the lockdown.",
    "link": "/news/82b33a6b_05-crop--037f3b.jpg"
  },
  {
    "thumbnail": "/news/8bc6102b-b252-4228-aa43-93c3bdd3ec2e.jpg",
    "category": "Press",
    "date": "12/11/2022",
    "title": "Career Guidance Seminar for High Schoolers",
    "publication": "Hans India News",
    "description": "Sulakshya Seva Samithi organizing a career guidance seminar with expert counselors to help students from government schools explore high education opportunities.",
    "link": "/news/8bc6102b-b252-4228-aa43-93c3bdd3ec2e.jpg"
  },
  {
    "thumbnail": "/news/9fd3db7e_38817_7.jpg",
    "category": "Press",
    "date": "10/02/2023",
    "title": "Interactive Science Exhibition Visit",
    "publication": "Sakshi Education",
    "description": "Coverage of an educational tour organized by Sulakshya Seva Samithi to a science museum, aimed at fostering curiosity among young children.",
    "link": "/news/9fd3db7e_38817_7.jpg"
  },
  {
    "thumbnail": "/news/ac6023d7_05-crop--df3313.jpg",
    "category": "Press",
    "date": "04/09/2019",
    "title": "Interactive Session with District Collector",
    "publication": "Andhra Prabha",
    "description": "The District Collector appreciating Sulakshya Seva Samithi's educational work during an interactive session in Warangal.",
    "link": "/news/ac6023d7_05-crop--df3313.jpg"
  },
  {
    "thumbnail": "/news/cc85f002-c9d2-4e81-aad7-4ae251a5032e 2222.jpg",
    "category": "Press",
    "date": "26/01/2023",
    "title": "Republic Day Drawing Competition",
    "publication": "Namasthe Telangana",
    "description": "Children showcasing their artwork during the Republic Day drawing competition hosted by Sulakshya Seva Samithi.",
    "link": "/news/cc85f002-c9d2-4e81-aad7-4ae251a5032e 2222.jpg"
  },
  {
    "thumbnail": "/news/d783422272.jpg",
    "category": "Press",
    "date": "14/10/2022",
    "title": "Interactive Workshop on Digital Literacy",
    "publication": "The Hans India",
    "description": "Sulakshya volunteers conducting an interactive digital literacy workshop, introducing students to basic computer skills.",
    "link": "/news/d783422272.jpg"
  },
  {
    "thumbnail": "/news/d812631080.jpg",
    "category": "Press",
    "date": "22/12/2022",
    "title": "Sulakshya Annual Sports Meet for Kids",
    "publication": "Sakshi Sports",
    "description": "A photo spread of the annual sports meet organized by Sulakshya Seva Samithi, encouraging physical fitness and play.",
    "link": "/news/d812631080.jpg"
  },
  {
    "thumbnail": "/news/dfb47434-eb0b-4970-a437-324b9a81b131.jpg",
    "category": "Press",
    "date": "08/11/2021",
    "title": "Providing Dining Furniture to Shelter Homes",
    "publication": "Eenadu Warangal",
    "description": "Sulakshya Seva Samithi donating dining tables and chairs to local shelter homes to improve infrastructure.",
    "link": "/news/dfb47434-eb0b-4970-a437-324b9a81b131.jpg"
  },
  {
    "thumbnail": "/news/download.jpg",
    "category": "Press",
    "date": "14/03/2022",
    "title": "Health and Dental Camp for Shelter Kids",
    "publication": "Local Daily",
    "description": "A special dental health check-up organized by Sulakshya Seva Samithi with expert dentists conducting check-ups and distributing dental care kits.",
    "link": "/news/download.jpg"
  },
  {
    "thumbnail": "/news/fddad190-400c-4993-92fa-cc9b227b2ee1.jpg",
    "category": "Press",
    "date": "05/09/2022",
    "title": "Motivational Talk Series",
    "publication": "Vaartha News",
    "description": "A news report on Sulakshya's motivational talk series led by professional coaches to inspire students in government high schools.",
    "link": "/news/fddad190-400c-4993-92fa-cc9b227b2ee1.jpg"
  },
  {
    "thumbnail": "/news/index-page-001 (3).jpg",
    "category": "Press",
    "date": "15/12/2021",
    "title": "Sulakshya Seva Samithi Progress Review",
    "publication": "The Times of India",
    "description": "A detailed article review of the social impact, growth, and community projects executed by Sulakshya Seva Samithi over the decade.",
    "link": "/news/index-page-001 (3).jpg"
  }
];
