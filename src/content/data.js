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
  paragraphOne: 'Self-employed app, software, web, and game developer for many years in Middle School and High School who began working as a Software Engineer and Full-Stack for Dupper Analytics as their Vice President of Engineering and Co-Founder during Junior Year of High School. Founder of two other companies - Untitled and Untitled - (LLC) developing software and websites in student connections/education and game design/entertainment respectively. Also, an avid competitor in many STEM-based competitions and hackathons including being captain of a CTF team that placed 9th Nationally in Carnegie Mellon\'s PicoCTF, Founder, President, and Captain of a Platinum Division ranked team in CyberPatriot from Rock Canyon High School, National Scholar with Honors status receiver from 10th place at the National Cyber Scholarship Foundation Cybersecurity Competition, receiver of a Top 3 finalist ranking at Technology Student’s Association Nationals, Top 3 finalist ranking in State-Level Science Olympiad, Gold Division Level USACO member, and avid Speech and Debate Enthusiast.',
  resume: 'https://drive.google.com/file/d/1cu4yXtyPCk1GYDOzUbrRcHsY8mD8Hzi1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dupperanalytics.jpg',
    year: '2021',
    title: 'Dupper Analytics Cloud-Based Solutions 2.0',
    cat: 'Data Analytics',
    sub: 'Dupper Analytics',
    text: 'Developing cloud-based solutions for data analytics to help companies navigate an increasingly data-driven world.',
    url: 'http://54.149.213.162/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'connect.jpg',
    year: '2020-2021',
    title: 'CompsciConnect',
    cat: 'Social Connections',
    sub: 'Connecting students with computer science',
    text: 'Platform for connecting middle school, high school, and university students with computer science opportunities and competitions around them while also providing them with the knowledge and resources to be successful.',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gamescreenshot.jpg',
    year: '2020-2021',
    title: 'Untitled',
    cat: 'Game Design',
    sub: 'To Be Released On Steam',
    text: 'Procedurally generated action-adventure RPG focused on exploration of a rich and diverse world.',
    url: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kernel.jpg',
    year: '2019',
    title: 'My Operating System',
    cat: 'OS Dev',
    sub: 'My First Project',
    text: 'My Own Operating System written for practice with a fully featured Kernel that can manage inputs/interrupts and uses an old unix-like terminal interface',
    url: 'https://github.com/ZeroDayTea/My-Operating-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'killerqueen.jpg',
    year: '2019-2021',
    title: 'CTFs and Cybersecurity',
    cat: 'Cybersecurity',
    sub: 'Cybersecurity Competitors and CTF Hosters/Challenge Designers',
    text: 'Founder and Captain of Killer Queen, a Nationally Ranked Cybersecurity Team with recognition from esteemed sources such as Carnegie Mellon University, AFA CyberPatriot, and the National Cyber Scholarship Foundation. Hosting own CTF soon!',
    url: 'https://ctftime.org/team/89667', // if no repo, the button will not show up
    //url2: 'https://cylab.cmu.edu/news/2021/04/23-picoCTF2021.html',
    //url3: 'https://www.nationalcyberscholarship.org/winners-2021',
    //url4: 'https://github.com/ZeroDayTea',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    year: '2019-2021',
    title: 'Competitive Programming',
    cat: 'Programming',
    sub: 'My First Project',
    text: 'USACO Gold-Ranked Member (Awaiting Verification for Platinum) and competitor in many Competitive Programming Competitions and Hackathons as well as designer of various CP challenges',
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
      url: 'linkedin.com/in/patrick-dobranowski',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
