import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    java,
    cpp,
    kickx,
    gendex,
    mangacon,
    gemstats,
    portfolio,
    comingsoon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },
  ];
  
  const technologies = [
    {
      title: "Html",
      icon: html,
    },
    {
      title: "Css",
      icon: css,
    },
    {
      title: "Javascript",
      icon: javascript,
    },
    {
      title: "React",
      icon: reactjs,
    },
    {
      title: "Typescript",
      icon: typescript,
    },
    {
      title: "Python",
      icon: python,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "C++",
      icon: cpp,
    }
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "The portfolio website is to effectively displays my range of projects, including detailed descriptions and links to live demos or code repositories.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "KickX",
      description:
        "Utilized Next.js 14 to build a modern and performant online shoe store. Implemented Stripe's payment gateway to ensure secure and reliable transaction processing",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: kickx,
      source_code_link: "https://github.com/techinezz/KickX",
    },
    {
      name: "Gendex",
      description:
        "Built an interactive web application using React and Next.js that allows users to search for and view information about various Pokémon using the PokemonAPI.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gendex,
      source_code_link: "https://github.com/techinezz/Gendex",
    },
    {
      name: "MangaCon",
      description:
        " Developed a responsive web application using HTML and CSS that allows users to read manga online. Enhanced website functionality with JavaScript",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: mangacon,
      source_code_link: "https://github.com/techinezz/MangaCon",
    },
    {
      name: "GemStats",
      description:
        "Built a responsive web application using HTML and CSS and the RiotGamesAPI that allows users to view their League of Legends statistics.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: gemstats,
      source_code_link: "https://github.com/techinezz/GemStats",
    },
  ];

  const experiences = [
    {
      title: "COMING SOON",
      company_name: "COMPANY",
      icon: comingsoon,
      iconBg: "#383E56",
      date: "COMING SOON",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "COMING SOON",
      company_name: "COMPANY",
      icon: comingsoon,
      iconBg: "#E6DEDD",
      date: "COMING SOON",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "COMING SOON",
      company_name: "COMPANY",
      icon: comingsoon,
      iconBg: "#383E56",
      date: "COMING SOON",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ];
  
  export {technologies, experiences, projects };