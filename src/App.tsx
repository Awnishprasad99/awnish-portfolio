import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { BookCallSection } from './components/BookCallSection';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingQuotes } from './components/FloatingQuotes';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-500 ease-in-out">
        <ParticleBackground />
        <ThemeToggle />
        <FloatingQuotes />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
            },
          }}
        />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <CertificationsSection />
          <ExperienceSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <BookCallSection />
        </main>
        
        <ScrollToTop />
        
        <footer className="relative z-10 py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-500">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Built with 💙 by Awnish Sharma • © 2025 All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;