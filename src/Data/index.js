import ambis_1 from '../assets/ambisptn/ambis_1.webp'
import ambis_2 from '../assets/ambisptn/ambis_2.webp'
import ambis_3 from '../assets/ambisptn/ambis_3.webp'
import ambis_4 from '../assets/ambisptn/ambis_4.webp'
import ambis_5 from '../assets/ambisptn/ambis_5.webp'
import cuynotes_1 from '../assets/cuynotes/cuynotes_1.webp'
import cuynotes_2 from '../assets/cuynotes/cuynotes_2.webp'
import pilates_1 from '../assets/pilates/pilates_1.png'
import pilates_2 from '../assets/pilates/pilates_2.png'
import pilates_3 from '../assets/pilates/pilates_3.png'
import pilates_4 from '../assets/pilates/pilates_4.png'
import recipy_1 from '../assets/recipy/recipy_1.png'
import recipy_2 from '../assets/recipy/recipy_2.png'
import chatbot_1 from '../assets/chatbot/chatbot_1.webp'
import chatbot_2 from '../assets/chatbot/chatbot_2.webp'
import treasureindo_1 from '../assets/treasureindo/treasureindo_1.png'
import treasureindo_2 from '../assets/treasureindo/treasureindo_2.png'
import treasureindo_3 from '../assets/treasureindo/treasureindo_3.png'
import treasureindo_4 from '../assets/treasureindo/treasureindo_4.png'
import cypro_1 from '../assets/cypro/cypro_1.webp'
import cypro_2 from '../assets/cypro/cypro_2.webp'
import cypro_3 from '../assets/cypro/cypro_3.webp'
import cypro_4 from '../assets/cypro/cypro_4.webp'
import sikembang_1 from '../assets/sikembang/sikembang_1.png'
import ecommerce_1 from '../assets/ecommerce/ecommerce_1.webp'
import ecommerce_2 from '../assets/ecommerce/ecommerce_2.webp'
import ecommerce_3 from '../assets/ecommerce/ecommerce_3.webp'
import ecommerce_4 from '../assets/ecommerce/ecommerce_4.webp'
import ecommerce_5 from '../assets/ecommerce/ecommerce_5.webp'
import group_1 from '../assets/ambisgroup/group_1.webp'
import group_2 from '../assets/ambisgroup/group_2.webp'
import heroImage from '../assets/hero.png'

export const projects = [
    {
    num: '.01',
    label: 'AMBIS PTN',
    accent: 'Frontend',
    category: 'Frontend',
    images: [ambis_1, ambis_2, ambis_3, ambis_4, ambis_5],
    pageUrl: 'https://ambisptn.my.id/',
    tech: ['React.js', 'TAILWIND CSS', 'REST API'],
    desc: 'Ambis PTN is a comprehensive e-learning platform featuring interactive student catalogs, learning progress tracking, and role-based dashboards. Built with React.js and Tailwind CSS, it integrates securely with backend APIs for dynamic content delivery and an AI-powered automated quiz generation system.',
    note: 'Note: Developed during a Web Developer Internship at PT. Hadi Strategic Resource.',
  },
  {
    num: '.02',
    label: 'Ambis Group',
    accent: 'Fullstack',
    category: 'Fullstack',
    images: [group_1, group_2],
    pageUrl: 'https://ambisgroup.my.id/',
    tech: ['React.js', 'Tailwind CSS'],
    desc: "Ambis Group is a responsive single-page corporate website designed to showcase an integrated educational ecosystem in Malang. It features a clean and modern layout highlighting the company's four main business units, impact statistics, and partnership details.",
    note: 'Note: Developed as a company profile landing page during a Web Developer Internship at PT. Hadi Strategic Resource.',
  },
  {
    num: '.03',
    label: 'CUYNOTES',
    accent: 'Fullstack',
    category: 'Fullstack',
    images: [cuynotes_1, cuynotes_2],
    codeUrl: 'https://github.com/mrizqihidayat/cuynotes',
    pageUrl: 'https://client-cuynotes.vercel.app/',
    tech: ['Next.js', 'Python', 'SQL'],
    desc: 'CuyNotes is a full-stack note management application featuring a clean UI and seamless RESTful integration. Built with Next.js and Flask, it is deployed using Docker on a Linux VPS.',
    note: 'Note: This application is currently optimized for desktop use only.',
  },
  {
    num: '.04',
    label: 'ECOMMERCE APP',
    accent: 'Frontend',
    category: 'Frontend',
    images: [ecommerce_1, ecommerce_2, ecommerce_3, ecommerce_4, ecommerce_5],
    codeUrl: 'https://github.com/lumoshive-final-project-batch-III/Frontend-project-app-ecommerce-frontend-tim-Ubuntu#',
    pageUrl: 'https://frontend-project-app-ecommerce-fron.vercel.app/',
    tech: ['React.js'],
    desc: 'A collaborative e-commerce platform developed as the Final Project for the Lumoshive Academy Bootcamp. Built with React, Redux Toolkit, and Tailwind CSS to deliver a fast and modern shopping experience.',
    note: "The website's UI might appear broken as the backend API is no longer active."
  },
      {
    num: '.05',
    label: 'TREASUREINDO',
    accent: 'Fullstack',
    category: 'Fullstack',
    images: [treasureindo_1, treasureindo_2, treasureindo_3, treasureindo_4],
    pageUrl: 'https://treasureindo.com/ ',
    tech: ['Wordpress'],
    desc: 'TreasureIndo is a responsive WordPress business website developed for an export company. It provides a professional online presence with a clear layout and efficient content management."',
  },
  {
    num: '.06',
    label: 'BOOKING PILATES',
    accent: 'Fullstack',
    category: 'Fullstack',
    images: [pilates_1, pilates_2, pilates_3, pilates_4],
    codeUrl: 'https://github.com/mrizqihidayat/Pilates-Booking.git',
    pageUrl: 'https://pilates-booking-beta.vercel.app/',
    tech: ['Next.js'],
    desc: 'A full-stack Pilates booking platform built with React and Next.js. It features secure authentication via Clerk and seamless payment processing with Stripe.',
    note: 'To test the booking flow, schedules are only available from February 28th to March 4th, 2026',
  },
  {
    num: '.07',
    label: 'Recipy',
    accent: 'Frontend',
    category: 'Frontend',
    images: [recipy_1, recipy_2],
    codeUrl: 'https://github.com/mrizqihidayat/Recipy.git',
    pageUrl: 'https://recipy-tawny.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Recipy is a responsive React web app that fetches food recipes via the DummyJSON API. It focuses on seamless API integration and modern, accessible layouts using CSS Grid and Flexbox.',
  },
  {
    num: '.08',
    label: 'CHATBOT',
    accent: 'Frontend',
    category: 'Frontend',
    images: [chatbot_2],
    codeUrl: 'https://github.com/mrizqihidayat/Chatbot-API.git',
    pageUrl: 'https://chatbot-api-flame.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A web-based chatbot interface that directly integrates with the Gemini API to provide real-time AI responses. Deployed on Vercel for fast and accessible performance."',
  },
  {
    num: '.09',
    label: 'CYPRO',
    accent: 'ui/ux',
    category: 'UI/UX',
    images: [cypro_1, cypro_2, cypro_3, cypro_4],
    codeUrl: 'https://www.figma.com/design/oln1C7TWPa8ZOEh2Pz8iN4/CYPRO?node-id=278-3887&t=9z10XL7o3mBuPuSz-1',
    tech: ['Figma'],
    desc: 'CYPRO is a web platform connecting companies with verified cybersecurity professionals. Recognized for its intuitive UI/UX, it won 3rd Place at the ITCC UI/UX Design Competition.',
  },
    {
    num: '.10',
    label: 'SiKembang',
    accent: 'ui/ux',
    category: 'UI/UX',
    images: [sikembang_1],
    codeUrl: 'https://www.figma.com/design/UOCPDCjsBpKK9XoaYFThOZ/SiKembang?node-id=40-595&t=h9UG2X7CxM1ccwlX-1 ',
    tech: ['Figma'],
    desc: 'SiKembang is a child growth monitoring app featuring health tracking tools, educational content, and an AI chatbot. Developed via Design Thinking, it won 2nd Runner-Up at the Hology UI/UX Design Competition.',
  },
]

export const experiences = [
  {
    year: 'Mei - Jul 2026',
    role: 'Web Developer',
    company: 'PT. Hadi Strategic Resource',
    desc: [
      'Designed UI/UX architectures and developed responsive frontend interfaces for a corporate website and a comprehensive e-learning platform (Ambis PTN) using React.js and Tailwind CSS.',
      'Built interactive educational features including role-based Admin/User dashboards, student course catalogs, and learning progress tracking systems.',
      'Integrated frontend components with backend RESTful APIs to facilitate secure user authentication, dynamic content delivery, and an AI-powered automated quiz generation system.'
    ],
    badge: 'internship',
  },
  {
    year: 'Feb - Apr 2026',
    role: 'Web Developer',
    company: 'CV. Ankara Cipta',
    desc: ['Designed intuitive UI/UX mockups using Figma, researching and tailoring the user interface specifically to engage the target demographic in South Jakarta.', 'Developed responsive frontend interfaces for a comprehensive Clinic Management System using Laravel, building core features such as patient booking, dentist scheduling, and automated printable invoices.', 'Collaborated closely with backend developers to prepare structured UI components for seamless integration, assisting in defining technical requirements and core application features.'],
    badge: 'internship',
  },
]

export const navItems = ['Home', 'Experience', 'Projects', 'Contact']

export const stats = [
  { value: '5', label: 'Projects\nCompleted' },
  { value: '1', label: 'Years\nExperience' },
  { value: '2', label: 'Satisfied\nClients' },
]
