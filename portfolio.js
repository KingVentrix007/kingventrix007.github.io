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
  username: "Tristan Kuhn",
  title: "Hi all, I'm Tristan",
  subTitle: emoji(
    "I'm a passionate software developer with a strong foundation in bare-metal C, Python, and full-stack web development. I enjoy building impactful projects that blend performance, usability, and a bit of creative flair. Whether it's writing low-level firmware, crafting modern UIs, or scripting automation tools—I’m always learning and always coding."
  ),
  resumeLink:
    "example.com", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KingVentrix007/",
  linkedin: "https://www.linkedin.com/in/tristan-kuhn-40386b2a1/",
  gmail: "tristanjkuhn007@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Systems-level programming including bare-metal C development"
    ),
    emoji(
      "⚡ Networking, infrastructure, automation, and scripting with Python and Bash"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cambridge International",
      logo: require("./assets/images/cambridgeLogo.png"), // Ensure this image exists or update the path
      subHeader: "IGCSE, AS, and A Level Curriculum",
      duration: "Completed 2025",
      desc: "Completed internationally recognized qualifications across multiple disciplines including Computer Science, Mathematics, Physics, and Languages under the Cambridge International curriculum.",
      descBullets: [
        "IGCSE: German(78%)",
        "AS Level: Computer Science(84%), English(58%)",
        "A Level: Computer Science(Pending)"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Systems Programming (OS, C)",
      progressPercentage: "80%"
    },
    {
      Stack: "Python Development (Backend, Tools)",
      progressPercentage: "85%"
    },
    {
      Stack: "Tooling & Package Management",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps / Server Management",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the best projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/athenxLogo.webp"),
      projectName: "AthenX 3.0",
      projectDesc:
        "A complete rewrite of AthenX with modular design and advanced OS features: VESA graphics, FAT (R/W), paging, multitasking, ELF loading, ACPI, PCI, AHCI, and more.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/KingVentrix007/AthenX-3.0/"
        }
      ]
    },
    {
      image: require("./assets/images/towtruckLogo.webp"),
      projectName: "Tow Truck Servers",
      projectDesc:
        "A robust and lightweight Minecraft server manager built for advanced modding, automation, and scripting support.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/KingVentrix007/Tow-Truck-Servers"
        }
      ]
    },
    {
      image: require("./assets/images/greaterNetLogo.webp"),
      projectName: "The Greater Internet Project",
      projectDesc:
        "A future-proof framework for secure, anonymous, quantum-resistant communication — includes EDOI, HTTPE, and the EDOI-NET Shadow Web.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/KingVentrix007/The-Greater-Internet-Project/"
        }
      ]
    },
    {
      image: require("./assets/images/kickstartLogo.webp"),
      projectName: "Kick Start",
      projectDesc:
        "Cross-language bootstrapper to scaffold projects with build tools, templates, auto-headers, and Git integration. Supports C/C++, Python, Java, Rust, and more.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/KingVentrix007/KickStart"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "South African Programming Olympiad",
      subtitle:
        "Two-time second round participant in the prestigious South African Programming Olympiad, showcasing advanced problem-solving and algorithmic thinking.",
      image: require("./assets/images/saOlympiadLogo.webp"), // Replace with actual image if available
      imageAlt: "SA Programming Olympiad Logo",
      footerLink: [
        // Add certificate links or news articles if available
        {
          name: "SAPO Website",
          url: "https://olympiad.org.za/programming-olympiad/"
        }
      ]
    }
    // You can add more achievements here as needed.
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
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
  display: false // Set false to hide this section, defaults to true
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

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27 65 690 6740",
  email_address: "tristanjkuhn007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
