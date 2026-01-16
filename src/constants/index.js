import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  khamsat,
  baeed,
  royal,
  masar,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  medpash,
  pashmedical,
  voltforge,
  techwave,
  habib,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Assistant",
    company_name: "Royal College of Sicence and Technology",
    icon: royal,
    iconBg: "#383E56",
    date: "September 2022 - January 2023",
    points: [
      "Assisting professors in conducting laboratory sessions and practical exercises for computer science students.",
      "Setting up and maintaining laboratory equipment and software to ensure smooth operation during sessions.",
      "Grading assignments and providing feedback to students on their performance in lab activities.",
      "Collaborating with faculty members to develop instructional materials and improve lab curricula.",
      "Providing guidance and support to students during lab activities, ensuring they understand the concepts and procedures.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance - Khamsat.com",
    icon: khamsat,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - october 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "freelance - Baeed.com",
    icon: baeed,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using PHP Laravel, Python Django, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Masar Almotahidoon Contracting Company",
    icon: masar,
    iconBg: "#E6DEDD",
    date: "August 2025 - Present",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MedPash",
    description:
      "Web-based platform which provides users with easy access to medical courses and resources to get certified.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medpash,
    source_code_link: "https://medpash.pashmedinnov.com/",
  },
  {
    name: "PashMed",
    description:
      "Website for pashmedical solutions company serves as an online presence for the company.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pashmedical,
    source_code_link: "https://pashmedinnov.com/",
  },
  {
    name: "VoltForge",
    description:
      "A web application store that allows users to browse, search, and buy a varitey elecrtonic products easily and securely online.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "browser storage",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: voltforge,
    source_code_link: "https://mohannedf16.github.io/VoltForge-Website/",
  },
  {
    name: "TechWave",
    description:
      "A responsive tech blog website as online presence for a company that provides web development services and other IT services.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },

    ],
    image: techwave,
    source_code_link: "https://mohannedf16.github.io/SEF-Project-1/",
  },
  {
    name: "Alhabieb Company Website",
    description: "A website provides online presence.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: habib,
    source_code_link: "https://mohannedf16.github.io/Alhabieb-Website/",
  },
];

export { services, technologies, experiences, testimonials, projects };
