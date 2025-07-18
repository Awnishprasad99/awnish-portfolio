import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Augusta University",
      location: "Augusta, Georgia",
      duration: "2019 - 2023",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, data structures, algorithms, and computer systems. Completed capstone project on cloud infrastructure automation.",
      highlights: [
        "Dean's List for 6 consecutive semesters",
        "Computer Science Society Vice President",
        "Led team project on distributed systems",
        "Graduated Magna Cum Laude"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Software Engineering",
        "Cybersecurity Fundamentals",
        "Cloud Computing"
      ],
      color: "from-blue-500 to-purple-500"
    }
  ];

  const additionalEducation = [
    {
      title: "AWS Cloud Practitioner Certification",
      provider: "Amazon Web Services",
      year: "2023",
      type: "Professional Certification"
    },
    {
      title: "DevOps Engineering Bootcamp",
      provider: "Udemy",
      year: "2022",
      type: "Online Course"
    },
    {
      title: "Cybersecurity Specialization",
      provider: "Coursera",
      year: "2022",
      type: "Online Specialization"
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
    <section id="education" className="py-20 bg-white dark:bg-black">
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
              Education & Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Continuous learning and academic excellence in technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Main Education */}
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12"
            >
              <div className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-5 rounded-3xl blur-lg group-hover:opacity-10 transition-all`}></div>
                <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start mb-4 lg:mb-0">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white mr-4 flex-shrink-0`}>
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                      <Award className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Academic Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Continuing Education & Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalEducation.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {item.provider}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};