import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const skills = ['AWS', 'Terraform', 'CI/CD', 'Kubernetes', 'Linux', 'Cloud Support'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 dark:from-black dark:via-gray-900/50 dark:to-blue-900/30 transition-all duration-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <motion.span 
                className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                DevOps Engineer & Cloud Architect
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Awnish Sharma
              </motion.span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-light"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Automating Cloud Infrastructure &
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Scaling DevOps Solutions
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-full border border-white/40 dark:border-gray-700/50 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/15zsMZnemcA371KjZakouaSeCbH8GHpUY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-gray-700/50 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  borderColor: 'rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/Awnishprasad99", color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Linkedin, href: "https://linkedin.com/in/awnish-sharma-b9b089212", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:awnishprasad99@gmail.com", color: "hover:text-purple-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-gray-700/50 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Animated background elements */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile image container */}
              <motion.div 
                className="relative w-72 h-72 lg:w-80 lg:h-80"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/40 dark:border-gray-700/40 backdrop-blur-sm bg-white/10 dark:bg-black/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner border for professional look */}
                  <div className="absolute inset-2 rounded-full border-2 border-white/30 dark:border-gray-600/30"></div>
                  
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGKKf5JhFjXqQ/profile-displayphoto-shrink_200_200/B4DZVH9MZoHAAY-/0/1740668980405?e=2147483647&v=beta&t=YGOy8xJJfYBpx4iHitbdFOA0PLTUTzgOPDUH18oUnvs"
                    alt="Awnish Sharma - DevOps Engineer & Cloud Architect"
                    className="w-full h-full object-cover object-center scale-110"
                    loading="eager"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
                
                {/* Professional accent rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-blue-500/20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                <motion.div
                  className="absolute -inset-6 rounded-full border border-purple-500/15"
                  animate={{ 
                    rotate: -360,
                    scale: [1.02, 1, 1.02]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                />
                
                {/* Status indicator */}
                <motion.div 
                  className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-800 shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            className="p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-gray-700/50"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};