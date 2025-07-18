import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const skillCategories = [
    {
      title: "☁️ Cloud Platforms",
      skills: [
        { name: "AWS", level: 95, color: "from-orange-500 to-yellow-500" },
        { name: "Azure", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "Google Cloud", level: 80, color: "from-green-500 to-teal-500" },
        { name: "DigitalOcean", level: 90, color: "from-blue-600 to-purple-600" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "📦 Containers & Orchestration",
      skills: [
        { name: "Docker", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Kubernetes", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "Docker Compose", level: 88, color: "from-green-500 to-teal-500" },
        { name: "Helm", level: 85, color: "from-indigo-500 to-purple-500" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "🔧 Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 92, color: "from-purple-600 to-indigo-600" },
        { name: "Ansible", level: 88, color: "from-red-500 to-pink-500" },
        { name: "CloudFormation", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Pulumi", level: 75, color: "from-blue-500 to-purple-500" }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "⚙️ CI/CD & Automation",
      skills: [
        { name: "Jenkins", level: 90, color: "from-blue-600 to-cyan-600" },
        { name: "GitHub Actions", level: 95, color: "from-gray-700 to-gray-900" },
        { name: "GitLab CI", level: 85, color: "from-orange-500 to-red-500" },
        { name: "CircleCI", level: 80, color: "from-green-500 to-teal-500" }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "🧑‍💻 Programming & Scripting",
      skills: [
        { name: "Bash/Shell", level: 95, color: "from-gray-600 to-gray-800" },
        { name: "Python", level: 88, color: "from-blue-500 to-green-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "C++", level: 80, color: "from-blue-600 to-purple-600" }
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "🔍 Monitoring & Observability",
      skills: [
        { name: "Prometheus", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Grafana", level: 88, color: "from-orange-600 to-yellow-600" },
        { name: "ELK Stack", level: 85, color: "from-yellow-500 to-green-500" },
        { name: "CloudWatch", level: 92, color: "from-blue-500 to-purple-500" }
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
    setHoveredSkill(index);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredSkill(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                Technical Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Proficiency
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for modern DevOps and cloud engineering with measurable expertise levels
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group relative perspective-1000"
                onMouseMove={(e) => handleMouseMove(e, categoryIndex)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 rounded-3xl blur-2xl`}
                  animate={{ 
                    scale: hoveredSkill === categoryIndex ? [1, 1.1, 1] : 1,
                    opacity: hoveredSkill === categoryIndex ? [0.1, 0.2, 0.1] : 0.1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div 
                  className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
                  style={{
                    rotateX: useTransform(springY, [-100, 100], [5, -5]),
                    rotateY: useTransform(springX, [-100, 100], [-5, 5]),
                  }}
                >
                  <motion.div
                    className="flex items-center mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-4 shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-2xl">
                        {category.title.split(' ')[0]}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title.split(' ').slice(1).join(' ')}
                    </h3>
                  </motion.div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group/skill"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <motion.span 
                            className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                            animate={{ 
                              scale: hoveredSkill === categoryIndex ? [1, 1.1, 1] : 1
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                          
                          {/* Animated glow effect */}
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                            initial={{ width: 0 }}
                            animate={inView ? { 
                              width: `${skill.level}%`,
                              opacity: [0.5, 0.8, 0.5]
                            } : { width: 0 }}
                            transition={{ 
                              width: { duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 },
                              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                          />
                          
                          {/* Percentage indicator */}
                          <motion.div
                            className="absolute top-0 h-full flex items-center"
                            initial={{ left: 0 }}
                            animate={inView ? { left: `${Math.max(0, skill.level - 8)}%` } : { left: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            <motion.div
                              className={`w-4 h-4 bg-gradient-to-r ${skill.color} rounded-full shadow-lg border-2 border-white dark:border-gray-800`}
                              animate={{ 
                                scale: hoveredSkill === categoryIndex ? [1, 1.3, 1] : 1,
                                boxShadow: hoveredSkill === categoryIndex 
                                  ? ["0 0 0 rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"]
                                  : "0 0 0 rgba(59, 130, 246, 0)"
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Overall Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "95%", label: "Cloud Expertise", icon: "☁️" },
              { number: "90%", label: "DevOps Mastery", icon: "⚙️" },
              { number: "88%", label: "Security Knowledge", icon: "🔒" },
              { number: "92%", label: "Automation Skills", icon: "🤖" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                style={{ transitionDelay: `${2 + index * 0.1}s` }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
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