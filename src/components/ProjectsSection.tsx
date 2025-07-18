import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Rocket, Code, Database, Star, Eye, GitBranch } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const projects = [
    {
      title: "Liveverse",
      description: "A comprehensive lead generation system built with Next.js, featuring real-time analytics, automated email campaigns, and advanced customer segmentation.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Redis"],
      features: [
        "Real-time lead tracking and analytics",
        "Automated email marketing campaigns", 
        "Advanced customer segmentation",
        "Integration with multiple CRM systems",
        "Performance optimization and SEO"
      ],
      github: "https://github.com/Awnishprasad99",
      live: "#",
      category: "Full Stack",
      color: "from-blue-500 to-purple-500",
      stats: { stars: 45, forks: 12, views: "2.1k" },
      status: "Production",
      completion: 95
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform-based infrastructure as code solution for AWS multi-environment deployments with automated CI/CD pipelines and monitoring.",
      image: "https://images.pexels.com/photos/8636597/pexels-photo-8636597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Terraform", "AWS", "Jenkins", "Docker", "Kubernetes", "Prometheus"],
      features: [
        "Multi-environment infrastructure provisioning",
        "Automated CI/CD pipeline setup",
        "Monitoring and alerting integration",
        "Cost optimization strategies",
        "Security best practices implementation"
      ],
      github: "https://github.com/Awnishprasad99",
      live: "#",
      category: "DevOps",
      color: "from-green-500 to-teal-500",
      stats: { stars: 78, forks: 23, views: "3.5k" },
      status: "Active",
      completion: 100
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring dashboard with threat detection, vulnerability assessment, and compliance reporting for enterprise environments.",
      image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "D3.js", "Express"],
      features: [
        "Real-time threat monitoring",
        "Vulnerability assessment automation",
        "Compliance reporting dashboard",
        "Incident response workflows",
        "Security metrics visualization"
      ],
      github: "https://github.com/Awnishprasad99",
      live: "#",
      category: "Security",
      color: "from-red-500 to-pink-500",
      stats: { stars: 62, forks: 18, views: "1.8k" },
      status: "Beta",
      completion: 85
    },
    {
      title: "Container Orchestration Platform",
      description: "Kubernetes-based container orchestration platform with automated scaling, service mesh integration, and comprehensive monitoring.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Kubernetes", "Docker", "Istio", "Helm", "Grafana", "Jaeger"],
      features: [
        "Automated horizontal pod scaling",
        "Service mesh traffic management",
        "Distributed tracing and monitoring",
        "Blue-green deployment strategies",
        "Multi-cluster management"
      ],
      github: "https://github.com/Awnishprasad99",
      live: "#",
      category: "DevOps",
      color: "from-orange-500 to-yellow-500",
      stats: { stars: 91, forks: 34, views: "4.2k" },
      status: "Production",
      completion: 92
    }
  ];

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredProject(null);
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'from-green-500 to-emerald-500';
      case 'Active': return 'from-blue-500 to-cyan-500';
      case 'Beta': return 'from-orange-500 to-yellow-500';
      case 'Development': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black overflow-hidden">
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
                Portfolio Showcase
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions in DevOps, cloud infrastructure, and full-stack development with real-world impact
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative perspective-1000"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 rounded-3xl blur-2xl`}
                  animate={{ 
                    scale: hoveredProject === index ? [1, 1.1, 1] : 1,
                    opacity: hoveredProject === index ? [0.05, 0.15, 0.05] : 0.05
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div 
                  className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
                  style={{
                    rotateX: useTransform(springY, [-100, 100], [2, -2]),
                    rotateY: useTransform(springX, [-100, 100], [-2, 2]),
                  }}
                >
                  {/* Project Image with overlay */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Status and category badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <motion.span 
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.color} text-white font-medium shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      <motion.span 
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${getStatusColor(project.status)} text-white font-medium shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    {/* Project stats */}
                    <div className="absolute bottom-4 right-4 flex gap-3">
                      <motion.div 
                        className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        <GitBranch className="w-3 h-3" />
                        {project.stats.forks}
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Project title and completion */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 dark:text-white"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Completion</div>
                        <motion.div 
                          className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {project.completion}%
                        </motion.div>
                      </div>
                    </div>

                    {/* Completion progress bar */}
                    <div className="mb-6">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${project.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${project.completion}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          >
                            <motion.div 
                              className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mr-3`}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              borderColor: 'rgba(59, 130, 246, 0.3)'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.03 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-sm font-medium group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-xl transition-all text-sm font-medium group flex-1 justify-center`}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -2,
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Rocket className="w-4 h-4 mr-2 group-hover:-rotate-12 transition-transform duration-300" />
                        Live Demo
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Floating particles around project card */}
                {hoveredProject === index && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-60`}
                        animate={{
                          x: [0, Math.cos(i * 0.785) * 50, 0],
                          y: [0, Math.sin(i * 0.785) * 50, 0],
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/Awnishprasad99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg group"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              View More Projects on GitHub
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};