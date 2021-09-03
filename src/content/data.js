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
  subtitle: ['Student', 'Developer', 'Entrepreneur'],
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  img2: 'dupperanalyticsfulllogo.jpg',
  img3: 'connect.jpg',
  paragraphOne: 'Self-employed app, software, web, and game developer for many years in Middle School and High School who eventually Co-Founded Dupper Analytics (LLC) and became its Vice President of Engineering doing software engineering and full-stack development during Junior Year of High School. Also Founder and CEO of Cygnel Studios (LLC) developing software and webapps in social connections/education and game design/entertainment.',
  paragraphTwo: 'Also hosted two own nationally successful cybersecurity competitions: PBJarCTF and Killer Queen CTF. Designed challenges and administrated the competitions with hundreds of participants while promoting #WomenWhoCode',
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
    img: 'connect.jpg',
    year: '2020-',
    title: 'CompSci Lumin',
    cat: 'Social Network Software',
    sub: 'Connecting students with computer science',
    text: 'MongoDB, Express, Angular, and NodeJS stack platform for connecting middle/high school and university students with computer science opportunities/competitions near them while providing them with coursework to be successful',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamescreenshot.jpg',
    year: '2020-',
    title: 'Undaunted',
    cat: 'Game Design & Entertainment',
    sub: 'To Be Released On Steam',
    text: 'Procedurally generated action-adventure RPG focused on exploration of a rich and diverse world written in C# and the Unity Game Engine',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp.jpg',
    year: '2021',
    title: 'BirbChat',
    cat: 'Communications Software',
    sub: 'Desktop chat application',
    text: 'Secure and modern Python chat application that incorporates a comforting atmosphere and animated birds delivering chat messages',
    url: '', // if no repo, the button will not show up
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
    img: 'congressappchal.jpg',
    year: '2021',
    title: 'Mental Health Connect',
    cat: 'Social Network Software',
    sub: 'Congressional App Challenge',
    text: 'Cross-platform React app that helps students and those struggling with mental health disorders to learn about their disorders and connect them with helpful opportunities around them. Congressional District CO06: Jason Crow',
    url: 'https://www.congressionalappchallenge.us/', // if no repo, the button will not show up
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
    url: 'https://killerqueenctf.net', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'algorithmicprogramming.jpg',
    year: '2019-',
    title: 'Competitive Programming',
    cat: 'Data Science & Algorithms',
    sub: 'Algorithmic/Competitive Programming',
    text: 'USACO Gold-Ranked Member (Awaiting Platinum) and competitor in many Competitive Programming Comps with experience in data structures and algorithms. Also certified thanks to having passed Stanford\'s and Princeton\'s computer science, data science and algorithms, and AI programs.',
    url: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact Me',
  btn: '',
  email: 'patrick.dobranowski@gmail.com',
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
