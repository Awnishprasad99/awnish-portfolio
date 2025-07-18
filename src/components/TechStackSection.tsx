import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Container, GitBranch, Server, Database, Shield } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          level: 95
        },
        {
          name: "Azure",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          level: 85
        },
        {
          name: "Google Cloud",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          level: 80
        },
        {
          name: "DigitalOcean",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
          level: 90
        }
      ]
    },
    {
      title: "Containerization",
      icon: Container,
      color: "from-purple-500 to-pink-500",
      technologies: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: 95
        },
        {
          name: "Kubernetes",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          level: 90
        },
        {
          name: "Podman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
          level: 85
        },
        {
          name: "OpenShift",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg",
          level: 80
        }
      ]
    },
    {
      title: "CI/CD Tools",
      icon: GitBranch,
      color: "from-green-500 to-teal-500",
      technologies: [
        {
          name: "Jenkins",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
          level: 90
        },
        {
          name: "GitHub Actions",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          level: 95
        },
        {
          name: "GitLab CI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          level: 85
        },
        {
          name: "CircleCI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
          level: 80
        }
      ]
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
    <section id="tech-stack" className="py-20 bg-white dark:bg-black overflow-hidden">
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
                Technology Stack
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tech Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Mastering cutting-edge technologies to build scalable, secure, and efficient cloud infrastructure
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group relative"
              >
                {/* Category Header */}
                <motion.div
                  className="flex items-center mb-8"
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
                    <category.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="group/tech relative"
                      onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      style={{ transitionDelay: `${categoryIndex * 0.2 + techIndex * 0.1}s` }}
                    >
                      {/* Glow effect */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 rounded-2xl blur-xl`}
                        animate={{ 
                          opacity: hoveredTech === `${categoryIndex}-${techIndex}` ? 0.2 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
                        {/* Tech Logo */}
                        <motion.div 
                          className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-xl"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-contain p-2"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          {/* Fallback icon */}
                          <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                            <Server className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                          </div>
                        </motion.div>

                        {/* Tech Name */}
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-3">
                          {tech.name}
                        </h4>

                        {/* Proficiency Level */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Proficiency
                            </span>
                            <motion.span 
                              className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                              animate={{ 
                                scale: hoveredTech === `${categoryIndex}-${techIndex}` ? [1, 1.1, 1] : 1
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              {tech.level}%
                            </motion.span>
                          </div>
                          
                          <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.3 + techIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Animated glow */}
                            <motion.div
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full opacity-50 blur-sm`}
                              initial={{ width: 0 }}
                              animate={inView ? { 
                                width: `${tech.level}%`,
                                opacity: [0.5, 0.8, 0.5]
                              } : { width: 0 }}
                              transition={{ 
                                width: { duration: 1.5, delay: categoryIndex * 0.3 + techIndex * 0.1 },
                                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                              }}
                            />
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 rounded-2xl flex items-center justify-center`}
                          animate={{ 
                            opacity: hoveredTech === `${categoryIndex}-${techIndex}` ? 0.1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack", 
                "Redis", "MongoDB", "PostgreSQL", "Nginx", "Apache", 
                "Linux", "Bash", "Python", "JavaScript", "Node.js"
              ].map((skill, index) => (
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
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    delay: 2 + index * 0.05,
                    duration: 0.6
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};