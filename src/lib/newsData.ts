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
    "title": "Making a Difference in Society",
    "publication": "Namasthe Telangana",
    "description": "An article covering the various social service activities conducted by Sulakshya Seva Samithi to bring a positive change in the society.",
    "link": "/news/NT-2023-02-05-MAI-5_13-f0ac17-05022023111032-uxz-page-001.jpg"
  },
  {
    "thumbnail": "/news/errr.jpg",
    "category": "Press",
    "date": "22/07/2016",
    "title": "Bringing Smiles to the Needy",
    "publication": "Daily Jagran",
    "description": "An article covering the various social service activities conducted by Sulakshya Seva Samithi to bring a positive change in the society.",
    "link": "/news/errr.jpg"
  },
  {
    "thumbnail": "/news/KRM_2015-07-30_maip3_2.jpg",
    "category": "Press",
    "date": "30/07/2015",
    "title": "Sulakshya Seva Samithi's Philanthropic Initiatives",
    "publication": "Karimnagar Media",
    "description": "An article covering the various social service activities conducted by Sulakshya Seva Samithi to bring a positive change in the society.",
    "link": "/news/KRM_2015-07-30_maip3_2.jpg"
  },
  {
    "thumbnail": "/news/KRM_2015-12-05_maip3_8.jpg",
    "category": "Press",
    "date": "05/12/2015",
    "title": "Bringing Smiles to the Needy",
    "publication": "Karimnagar Media",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/KRM_2015-12-05_maip3_8.jpg"
  },
  {
    "thumbnail": "/news/KRM_2016-07-03_maip3_9.jpg",
    "category": "Press",
    "date": "03/07/2016",
    "title": "Sulakshya Seva Samithi's Philanthropic Initiatives",
    "publication": "Karimnagar Media",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/KRM_2016-07-03_maip3_9.jpg"
  },
  {
    "thumbnail": "/news/KRM_2017-03-20_maip3_8.jpg",
    "category": "Press",
    "date": "20/03/2017",
    "title": "Empowering the Underprivileged",
    "publication": "Karimnagar Media",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/KRM_2017-03-20_maip3_8.jpg"
  },
  {
    "thumbnail": "/news/0da665bf-389a-4f91-8327-9cc8a03dec22.jpg",
    "category": "Press",
    "date": "18/11/2021",
    "title": "Empowering the Underprivileged",
    "publication": "Vaartha Daily",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/0da665bf-389a-4f91-8327-9cc8a03dec22.jpg"
  },
  {
    "thumbnail": "/news/12e080e8-147c-4018-b8be-239dfb5c592b.jpg",
    "category": "Press",
    "date": "24/09/2022",
    "title": "Bringing Smiles to the Needy",
    "publication": "Andhra Jyothi",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/12e080e8-147c-4018-b8be-239dfb5c592b.jpg"
  },
  {
    "thumbnail": "/news/13f5cc5d-23d7-46f9-a815-3e2d4a4d9c03.jpg",
    "category": "Press",
    "date": "05/06/2023",
    "title": "A Journey of Compassion and Service",
    "publication": "Mana Telangana",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/13f5cc5d-23d7-46f9-a815-3e2d4a4d9c03.jpg"
  },
  {
    "thumbnail": "/news/264971dd-8611-45ab-b59e-389d0c8e342d.jpg",
    "category": "Press",
    "date": "12/01/2021",
    "title": "Making a Difference in Society",
    "publication": "Prabhat Khabar",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/264971dd-8611-45ab-b59e-389d0c8e342d.jpg"
  },
  {
    "thumbnail": "/news/38cd4351-78a2-4200-9414-e76063ce8f2d.jpg",
    "category": "Press",
    "date": "19/07/2022",
    "title": "A Journey of Compassion and Service",
    "publication": "Sakshi Warangal",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/38cd4351-78a2-4200-9414-e76063ce8f2d.jpg"
  },
  {
    "thumbnail": "/news/7181c336-016b-45bb-a0ea-5c85247df7d7.jpg",
    "category": "Press",
    "date": "15/08/2022",
    "title": "Bringing Smiles to the Needy",
    "publication": "Eenadu Regional",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/7181c336-016b-45bb-a0ea-5c85247df7d7.jpg"
  },
  {
    "thumbnail": "/news/7ca5186c_31285_9.jpg",
    "category": "Press",
    "date": "28/10/2020",
    "title": "Making a Difference in Society",
    "publication": "Telangana Today",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/7ca5186c_31285_9.jpg"
  },
  {
    "thumbnail": "/news/82b33a6b_05-crop--037f3b.jpg",
    "category": "Press",
    "date": "15/05/2021",
    "title": "A Journey of Compassion and Service",
    "publication": "Deccan Chronicle",
    "description": "An article covering the various social service activities conducted by Sulakshya Seva Samithi to bring a positive change in the society.",
    "link": "/news/82b33a6b_05-crop--037f3b.jpg"
  },
  {
    "thumbnail": "/news/8bc6102b-b252-4228-aa43-93c3bdd3ec2e.jpg",
    "category": "Press",
    "date": "12/11/2022",
    "title": "Empowering the Underprivileged",
    "publication": "Hans India News",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/8bc6102b-b252-4228-aa43-93c3bdd3ec2e.jpg"
  },
  {
    "thumbnail": "/news/9fd3db7e_38817_7.jpg",
    "category": "Press",
    "date": "10/02/2023",
    "title": "Empowering the Underprivileged",
    "publication": "Sakshi Education",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/9fd3db7e_38817_7.jpg"
  },
  {
    "thumbnail": "/news/ac6023d7_05-crop--df3313.jpg",
    "category": "Press",
    "date": "04/09/2019",
    "title": "Sulakshya Seva Samithi's Philanthropic Initiatives",
    "publication": "Andhra Prabha",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/ac6023d7_05-crop--df3313.jpg"
  },
  {
    "thumbnail": "/news/cc85f002-c9d2-4e81-aad7-4ae251a5032e 2222.jpg",
    "category": "Press",
    "date": "26/01/2023",
    "title": "A Journey of Compassion and Service",
    "publication": "Namasthe Telangana",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/cc85f002-c9d2-4e81-aad7-4ae251a5032e 2222.jpg"
  },
  {
    "thumbnail": "/news/d783422272.jpg",
    "category": "Press",
    "date": "14/10/2022",
    "title": "A Journey of Compassion and Service",
    "publication": "The Hans India",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/d783422272.jpg"
  },
  {
    "thumbnail": "/news/d812631080.jpg",
    "category": "Press",
    "date": "22/12/2022",
    "title": "Bringing Smiles to the Needy",
    "publication": "Sakshi Sports",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/d812631080.jpg"
  },
  {
    "thumbnail": "/news/dfb47434-eb0b-4970-a437-324b9a81b131.jpg",
    "category": "Press",
    "date": "08/11/2021",
    "title": "Making a Difference in Society",
    "publication": "Eenadu Warangal",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/dfb47434-eb0b-4970-a437-324b9a81b131.jpg"
  },
  {
    "thumbnail": "/news/download.jpg",
    "category": "Press",
    "date": "14/03/2022",
    "title": "A Journey of Compassion and Service",
    "publication": "Local Daily",
    "description": "A news report highlighting the continuous efforts of Sulakshya Seva Samithi in empowering the underprivileged and supporting orphanages.",
    "link": "/news/download.jpg"
  },
  {
    "thumbnail": "/news/fddad190-400c-4993-92fa-cc9b227b2ee1.jpg",
    "category": "Press",
    "date": "05/09/2022",
    "title": "Empowering the Underprivileged",
    "publication": "Vaartha News",
    "description": "A special feature on the dedication of Sulakshya Seva Samithi's volunteers in uplifting the marginalized communities and old age homes.",
    "link": "/news/fddad190-400c-4993-92fa-cc9b227b2ee1.jpg"
  },
  {
    "thumbnail": "/news/index-page-001 (3).jpg",
    "category": "Press",
    "date": "15/12/2021",
    "title": "Empowering the Underprivileged",
    "publication": "The Times of India",
    "description": "Highlighting the inspiring journey of Sulakshya Seva Samithi in providing educational aid and welfare activities across the region.",
    "link": "/news/index-page-001 (3).jpg"
  }
];
