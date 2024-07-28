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
    codepath,
    headstarter,
    sipandplay,
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
      source_code_link: "https://github.com/techinezz/Portfolio",
    },
    {
      name: "Sip & Play",
      description:
        "Collaborated in a team to develop an innovative web application for Sip & Play, a company that merges the fun of gaming with the relaxation of sipping beverages.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: sipandplay,
      source_code_link: "https://github.com/birongliu/codedex-hackathon",
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
      title: "Software Engineer Fellow",
      company_name: "Headstarter AI",
      icon: headstarter,
      iconBg: "#383E56",
      date: "July 2024",
      points: [
        "Selected for a fellowship to develop AI projects with a team.",
        "Scheduled to participate in multiple hackathons to enhance practical skills and showcase innovations.",
        "Anticipating resume and LinkedIn profile reviews by ex-FAANG engineers to increase professional visibility and engagement.",
        "Preparing for mock technical interviews with AI to significantly improve interview performance.",
      ],
    },
    {
      title: "Internship Connection Program",
      company_name: "CodePath",
      icon: codepath,
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Engaged in professional development workshops, resulting in a 50% increase in internship applications and interview opportunities.",
        "Networked with industry professionals and mentors, establishing valuable connections for career advancement.",
        "Received personalized feedback on resumes and cover letters, leading to a 40% improvement in application quality.",
        "Participated in mock interviews and real-world case studies, improving practical skills and boosting confidence in professional settings.",
      ],
    },
    {
      title: "Techincal Interview Prep",
      company_name: "CodePath",
      icon: codepath,
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Completed intensive technical interview preparation, focusing on data structures and algorithms, leading to a 30% improvement in problem-solving speed.",
        "Participated in weekly coding challenges and mock interviews, achieving a 20% higher success rate in technical interviews.",
        "Collaborated with peers in study groups, enhancing understanding and application of advanced coding concepts.",
        "Utilized CodePath’s curriculum and resources, resulting in a 15% increase in coding proficiency and technical knowledge.",
      ],
    },
  ];
  
  export {technologies, experiences, projects };