import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    java,
    cpp,
    meta,
    starbucks,
    tesla,
    shopify,
    kickx,
    gendex,
    mangacon,
    gemstats,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
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

  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
        "Built a responsive web application using HTML and CSS and the PokemonAPI that allows users to view their League of Legends statistics.",
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
  
  export {technologies, experiences, projects };