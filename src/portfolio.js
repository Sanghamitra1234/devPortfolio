/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanghamitra Hota",
  title: "Hi, I'm Sanghamitra",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications. From working in perl to java, javascript, react and some other framework. I love jumping into all techs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XgQQRo4VF_tfWTv3mEmM4CbNESxhFGgK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sanghamitra1234",
  linkedin: "https://www.linkedin.com/in/sanghamitra1/",
  gmail: "sanghamitra.hota1997@gmail.com",
  medium: "https://medium.com/@sanghamitrahota",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive software applications which will be highly scalable and efficient"
    ),
    emoji("⚡ Proficient in an assortment of technologies, including Java, mysql, javascript, microservice, aws with over 4+ years of professional experience"
    ),
    emoji(
      "⚡ Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  softwareSkillsDisplay: false, // Set false to hide this softwareSkills section, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College of Engineering and Technology, Bhubaneswar",
      logo: require("./assets/images/outr.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2015 - April 2019"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Microservices", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Servicenow",
      companylogo: require("./assets/images/servicenowlogo.png"),
      date: "March 2024 – Present",
      desc: "Source To Pay",
      descBullets: [
        "Working to automate and simplify the source-to-pay process, to enable seamless purchasing and case management process across work teams, allowing procurement to focus more on strategic priorities.",
      ]
    },
    {
      role: "Senior Member of Techinical staff",
      company: "AthenaHealth",
      companylogo: require("./assets/images/athena.png"),
      date: "March 2021 – March 2024",
      desc: "Worked on making healthcare system better",
      descBullets: [
        "Migrated existing monolithapplication to microservice (Springboot, react.js) , handling approx 500 qps.",
        "Developed and executed multiple robust data integration pipeline using IICS, SQS, Snowflake, and SNS, enabling seamless reporting in a data-driven environment for clients.",
        "Designed and implemented REST APIs, integrating third-party risk gap data, enabling payers to accurately assess patient risk scores, resulting in a 25% reduction in claim denials",
      ]
    },
    {
      role: "System Engineer Specialist",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.png"),
      date: "June 2019 – Feb 2021",
      desc: "Worked on datagoverance project for a norwegian client",
      descBullets: [
        "Developed Mule Flows using Java to seamlessly integrate business taxonomy with Collibra, improving data governance.",
        "Upgraded and customized Collibra workflows, enhancing user experience and resolving bugs (Groovy, Activiti Plugin).",
        "Integrated Collibra AWS with diverse platforms using Python scripts, deploying pipelines via Jenkins (AWS, Python)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GHCI (India), 2018 Student Scholar ",
      subtitle: "Ghci Student Scholar is issued by Anita Borg Institute, Its India's largest gathering of women technologists. A fully funded scholarship has been awarded to attend the Grace Hopper Conference in November 2018 held in Bengaluru, India.",
      image: require("./assets/images/anita.png"),
      imageAlt: "Anita org Logo",
      footerLink: []
    },
    {
      title: "Indian Academy of Science Scholar",
      subtitle:
        "IAS choose some students out of many and provide them with research internship opportunities at prestigious colleges like IISc, IITs, IIITs etc. This internship lasts for 2 months and they cover your travel and provide a stipend as well as certificates and help to publish your paper in their science journal which is looked up by many scientists.",
      image: require("./assets/images/iisc.png"),
      imageAlt: "IISc logo",
      footerLink: [
        {
          name: "Publication of research paper",
          url: "https://edu.authorcafe.com/academies/7542/rotational-invariance-in-image-recognition"
        }
      ]
    },

    {
      title: "HackwithInfy",
      subtitle: "Was among top 500 in hackwithinfy - a hackathon conducted by infosys to provide job oppurtunities",
      image: require("./assets/images/infosys.png"),
      imageAlt: "Infy Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I started writing what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sanghamitra.hota1997@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
