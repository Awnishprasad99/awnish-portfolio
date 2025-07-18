import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Shield, Rocket, Zap, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing scalable cloud solutions on AWS, Azure, and GCP with focus on reliability and cost optimization",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "DevOps Automation",
      description: "Building robust CI/CD pipelines and infrastructure as code for seamless deployments",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Implementing comprehensive security measures and compliance frameworks",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Innovation Leadership",
      description: "Founder of Awihar Technology, driving technological innovation and team excellence",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-black dark:via-gray-900/50 dark:to-blue-900/20 transition-all duration-700">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                About Me
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Passionate About Excellence
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Coding Illustration Section */}
            <motion.div variants={itemVariants}>
              <div className="relative group">
                {/* Animated background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Coding illustration container */}
                <motion.div 
                  className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Coding Illustration */}
                  <div className="relative mx-auto w-80 h-80 mb-6">
                    <motion.div
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Professional border styling */}
                      <div className="absolute inset-0 rounded-2xl border-4 border-white/50 dark:border-gray-600/50"></div>
                      <div className="absolute inset-2 rounded-2xl border-2 border-white/30 dark:border-gray-700/30"></div>
                      
                      <img
                        src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Passionate coder working on innovative solutions"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating code elements */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs font-mono text-blue-600 dark:text-blue-400"
                            style={{
                              left: `${20 + (i % 3) * 25}%`,
                              top: `${15 + Math.floor(i / 3) * 30}%`
                            }}
                            animate={{
                              y: [-5, 5, -5],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut"
                            }}
                          >
                            {['<>', '{}', '[]', '()', '/>', '&&'][i]}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Subtle accent ring */}
                    <motion.div
                      className="absolute -inset-2 rounded-2xl border border-blue-500/20 opacity-0 group-hover:opacity-40"
                      animate={{ 
                        scale: [1, 1.01, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                    
                    {/* Tech stack indicators */}
                    <motion.div
                      className="absolute -inset-4 rounded-2xl border border-purple-500/15"
                      animate={{ 
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>

                  {/* Illustration caption */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      Passionate About Excellence
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ 
                        background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
                        backgroundSize: '300% 300%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Crafting innovative solutions with precision and creativity
                    </motion.p>
                    
                    {/* Tech focus areas */}
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>Cloud Architecture</span>
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span>DevOps Automation</span>
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      <span>Innovation</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    I'm <motion.span 
                      className="font-bold text-blue-600 dark:text-blue-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      Awnish Sharma
                    </motion.span>, 
                    a passionate Cloud Support Engineer and DevOps Enthusiast based in Augusta, Georgia. 
                    With extensive experience in cloud architecture, automation, and cybersecurity, 
                    I specialize in building robust, scalable infrastructure solutions that drive business success.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    As the founder of <motion.span 
                      className="font-bold text-purple-600 dark:text-purple-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      Awihar Technology
                    </motion.span>, 
                    I'm committed to driving innovation in the tech industry while maintaining an unwavering focus on security, reliability, and operational excellence.
                  </motion.p>
                  
                  <motion.blockquote 
                    className="border-l-4 border-gradient-to-b from-blue-600 to-purple-600 pl-6 italic text-gray-600 dark:text-gray-400 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-r-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    "Automation is not about replacing humans; it's about empowering them to focus on what truly matters - innovation and strategic thinking."
                  </motion.blockquote>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.4 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-10 rounded-2xl blur-lg group-hover:opacity-20 group-hover:blur-xl transition-all duration-500`}
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${highlight.color} text-white mr-4 shadow-lg`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <highlight.icon className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h3>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "Projects Completed", icon: Target },
              { number: "99.9%", label: "Uptime Achieved", icon: Zap },
              { number: "3+", label: "Years Experience", icon: Code },
              { number: "10+", label: "Certifications", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                style={{ transitionDelay: `${1.5 + index * 0.1}s` }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};