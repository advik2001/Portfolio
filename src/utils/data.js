import {
	Code2,
	GraduationCap,
	Briefcase,
	Award,
	Rocket,
	Heart,
	Coffee,
	BookOpen,
	Zap,
	// Databse,
	Server,
	Cloud,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react'

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";

import questly_ai from '../assets/images/questly_ai.png'
import sortingVisualizer from '../assets/images/sortingVisualizer.png'
import taskManager from '../assets/images/taskManager.png'

export const SKILLS_CATEGORY = [
	{
		title: 'Frontend',
		icon: Code2,
		description: 'Crafting beautiful, responsive user interfaces',
		skills: [
			{ name: 'React', level: 95, color: 'bg-blue-500' },
			{ name: 'JavaScript', level: 90, color: 'bg-gray-500' },
			// { name: 'TypeScript', level: 90, color: 'bg-blue-500' },
			// { name: 'Next.js', level: 88, color: 'bg-gray-500' },
			{ name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
			{ name: 'Framer Motion', level: 85, color: 'bg-pink-500' },
		],
	},
	{
		title: 'Backend',
		icon: Server,
		description: 'Building robust server-side solutions',
		skills: [
			{ name: 'Node.js', level: 95, color: 'bg-blue-500' },
			{ name: 'Express.js', level: 90, color: 'bg-gray-500' },
			{ name: 'REST APIs', level: 92, color: 'bg-orange-500' },
			{ name: 'Python', level: 82, color: 'bg-yellow-500' },
		],
	},
	{
		title: 'Database',
		// icon: Databse,
		icon: Server,
		description: 'Managing and optimizing data storage',
		skills: [
			{ name: 'MongoDb', level: 88, color: 'bg-green-500' },
			{ name: 'MySQL', level: 80, color: 'bg-blue-500' },
			{ name: 'Firebase', level: 80, color: 'bg-red-500' },
			// { name: 'Redis', level: 70, color: 'bg-blue-500' },
			// { name: 'Prisma', level: 75, color: 'bg-yellow-500' },
		],
	},
	{
		title: 'DevOps',
		icon: Cloud,
		description: 'Deploying and scaling applications',
		skills: [
			{ name: 'Git', level: 92, color: 'bg-orange-500' },
			{ name: 'Vercel', level: 88, color: 'bg-gray-500' },
			{ name: 'Docker', level: 65, color: 'bg-blue-500' },
			{ name: 'AWS', level: 60, color: 'bg-blue-500' },
			// { name: 'CI/CD', level: 85, color: 'bg-purple-500' },
		],
	},
]

export const TECH_STACK = [
	// 'JavaScript',
	'HTML5',
	'CSS3',
	'Sass',
	'C++',
	'Webpack',
	'Vite',
	'Figma',
	'Notion',
	// 'Cypress',
	// 'Jest',
	// 'Adobe XD',
	// 'Slack',
]

export const STATS = [
	{ number: '50+', label: 'Projects Completed' },
	{ number: '3+', label: 'Years Experience' },
	{ number: '20+', label: 'Technologies' },
	{ number: '100%', label: 'Client Satisfaction' },
]

export const PROJECTS = [
	{
		id: 1,
		title: 'Questly AI',
		description:
			'A full-stack AI powered interview preparation app leveraging Google Gemini API to generate role and experience based AI driven technical questions.',
		image: questly_ai,
		tags: ['React', 'Tailwind', 'Express', 'Node.js', 'MongoDB'],
		liveUrl: 'https://questly-ai-eta.vercel.app/',
		githubUrl: 'https://github.com/advik2001/Questly-AI',
		featured: false,
		category: 'Full Stack',
	},
	{
		id: 2,
		title: 'Sorting Visualizer',
		description:
			'A web app that visually demonstrates various sorting algorithms, making it easier to understand and learn how they work.',
		image: sortingVisualizer,
		tags: ['React', 'HTML', 'CSS', 'JavaScript'],
		liveUrl: 'https://sorting-visualiserr.netlify.app/',
		githubUrl: 'https://github.com/advik2001/sorting-visualiser',
		featured: false,
		category: 'Full Stack',
	},
	{
		id: 3,
		title: 'Task Manager',
		description:
			'A simple and efficient task management web application that allows users to Create, Read, Update, and Delete (CRUD) tasks.',
		image: taskManager,
		tags: ['React', 'HTML', 'CSS'],
		liveUrl: 'https://task-manage-crud.netlify.app/',
		githubUrl: 'https://github.com/advik2001/task-manager',
		featured: false,
		category: 'Full Stack',
	},
]

export const JOURNEY_STEPS = [
	// {
	// 	year: '2021',
	// 	title: 'Started Coding Journey',
	// 	company: 'Self-taught',
	// 	description:
	// 		'Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.',
	// 	icon: Code2,
	// 	color: 'bg-blue-500',
	// },
	{
		year: '2019 - 2023',
		title: 'Computer Science Degree',
		company: 'Manipal University Jaipur',
		description:
			'Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.',
		icon: GraduationCap,
		color: 'bg-blue-500',
	},
	{
		year: '2023',
		title: 'Software Developer Internship',
		company: 'PureSoftware',
		description:
			'Joined as a full stack intern, working with React and learning modern development practices. Contributed to real client projects.',
		icon: Rocket,
		color: 'bg-orange-500',
	},
	{
		year: '2024',
		title: 'Software Engineer Internship',
		company: 'Jasch Gauging Technologies',
		description:
			'Joined as a software intern. Explored new technologies to work with.',
		icon: Zap,
		color: 'bg-purple-500',
	},
	{
		year: '2024',
		title: 'Software Engineer',
		company: 'Jasch Gauging Technologies',
		description:
			'Converted as a full time employee, working with LabView, MongoDB and data acquisition system for industrial sensors.',
		icon: Briefcase,
		color: 'bg-green-500',
	},	
]

export const PASSIONS = [
	{
		icon: Heart,
		title: 'User Experience',
		description: 'Crafting intuitive interfaces that users love',
	},
	{
		icon: Coffee,
		title: 'Problem Solving',
		description: 'Turning complex challenges into elegant solutions',
	},
	{
		icon: BookOpen,
		title: 'Continuous Learning',
		description: 'Always exploring new technologies and best practices',
	},
]

export const SOCIAL_LINKS = [
	{
		name: 'linkedIn',
		icon: FiLinkedin,
		url: 'https://www.linkedin.com/in/contact-advik-gupta/',
		color: 'hover:text-blue-400',
		bgColor: 'hover:bg-blue-500/10',
	},
	{
		name: 'Github',
		icon: FiGithub,
		url: 'https://github.com/advik2001',
		color: 'hover:text-green-500',
		bgColor: 'hover:bg-green-500/10',
	},
	{
		name: 'Leetcode',
		icon: SiLeetcode,
		url: 'https://leetcode.com/u/guptaadvik187/',
		color: 'hover:text-yellow-400',
		bgColor: 'hover:bg-blue-500/10',
	},
]

export const CONTACT_INFO = [
	{
		icon: MapPin,
		label: 'Location',
		value: 'Delhi',
	},
	{
		icon: Mail,
		label: 'Email',
		value: 'guptaadvik187@gmail.com',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '9350484900',
	},
]
