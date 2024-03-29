import homeImage from "./assets/me.webp";
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  //   {
  //     linkText: "References",
  //     linkID: "references",
  //     boxIcon: "bx-link-external",
  //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Hafiz",
  homeTitle2: "Javaid",
  homeProfession: "Web Developer",
  homeInformation: [
    {
      text: " Street 62, G-11/2, Islamabad",
      icon: "bx-map",
    },
    {
      text: "hafizjaidi786@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +92 343 56877704",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "https://www.instagram.com/hafizjawaidiqbal/",
      text: "Hafiz Jawaid Iqbal",
      icon: "bxl-instagram",
    },
    {
      link: "https://www.facebook.com/hafiz.jawaidiqbal.1/",
      text: "Hafiz Jawaid Iqbal",
      icon: "bxl-facebook",
    },
    {
      link: "https://www.linkedin.com/in/hafizjavaid/",
      text: "Hafiz Javaid Iqbal",
      icon: "bxl-linkedin-square",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `I am a developer with an engineering mind and creativity is my passion. I am
        self-disciplined, highly motivated, having multi-tasking ability with polished
        technical skills.`,
    `I have experience in the freelance market as well as working with a small
        startup as a front end developer`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Software Engineering",
      studies: "UET Taxila, Pakistan",
      year: "2018 - Present",
      line: true,
    },
    {
      title: "FSc (Pre-Engineering)",
      studies: "Sir Sayed College, Rawalpindi",
      year: "2016 - 2018",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`, `Saas`],
    [`Vue`, `React`, `Javascript`],
  ],
};
const logoText = "Hafiz.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title: "Member of Hackathon Winner Team AirTech’19",
      describe:
        "We Presented the idea of a Forest fire prevention system using WSN.",
    },
  ],
};

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "RigRex / Front-end Developer",
      company: "2019 - PRESENT",
      describe:
        "Working as a Front-end developer at RigRex. Primary responsibilities are to develop the Front-end of Websites.",
      line: true,
    },
    {
      title: "STIC ( Software Engineer )",
      company: "Sep 2018 - 2019",
      describe: "I worked as a software eningeer at stic.",
      line: false,
    },
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Panjabi", "Urdu"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds
};
