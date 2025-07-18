import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences = [
    {
      company: "Sagenext Infotech LLC",
      position: "Cloud Support Engineer",
      duration: "2023 - Present",
      location: "Augusta, Georgia",
      description: "Leading cloud infrastructure management and DevOps automation initiatives",
      responsibilities: [
        "Managed server setup, configuration, and maintenance for enterprise clients",
        "Implemented automated backup solutions and disaster recovery procedures",
        "Configured and managed Remote Desktop Protocol (RDP) environments",
        "Optimized DNS configurations for improved performance and reliability",
        "Reduced deployment time by 50% through automation and process optimization",
        "Maintained 99.9% uptime for critical client infrastructure"
      ],
      technologies: ["AWS", "Windows Server", "DNS", "RDP", "PowerShell", "Backup Solutions"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Metageeks Technology",
      position: "Full Stack Developer & DevOps Engineer",
      duration: "2022 - 2023",
      location: "Remote",
      description: "Developed and deployed scalable web applications with modern DevOps practices",
      responsibilities: [
        "Built and maintained MERN stack applications with modern UI/UX",
        "Implemented SEO optimization strategies increasing organic traffic by 40%",
        "Integrated Firebase Authentication and real-time database solutions",
        "Set up CI/CD pipelines using GitHub Actions for automated deployments",
        "Collaborated with cross-functional teams on agile development processes",
        "Mentored junior developers on best practices and code quality"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "GitHub Actions", "SEO"],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Awihar Technology",
      position: "Founder & Tech Lead",
      duration: "2021 - Present",
      location: "Augusta, Georgia",
      description: "Founded and leading a technology company focused on innovative solutions",
      responsibilities: [
        "Established company vision and strategic technology roadmap",
        "Led development of cybersecurity awareness programs",
        "Built and managed a team of skilled developers and engineers",
        "Developed proprietary automation tools for infrastructure management",
        "Secured partnerships with enterprise clients for technology solutions",
        "Drove innovation in cloud architecture and security practices"
      ],
      technologies: ["Leadership", "Strategy", "Cybersecurity", "Cloud Architecture", "Team Management"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Building the future of cloud infrastructure and DevOps automation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-black hidden md:block"></div>

                <div className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-5 rounded-2xl blur-lg group-hover:opacity-10 transition-all`}></div>
                  <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${exp.color} text-white font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 3 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">
                              +{exp.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: expandedItem === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                        >
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Responsibilities & Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Technologies Used:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};