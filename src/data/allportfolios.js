import binaryCalculator from "../img/portfolio/Binary Calculator.png";
import lifehack from "../img/portfolio/Lifehack.png";
import technicalPortfolio from "../img/portfolio/Technical Portfolio.png";
import cocossd from "../img/portfolio/COCOSSD.png";
import temperatureDashboard from "../img/portfolio/Temperature Dashboard.png";
import anomalyDetection from "../img/portfolio/Anomaly Detection.png";
import databaseApplication from "../img/portfolio/Database Application.png";
import profilePage from "../img/portfolio/Profile Page.png";
import schrodinger from "../img/portfolio/Schrodinger.png";
import employeeAttrition from "../img/portfolio/Employee Attrition.png";
import serenity from "../img/portfolio/Serenity.png";
import pixelsFly from "../img/portfolio/Pixels Fly.png";
import foodrush from "../img/portfolio/Foodrush.png";

const portfolios = [
  {
    id: 12,
    category: "Flutter",
    image: binaryCalculator,
    title: "Flutter Mobile App",
    projectType: "Personal Project",
    description:
      "Binary calculator is a useful tool that performs mathematical operations and converts between four different number bases.",
    published: "Sep 2021",
    techStack: "Flutter",
    hasGithub: false,
    githubLink: "",
    hasWebsite: true,
    websiteLink:
      "https://drive.google.com/file/d/1K9fk6BJ9ObUTEYO1chv_8HcZl9ovrngD/view?usp=sharing",
  },
  {
    id: 11,
    category: "React",
    image: lifehack,
    title: "LifeHack 2021 Website",
    projectType: "NUS Computing Club",
    description:
      "This website serves as a landing page for LifeHack 2021 hackathon, which I helped to organize as part of the Academic Liaison cell of NUS Students' Computing Club.",
    published: "Jun 2021",
    techStack: "React JS, Adobe XD",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/lifehack-2021",
    hasWebsite: true,
    websiteLink: "https://lifehack.nuscomputing.com/",
  },
  {
    id: 10,
    category: "React",
    image: technicalPortfolio,
    title: "React JS Responsive Website",
    projectType: "Personal Project",
    description:
      "This website showcases my interests and projects. It is a fully responsive website built with Sassy CSS.",
    published: "Jun 2021",
    techStack: "React JS, Adobe XD",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/my-website",
    hasWebsite: true,
    websiteLink: "https://neoruien.github.io/my-website/",
  },
  {
    id: 9,
    category: "ML",
    image: cocossd,
    title: "Object Detector Website",
    projectType: "Personal Project",
    description:
      "The website utilizes the web camera to detect and label objects in real-time. It was deployed using TensorFlow's Coco SSD model.",
    published: "May 2021",
    techStack: "TensorFlow JS, React JS",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/cocossd-object-detector",
    hasWebsite: true,
    websiteLink: "https://neoruien.github.io/cocossd-object-detector/",
  },
  {
    id: 8,
    category: "ML",
    image: anomalyDetection,
    title: "Anomaly Detection Code",
    projectType: "NUS DMY1401TT Machine Learning in Practice",
    description:
      "The code explores 3 anomaly detection methods, namely Isolation Forest, Long Short-Term Memory (LSTM) and One-Class SVM (OCSVM).",
    published: "May 2021",
    techStack: "Python",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/anomaly-detection",
    hasWebsite: false,
    websiteLink: "",
  },
  {
    id: 7,
    category: "React",
    image: temperatureDashboard,
    title: "Meteor React JS Website",
    projectType: "NUS CS3249",
    description:
      "The website displays an interactive temperature dashboard and floorplan of NUS USP College Residences. The user can select rooms from the floorplan, indicate a time period and view the generated graph.",
    published: "Apr 2021",
    techStack: "React JS, Meteor JS, Adobe XD",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/cs3249_a4",
    hasWebsite: false,
    websiteLink: "",
  },
  {
    id: 6,
    category: "SQL",
    image: databaseApplication,
    title: "PostgreSQL Database",
    projectType: "NUS 2102",
    description:
      "The database application facilitates the operations of a training course company. It stores the schema and functions that manage the courses, instructors and customers of the company.",
    published: "Apr 2021",
    techStack: "PostgreSQL, pgAdmin 4",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/cs2102project",
    hasWebsite: false,
    websiteLink: "",
  },
  {
    id: 5,
    category: "React",
    image: profilePage,
    title: "Axios React JS Website",
    projectType: "Personal Project",
    description:
      "The page fetches JSONPlaceholder typicode user data using Axios and displays the data as a single page website.",
    published: "Feb 2021",
    techStack: "React JS, Axios",
    hasGithub: true,
    githubLink: "https://github.com/neoruien/profile-page",
    hasWebsite: true,
    websiteLink: "https://neoruien.github.io/profile-page/",
  },
  {
    id: 4,
    category: "React",
    image: schrodinger,
    title: "React Native Mobile App",
    projectType: "Hack&Roll 2021",
    description:
      "NOT Schrödinger's Box is an IoT solution for storage organisation problems. The mobile app provides an interface for the user to control the hardware box.",
    published: "Jan 2021",
    techStack: "React Native, Adobe XD",
    hasGithub: false,
    githubLink: "",
    hasWebsite: true,
    websiteLink: "https://devpost.com/software/not-schrodinger-s-box",
  },
  {
    id: 3,
    category: "Tableau",
    image: employeeAttrition,
    title: "Tableau Visualization",
    projectType: "Smartcademy Data Analytics",
    description:
      "Employee Attrition Analysis presents the possible factors for employee attrition. The dataset was obtained from Kaggle and it was examined via exploratory data analysis.",
    published: "Dec 2020",
    techStack: "Tableau, Python",
    hasGithub: false,
    githubLink: "",
    hasWebsite: true,
    websiteLink:
      "https://public.tableau.com/app/profile/neo.rui.en/viz/EmployeeAttrition-SankeyChartDraft/EmployeeAttrition",
  },
  {
    id: 2,
    category: "Java",
    image: serenity,
    title: "Java Desktop App",
    projectType: "NUS CS2103T",
    description:
      "Serenity helps to relieve the administrative burden of tutors by facilitating attendance taking, participation marking and question addressing procedures.",
    published: "Nov 2020",
    techStack: "Java, SceneBuilder, Adobe XD",
    hasGithub: true,
    githubLink: "https://github.com/AY2021S1-CS2103T-W12-4/tp",
    hasWebsite: true,
    websiteLink: "https://ay2021s1-cs2103t-w12-4.github.io/tp/",
  },
  {
    id: 1,
    category: "Unity",
    image: pixelsFly,
    title: "Unity3D Android Mobile Game",
    projectType: "NUS Orbital - Artemis (Highest level)",
    description:
      "Pixels Fly is a fun and immersive game where the user is able to fly through the streets of Singapore as a bird. The game was presented on NUS Computing Day 2020.",
    published: "Aug 2020",
    techStack: "Unity3D, Blender, Adobe XD",
    hasGithub: false,
    githubLink: "",
    hasWebsite: true,
    websiteLink: "https://sharp-bardeen-b329fe.netlify.app/",
  },
  {
    id: 0,
    category: "Flutter",
    image: foodrush,
    title: "Flutter Mobile App",
    projectType: "DSTA BrainHack Code_EXP",
    description:
      "Foodrush is a proof-of-concept application that aims to facilitate the purchase and selling of surplus ingredients between hawkers and grocery shoppers. This supports hawkers' livelihood and strengthens Singapore's food security by mitigating food wastage amidst the Covid-19 lockdown.",
    published: "Jun 2020",
    techStack: "Flutter",
    hasGithub: false,
    githubLink: "",
    hasWebsite: true,
    websiteLink:
      "https://drive.google.com/file/d/1ucWrqUQK8FFl1_5XdMp6ynSS9uFntoII/view?usp=sharing",
  },
];

export default portfolios;
