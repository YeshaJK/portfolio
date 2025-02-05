import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import light_bulb from './light-bulb.png';
import palette from './palette.png';
import code from './code.png';
import relax from './relax.png';
import aut from './aut.png';
import vnsgu from './vnsgu.png';
import yesha_profile from './yesha_profile.jpeg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    light_bulb,
    palette,
    code,
    relax,
    aut,
    vnsgu,
    yesha_profile
};

export const educationList = [
    {
      logo: assets.aut, // Correctly referencing the imported asset
      degree: 'Postgraduate Diploma in Computer Science and Information',
      duration: 'Feb 2024 ~ Nov 2024',
      university: 'Auckland University of Technology',
      description: 'Machine Learning and Data Mining, Big Data and Data Warehousing, Blockchain and Cryptocurrency',
      highlights: ['Auckland, New Zealand'],
    },
    {
      logo: assets.vnsgu, // Correctly referencing the imported asset
      degree: 'Bachelors of Science in Computer Science',
      duration: 'Mar 2021 ~ Apr 2023',
      university: 'Veer Narmad South Gujarat University',
      description: 'Android, Cloud Computing, Cyber Security, IoT, Software Architecture',
      highlights: ['Surat, India','First Class with Distinction', 'Specialization in Programming'],
    },
  ];

  export const companyData = [
    {
      title: 'Portfolio Website',
      description: 'A sleek and modern portfolio site built with Next.js.',
      bgImage: '/images/portfolio.jpg',
      githubLink: 'https://github.com/username/portfolio',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform using React and Firebase.',
      bgImage: '/images/ecommerce.jpg',
      githubLink: 'https://github.com/username/ecommerce',
    },
    {
      title: 'Social Media App',
      description: 'A fully functional social media app built with Node.js.',
      bgImage: '/images/social-media.jpg',
      githubLink: 'https://github.com/username/social-media',
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by OpenAI and GPT models.',
      bgImage: '/images/chatbot.jpg',
      githubLink: 'https://github.com/username/ai-chatbot',
    },
  ];

  
export const workData = [
    {
        title: 'To-do react app',
        description: 'Web Design',
        bgImage: '/work-3.png',
        githubLink: 'https://github.com/YeshaJK/todo-react-app', // Replace with actual link
    },
    {
        title: 'learn up app',
        description: 'learn up App',
        bgImage: '/work-1.png',
        githubLink: 'https://github.com/YeshaJK/learnup', // Replace with actual link
    },
    {
        title: 'Air Quality Models',
        description: 'Air Quality Models',
        bgImage: '/work-2.png',
        githubLink: 'https://github.com/YeshaJK/DML', // Replace with actual link
    }
]

export const serviceData = [
    {
        icon: assets.light_bulb,
        title: 'Building stuff from scratch',
        link: '',
    },
    {
        icon: assets.code,
        title: "Clean code that's enjoyable to work with",
        link: '',
    },
    {
        icon: assets.palette,
        title: 'Designing and implementing beautiful UI',
        link: '',
    },
    {
        icon: assets.relax,
        title: 'Working outside the comfort zone',
        link: '',
    },
];


export const infoList = [
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
