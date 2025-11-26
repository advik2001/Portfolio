import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Send } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/data'
import { containerVariants, itemVariants } from '../../utils/helper'
import TextInput from '../Input/TextInput'
import SuccessModal from '../SuccessModal'
const accessKey = import.meta.env.VITE_ACCESS_KEY;

const ContactSection = () => {
	const { isDarkMode } = useTheme()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [showSuccess, setShowSuccess] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const sectionRef = useRef(null)
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [50, -50])

	const handleInputChange = (key, value) => {
		setFormData({
			...formData,
			[key]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		const formdata = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
			access_key: accessKey,
		}

		const json = JSON.stringify(formdata)

		// Simulate API call
    const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		}).then((res) => res.json())

		setIsSubmitting(false)
		setShowSuccess(true)
		setFormData({ name: '', email: '', message: '' })

		// Auto hide success modal after 3 seconds
		setTimeout(() => setShowSuccess(false), 3000)
	}

	return (
		<section
			ref={sectionRef}
			id='contact'
			className={`py-24 px-6 ${
				isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
			} relative overflow-hidden`}
		>
			{/* Background Elements */}
			<motion.div style={{ y }} className='absolute inset-0 overflow-hidden'>
				<div
					className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
						isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
					}`}
				/>

				<div
					className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
						isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
					}`}
				/>
			</motion.div>

			<div className='max-w-6xl mx-auto relative z-10'>
				{/* Section Header */}
				<motion.div
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					variants={containerVariants}
					className='text-center mb-20'
				>
					<motion.div
						variants={itemVariants}
						className={`text-sm uppercase tracking-widest ${
							isDarkMode ? 'text-gray-500' : 'text-gray-600'
						} mb-4`}
					>
						Let's Connect
					</motion.div>

					<motion.h2
						variants={itemVariants}
						className='text-3xl md:text-5xl font-light mb-6'
					>
						Get in
						<span className='text-blue-500 font-medium'>Touch</span>
					</motion.h2>

					<motion.p
						variants={itemVariants}
						className={`text-lg ${
							isDarkMode ? 'text-gray-400' : 'text-gray-600'
						} max-w-2xl mx-auto font-light`}
					>
						Ready to start your next project? Lets discuss how we can bring your
						ideas to life.
					</motion.p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-16 items-start'>
					{/* Contact Form */}
					<motion.div
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={containerVariants}
					>
						<motion.div
							variants={itemVariants}
							className={`p-8 rounded-2xl border ${
								isDarkMode
									? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm'
									: 'bg-gray-50/80 border-gray-200 backdrop-blur-sm'
							}`}
						>
							<h3 className='text-2xl font-medium mb-8'>Send me a message</h3>

							<div className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-6'>
									<TextInput
										isDarkMode={isDarkMode}
										name='name'
										value={formData.name}
										handleInputChange={(text) =>
											handleInputChange('name', text)
										}
										label='Your name'
									/>

									<TextInput
										isDarkMode={isDarkMode}
										name='email'
										value={formData.email}
										handleInputChange={(text) =>
											handleInputChange('email', text)
										}
										label='Email Address'
									/>
								</div>

								<TextInput
									isDarkMode={isDarkMode}
									name='message'
									value={formData.message}
									handleInputChange={(text) =>
										handleInputChange('message', text)
									}
									label='Your Message'
								/>

								<motion.button
									disabled={isSubmitting}
									whileHover={{ y: -2, scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className='w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2'
									onClick={handleSubmit}
								>
									{isSubmitting ? (
										<>
											<motion.div
												animate={{ rotate: 360 }}
												transition={{
													duration: 1,
													repeat: Infinity,
													ease: 'linear',
												}}
												className='w-4 h-4 border-2 border-white border-t-transparent rounded-full'
											/>
											<span>Sending...</span>
										</>
									) : (
										<>
											<Send size={18} />
											<span>Send Message</span>
										</>
									)}
								</motion.button>
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Info & Social Links */}
					<motion.div
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={containerVariants}
						className='space-y-8'
					>
						{/* Contact Information */}
						<motion.div variants={itemVariants}>
							<h3 className='text-2xl font-medium mb-6'>Contact Information</h3>
							<div className='space-y-4'>
								{CONTACT_INFO.map((info, index) => (
									<motion.div
										key={info.label}
										variants={itemVariants}
										whileHover={{ x: 4 }}
										className={`flex items-center space-x-4 p-4 rounded-xl ${
											isDarkMode
												? 'bg-gray-800/30 hover:bg-gray-800/50'
												: 'bg-gray-50/50 hover:bg-gray-100/50'
										} transition-all duration-500`}
									>
										<div
											className={`p-3 rounded-lg ${
												isDarkMode ? 'bg-gray-700' : 'bg-white'
											}`}
										>
											<info.icon size={20} className='text-blue-500' />
										</div>
										<div>
											<div
												className={`text-sm ${
													isDarkMode ? 'text-gray-500' : 'text-gray-600'
												}`}
											>
												{info.label}
											</div>
											<div className='font-medium'>{info.value}</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div variants={itemVariants}>
							<h3 className='text-xl font-medium mb-6'>Follow Me</h3>
							<div className='grid grid-cols-2 gap-4'>
								{SOCIAL_LINKS.map((social) => (
									<motion.a
										key={social.name}
										href={social.url}
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
											isDarkMode
												? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
												: 'bg-white/80 border-gray-200 hover:border-gray-300'
										} ${social.bgColor} ${social.color}`}
									>
										<social.icon size={20} />
										<span className='font-medium'>{social.name}</span>
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<SuccessModal
				showSuccess={showSuccess}
				setShowSuccess={setShowSuccess}
				isDarkMode={isDarkMode}
			/>
		</section>
	)
}

export default ContactSection
