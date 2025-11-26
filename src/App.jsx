import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Section/HeroSection'
import SkillsSection from './components/Section/SkillsSection'
import ProjectsSection from './components/Section/ProjectsSection'
import AboutSection from './components/Section/AboutSection'
import ContactSection from './components/Section/ContactSection'
import Footer from './components/Section/Footer'

const App = () => {
	return (
		<ThemeProvider>
			<div>
				<Navbar />
				<HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
			</div>
		</ThemeProvider>
	)
}

export default App
