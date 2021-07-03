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
  paragraphOne: 'Self-employed app, software, web, and game developer for many years in Middle School and High School who began working as a software engineer and full-stack developer for Dupper Analytics as their Vice President of Engineering and Co-Founder during Junior Year of High School. Founder of two other companies - Untitled and Untitled - (LLC) developing software and webapps in student connections/education and game design/entertainment respectively.',
  paragraphTwo: 'Also, an avid competitor in many STEM-based competitions and hackathons including:',
  paragraphThree: '-Captain of a CTF team that placed 9th Nationally in Carnegie Mellon\'s PicoCTF',
  paragraphFour: '-Founder, President, and Captain of a Platinum Division ranked team in CyberPatriot',
  paragraphFive: '-National "Scholar with Honors" scholarship receiver for 10th place at the National Cyber Scholarship Foundation Cybersecurity Competition',
  paragraphSix: '-3rd place finalist ranking at Technology Student’s Association Nationals',
  paragraphSeven: '-Top 3 finalist ranking in State-Level Science Olympiad (3x)',
  paragraphEight: '-Gold Division Level USACO member',
  paragraphNine: '-avid Speech and Debate enthusiast',
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
    text: 'Open Source & Cloud Computing combined to provide highly-secure, scalable and reliable data analytics solutions to help small and medium size businesses compete and succeed an increasingly data-driven world',
    url: 'http://54.149.213.162/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'connect.jpg',
    year: '2020-',
    title: 'CompsciConnect',
    cat: 'Social Network Software',
    sub: 'Connecting students with computer science',
    text: 'Platform for connecting middle school, high school, and university students with computer science opportunities and competitions near them while also providing them with coursework to be successful',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamescreenshot.jpg',
    year: '2020-',
    title: 'Untitled',
    cat: 'Game Design & Entertainment',
    sub: 'To Be Released On Steam',
    text: 'Procedurally generated action-adventure RPG focused on exploration of a rich and diverse world',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp.jpg',
    year: '2021',
    title: 'BirbChat',
    cat: 'Communications Software',
    sub: 'Desktop chat application',
    text: 'C# chat application that incorporates a comforting atmosphere and animated birds delivering chat messages',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'selangor.jpg',
    year: '2021',
    title: 'Treasures of Selangor',
    cat: 'Game Design & Entertainment',
    sub: 'Top-Down Roguelike for PC and Mac',
    text: 'E10+ rated top-down cave crawling roguelike with a focus on procedurally generated levels, cartoon-like animation, and combat',
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
    url: 'https://ctftime.org/team/89667', // if no repo, the button will not show up
    //url2: 'https://cylab.cmu.edu/news/2021/04/23-picoCTF2021.html',
    //url3: 'https://www.nationalcyberscholarship.org/winners-2021',
    //url4: 'https://github.com/ZeroDayTea',
  },
  {
    id: nanoid(),
    img: 'algorithmicprogramming.jpg',
    year: '2019-',
    title: 'Competitive Programming',
    cat: 'Data Science & Algorithms',
    sub: 'Algorithmic/Competitive Programming',
    text: 'USACO Gold-Ranked Member (Awaiting Platinum) and competitor in many Competitive Programming Comps and Hackathons with experience in data structures and algorithms',
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
