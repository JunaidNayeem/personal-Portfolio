import emoji from "react-easy-emoji";

// import googlelogo from "./assets/img/icons/common/google.svg";
// import github from "./assets/img/icons/common/github.svg";
import osl from "./assets/img/icons/common/osl-logo.svg";
import internityLogo from "./assets/img/icons/common/Ilogo.svg";

export const greetings = {
  name: "JUNAID",
  title: "Hi all, I'm Junaid ",
  description:
    "A passionate Full Stack Web Developer and Python AI/ML Backend Developer having an experience of building Web applications with Drupal / HTML / Css / Nodejs / Python and some other cool libraries and frameworks and also having Experience of building AI based applications using various libraries such as OpenCV & QtDesigner.",
  resumeLink:
    "https://drive.google.com/file/d/13-rajnrBanWcHzWkNx_oxVp8eG_Se1dg/view?usp=sharing",
};

export const openSource = {
  githubUserName: "JunaidNayeem",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/junaid_khans",
  instagram: "https://www.instagram.com/junaid_khans",
  twitter: "https://twitter.com/Junaid_khans7",
  github: "https://github.com/JunaidNayeem",
  linkedin: "https://www.linkedin.com/in/junaid-nayeem-51041a16a/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Progressive and Responsive Web Applications full Production ready"
    ),
    emoji("⚡ Integration of AI-ML software with high Quality of Usage"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
  {
    Stack: "DataStructure & Algorithm",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Sri Krishna Institute OF Technology",
    subHeader: "Bachelor in Computer Science and Engineering",
    duration: "August 2018 - April 2022",
    desc: "Have done various projects and workshops ",
    descBullets: [
      "An Artificial Intillegence based Attendence system",
      " A Working startup of Grocery Delivery named KiranaOP.com",
    ],
  },
  {
    schoolName: "T.N.B college,Bhagalpur",
    subHeader: "Intermediate in Science",
    duration: "April 2016 - February 2018",
    desc: "Attended full time Cource of PU ",
    descBullets: [
      "Learned and completed the syllabus of 11 & 12th,BSEB",
      "Was the part of cultural council of my college and have performed in several functions",
    ],
  },
  {
    schoolName: "ST Jospeh's School,Bhagalpur",
    subHeader: "Matriculation",
    duration: "March 2003 - February 2016",
    desc: " Attended Schooling from LKG to 10th ICSE",
    descBullets: [
      "Succesfully complted 10th Boards from ICSE Boards ",
      "Have scored full marks in Computer application in ICSE Exam",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "OpenSense Labs",
    companylogo: osl,
    date: "June 2018 – Present",
    desc: "Website Development using Drupal 7/8/9 Technology",
    descBullets: [
      "Have Designed and developed various Website Front-end as well as some parts of backend",
      "Developed fully responsive Websites with various team members of OSL and have deployed the websites to full Production",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Internity Foundation",
    companylogo: internityLogo,
    date: "Jan 2015 – Sep 2015",
    desc: "Data-Structure and Algorithm",
    descBullets: [
      "Have solved 100+ Data structure and algorithm problems during this internship",
      "Got Opportunity to work with Awesome team of internity Foundation on a project",
    ],
  },
];

export const projects = [
  {
    name: "KiranaOP.com",
    desc: "An Exiting startup of online Groceries, with some exiting and entusistic member of team who were ready to help people in the time of COVID-19 by taking the load of people from getting infected and making the Grocery reach to their door step.Have completed many succesful deliveries and also got many ideas on how to work as startup and the main thing is starting a startup in a small town with online platform rather than Metropolitian Cities",
    link: "https://kiranaop.com",
  },
  {
    name: "AI-ML Attendence System",
    desc: "A Thrilling Software which was made at that point of time where we can call it need of time.This Software basically stores all the face data of the people of the organization and when ever a particular person comes infront of the machine camera.Its captures the face data and marks the attendence if that particular person with date and time.And as it was the covid time so,Biometric and paper attendence may be harmfull.So it was the need of the time",
    github: "https://github.com/JunaidNayeem",
  },
];
