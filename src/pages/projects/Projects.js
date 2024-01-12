import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import covidTrackerImage from "../../assets/project-images/covid-tracker.png";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import encodeImage from "../../assets/project-images/encode.png";
import carBooking from "../../assets/project-images/CarBooking.png"
import Flipkart from "../../assets/project-images/Flipkart.png"
import Messenger from "../../assets/project-images/Messenger.png"
import Weather from "../../assets/project-images/Weather.png"
import Recipe from "../../assets/project-images/Recipe.png"

// const projectsData = [
//   {
//     id: 1,
//     name: "Covid Tracker",
//     image: covidTrackerImage,
//     description:
//       "A user-friendly web application that fetches real-time country-wise COVID data from API",
//     tags: ["javascript", "react", "chart.js", "axios"],
//     source_code: "#",
//     demo: "#",
//   },
//   {
//     id: 2,
//     name: "FlipkartClone",
//     image: covidTrackerImage,
//     description:
//       "Developed a fully functional e-commerce application using MongoDB, Express.js, Node.js, and React (MERN stack). Created a responsive front-end design that is aesthetically similar to Flipkart’s using Material-UI.",
//     tags: ["MongoDB", "Express.js", "Node.js", "React", "Material-UI"],
//     demo: "#", // Add the URL for the demo if available
//     source_code: "#", // Add the URL for the source code if available
//   },
// ];
const projectsData = [
  {
    id: 1,
    name: "BookCarService",
    image: carBooking,
    description:
      "Developed a fully functional Vehicle Booking System using MongoDB, Express.js, Node.js, and React (MERN stack). The user interface is intuitive, with clear navigation and user-friendly forms for booking vehicles. JWT (JSON Web Tokens) authentication is implemented to ensure secure access to the system.",
    tags: ["MongoDB", "Express.js", "Node.js", "React", "JWT"],
    demo: "https://sire-frontend.vercel.app", // Add the URL for the demo if available
    source_code: "https://github.com/deepak04112002/SIRE", // Add the URL for the source code if available
  },
  {
    id: 2,
    name: "FlipkartClone",
    image: Flipkart,
    description:
      "Developed a fully functional e-commerce application using MongoDB, Express.js, Node.js, and React (MERN stack). Created a responsive front-end design that is aesthetically similar to Flipkart’s using Material-UI.",
    tags: ["MongoDB", "Express.js", "Node.js", "React", "Material-UI"],
    demo: "https://flipkart-tawny-seven.vercel.app", // Add the URL for the demo if available
    source_code: "https://github.com/deepak04112002/Flipkart", // Add the URL for the source code if available
  },
    {
      
        id: 3,
        name: "Messenger Application",
        image:Messenger,
        description:"Developed the Messenger Application, the project redefine the messaging experience. This feature-packed application is a testament to my commitment to creating a robust and user-friendly communication platform.",
        tags: [
          "Firebase",
          "Google Authentication",
          "Facebook Authentication",
          "Real-time database",
          "React",
          "JavaScript"
        ],
        demo:"https://messenger-two-mocha.vercel.app/chats",
        source_code:"https://github.com/deepak04112002/messenger"
  },
  {
    id: 4,
    name: "WeatherApp",
    image: Weather,
    description:
      "Developed a weather app that offers real-time updates using React and Material UI. Integrated with OpenWeatherMap API, you can instantly access global forecasts, ensuring you’re prepared anywhere, anytime.",
    tags: ["React", "Material UI", "OpenWeatherMap API"],
    demo: "#", // Add the URL for the demo if available
    source_code: "#", // Add the URL for the source code if available
  },
  {
    id: 5,
    name: "RecipeApp",
    image: Recipe,
    description:
      "Developed an app that offers the recipe of different food items using React and Material UI. Integrated with Forkify API, this app is a gateway to discovering and creating a wide range of delicious dishes.",
    tags: ["React", "Material UI", "Forkify API"],
    demo: "https://recipe-app-eta-khaki.vercel.app/", // Add the URL for the demo if available
    source_code: "https://github.com/deepak04112002/Recipe-App", // Add the URL for the source code if available
  },
];


const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
