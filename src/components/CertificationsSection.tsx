import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, CheckCircle, Star, Calendar, Shield } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      description: "Foundational understanding of AWS Cloud services, security, and best practices",
      image: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      credlyUrl: "https://www.credly.com/users/awnish-sharma.4da94f8c",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
      color: "from-orange-500 to-yellow-500",
      validUntil: "2026"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services", 
      date: "2024",
      status: "Active",
      description: "Advanced knowledge of designing distributed systems on AWS platform",
      image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      credlyUrl: "https://www.credly.com/users/awnish-sharma.4da94f8c",
      skills: ["Solution Architecture", "AWS Design", "High Availability", "Cost Optimization"],
      color: "from-blue-500 to-purple-500",
      validUntil: "2027"
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
      status: "Active", 
      description: "Infrastructure as Code expertise with Terraform for cloud provisioning",
      image: "https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png",
      credlyUrl: "https://www.credly.com/users/awnish-sharma.4da94f8c",
      skills: ["Terraform", "Infrastructure as Code", "Cloud Provisioning", "Automation"],
      color: "from-purple-500 to-indigo-500",
      validUntil: "2025"
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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
                Professional Credentials
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-recognized certifications validating expertise in cloud technologies and DevOps practices
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-10 rounded-3xl blur-2xl`}
                  animate={{ 
                    scale: hoveredCert === index ? [1, 1.1, 1] : 1,
                    opacity: hoveredCert === index ? [0.1, 0.25, 0.1] : 0.1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div 
                  className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl h-full flex flex-col"
                >
                  {/* Certification Badge Image */}
                  <div className="relative p-8 flex justify-center">
                    <motion.div
                      className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback */}
                      <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Award className="w-16 h-16 text-white" />
                      </div>
                      
                      {/* Glow ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-4 border-gradient-to-r ${cert.color} opacity-0`}
                        animate={{ 
                          opacity: hoveredCert === index ? [0, 0.6, 0] : 0,
                          scale: hoveredCert === index ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    {/* Status badge */}
                    <motion.div 
                      className="absolute top-4 right-4 flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {cert.status}
                      </span>
                    </motion.div>
                  </div>

                  {/* Certificate info */}
                  <div className="px-8 pb-8 flex-grow flex flex-col">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.title}
                    </motion.h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium text-center">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed text-center flex-grow">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                        Key Skills:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              borderColor: 'rgba(59, 130, 246, 0.3)'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <motion.a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl text-sm font-medium hover:shadow-xl transition-all duration-300 group/btn mt-auto`}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Award className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Credential
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Floating particles around card */}
                {hoveredCert === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full opacity-60`}
                        animate={{
                          x: [0, Math.cos(i * 1.05) * 40, 0],
                          y: [0, Math.sin(i * 1.05) * 40, 0],
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
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
              href="https://www.credly.com/users/awnish-sharma.4da94f8c"
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
              <Star className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              View All Credentials on Credly
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};