import cuynotes_1 from '../assets/cuynotes/cuynotes_1.png'
import cuynotes_2 from '../assets/cuynotes/cuynotes_2.png'
import pilates_1 from '../assets/pilates/pilates_1.png'
import pilates_2 from '../assets/pilates/pilates_2.png'
import pilates_3 from '../assets/pilates/pilates_3.png'
import pilates_4 from '../assets/pilates/pilates_4.png'
import recipy_1 from '../assets/recipy/recipy_1.png'
import recipy_2 from '../assets/recipy/recipy_2.png'
import chatbot_1 from '../assets/chatbot/chatbot_1.png'
import chatbot_2 from '../assets/chatbot/chatbot_2.png'
import treasureindo_1 from '../assets/treasureindo/treasureindo_1.png'
import treasureindo_2 from '../assets/treasureindo/treasureindo_2.png'
import treasureindo_3 from '../assets/treasureindo/treasureindo_3.png'
import treasureindo_4 from '../assets/treasureindo/treasureindo_4.png'
import cypro_1 from '../assets/cypro/cypro_1.png'
import cypro_2 from '../assets/cypro/cypro_2.png'
import cypro_3 from '../assets/cypro/cypro_3.png'
import cypro_4 from '../assets/cypro/cypro_4.png'
import sikembang_1 from '../assets/sikembang/sikembang_1.png'
import ecommerce_1 from '../assets/ecommerce/ecommerce_1.png'
import ecommerce_2 from '../assets/ecommerce/ecommerce_2.png'
import ecommerce_3 from '../assets/ecommerce/ecommerce_3.png'
import ecommerce_4 from '../assets/ecommerce/ecommerce_4.png'
import ecommerce_5 from '../assets/ecommerce/ecommerce_5.png'
import heroImage from '../assets/hero.png'

export const projects = [
  {
    num: '.01',
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
    num: '.02',
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
    num: '.03',
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
    num: '.04',
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
    num: '.05',
    label: 'CHATBOT',
    accent: 'Frontend',
    category: 'Frontend',
    images: [chatbot_1, chatbot_2],
    codeUrl: 'https://github.com/mrizqihidayat/Chatbot-API.git',
    pageUrl: 'https://chatbot-api-flame.vercel.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'A web-based chatbot interface that directly integrates with the Gemini API to provide real-time AI responses. Deployed on Vercel for fast and accessible performance."',
  },
  {
    num: '.06',
    label: 'TREASUREINDO',
    accent: 'Fullstack',
    category: 'Fullstack',
    images: [treasureindo_1, treasureindo_2, treasureindo_3, treasureindo_4],
    codeUrl: 'https://treasureindo.com/ ',
    pageUrl: 'https://treasureindo.com/ ',
    tech: ['Wordpress'],
    desc: 'TreasureIndo is a responsive WordPress business website developed for an export company. It provides a professional online presence with a clear layout and efficient content management."',
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
    year: 'Feb - Apr 2026',
    role: 'Web Developer',
    company: 'CV. Ankara Cipta',
    desc: "Led a team of 4 to develop a comprehensive dental dashboard. Researched and designed the user interface to align with the clinic's specific target market in South Jakarta, and managed the technical implementation using the Laravel framework.",
    badge: 'internship',
  },
]

export const navItems = ['Home', 'Experience', 'Projects', 'Contact']

export const stats = [
  { value: '5', label: 'Projects\nCompleted' },
  { value: '1', label: 'Years\nExperience' },
  { value: '2', label: 'Satisfied\nClients' },
]
