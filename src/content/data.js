import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Patrick Dobranowski', // e.g: 'Name | Developer'
  lang: 'en, pl', // e.g: en, es, fr, jp
  description: "Patrick's Personal Website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm",
  name: 'Patrick Dobranowski',
  subtitle: ['Student ', 'Developer ', 'Entrepreneur'],
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I began my journey with computer science doing app, software, and game development for many years in Middle School before eventually co-founding Dupper Analytics and acting as its Vice President writing software to help smaller and medium size businesses across the nation. Since then I have presented to and impressed many large tech corporations, hired students, and made entrepreneurship one of my greatest passions. I also founded Cygnel Studios during High School as its CEO and developed software and webapps in social connections/education and game design/entertainment.',
  paragraphTwo: 'I am greatly interested in cybersecurity, machine learning neural networks, cryptography, and natural language processing and have developed many projects in these fields',
  resume: 'https://drive.google.com/file/d/1cu4yXtyPCk1GYDOzUbrRcHsY8mD8Hzi1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dupperanalytics.jpg',
    year: '2021-',
    title: 'DACS 2.0',
    cat: 'Data Analytics',
    sub: 'Dupper Analytics data collection and profitability webapp software',
    text: 'Open Source & Cloud Computing combined to provide highly-secure, scalable and reliable data analytics solutions to help small and medium size businesses compete and succeed in an increasingly data-driven world',
    url: 'http://dupperanalytics.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kqctfframework.png',
    year: '2021',
    title: 'KQCTF Framework',
    cat: 'Competition Platform',
    sub: 'Online Competition Hosting Platform',
    text: 'Competition Platform complete with a dynamic leaderboard, point scoring algorithm, admin dashboard, user/team registration, and competition management features perfect for hosting any online/remote competition',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamescreenshot.jpg',
    year: '2020-',
    title: 'Undaunted',
    cat: 'Game Design & Entertainment',
    sub: 'To Be Released On Steam',
    text: 'Procedurally generated action-adventure RPG focused on exploration of a rich and diverse world written in C#, HLSL, and the Unity Game Engine',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'delphi.png',
    year: '2021-',
    title: 'Delphi',
    cat: 'Natural Language Processing',
    sub: 'Voice Recognition Raspberry Pi',
    text: 'Natural Language Processing and Neural Network based bot that responds to voice commands and is being trained to process conversations.',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp.jpg',
    year: '2021',
    title: 'BirbChat',
    cat: 'Communications Software',
    sub: 'Desktop chat application',
    text: 'Secure and modern Python chat application using end-to-end encryption that incorporates a comforting atmosphere and animated birds delivering chat messages',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fruits.png',
    year: '2020',
    title: 'What\'s That Fruit!',
    cat: 'Machine Learning',
    sub: 'Fruit Recognizing Neural Network',
    text: 'Neural Network trained to recognize images of fruit from a live phone or desktop camera feed. Employed use of sigmoid-delta algorithm to train with thousands of labeled fruit images',
    url: 'https://www.congressionalappchallenge.us/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'selangor.jpg',
    year: '2021',
    title: 'Treasures of Selangor',
    cat: 'Game Design & Entertainment',
    sub: 'Top-Down Roguelike for PC and Mac',
    text: 'E10+ rated top-down cave crawling roguelike with a focus on procedurally generated levels, cartoon-like animation, educational puzzles, and engaging combat written in C# and the Unity Game Engine',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kernel.jpg',
    year: '2019',
    title: 'My Operating System',
    cat: 'Operating System',
    sub: 'C++ Operating System with simple kernel',
    text: 'My Own Operating System written for practice with a fully featured kernel that can manage inputs/interrupts and uses an old unix-like terminal interface',
    url: 'https://github.com/ZeroDayTea/My-Operating-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'killerqueen.jpg',
    year: '2019-',
    title: 'CTFs and Cybersecurity',
    cat: 'Cybersecurity',
    sub: 'Cybersecurity Competitor and Designer',
    text: 'Founder and Captain of Killer Queen, a nationally ranked cybersecurity team with recognition from esteemed sources such as Carnegie Mellon University, CyberPatriot, and the NCS Foundation. Hosting own CTF soon!',
    url: 'https://killerqueenctf.org', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact Me',
  btn: '',
  email: 'patrick.dobranowski@gmail.com',
  img: 'gfactcert.png',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ZeroDayTea',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/patrick-dobranowski',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ZeroDayTea',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
