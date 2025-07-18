import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, TrendingUp, Users, Award, Clock } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: TrendingUp,
      title: "50% Faster Deployments",
      description: "Reduced deployment time through automated CI/CD pipelines and infrastructure optimization",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: "99.9% Uptime",
      description: "Maintained exceptional service reliability across multiple enterprise environments",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "10+ Team Members",
      description: "Led and mentored development teams on DevOps best practices and cloud technologies",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Implemented monitoring and alerting systems for round-the-clock infrastructure management",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const services = [
    {
      title: "Cloud Infrastructure Design",
      description: "Architecting scalable, secure, and cost-effective cloud solutions on AWS, Azure, and GCP",
      features: ["Infrastructure as Code", "Auto-scaling", "Cost optimization", "Security compliance"]
    },
    {
      title: "DevOps Implementation",
      description: "Setting up complete CI/CD pipelines and automation workflows for faster, reliable deployments",
      features: ["Pipeline automation", "Testing integration", "Deployment strategies", "Monitoring setup"]
    },
    {
      title: "Cybersecurity Consulting",
      description: "Implementing comprehensive security measures and compliance frameworks for modern infrastructure",
      features: ["Security audits", "Compliance frameworks", "Threat detection", "Incident response"]
    },
    {
      title: "Team Training & Mentoring",
      description: "Upskilling teams on modern DevOps practices, cloud technologies, and security best practices",
      features: ["Hands-on workshops", "Best practices training", "Certification guidance", "Ongoing support"]
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
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Work & Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Delivering measurable results through innovative DevOps solutions and cloud expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 rounded-xl blur-lg group-hover:opacity-10 transition-all`}></div>
                  <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white mb-4`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Offered */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Services I Offer
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl blur-lg group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all"></div>
                  <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mr-4">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Let's Discuss Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};