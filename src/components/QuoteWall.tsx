import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export const QuoteWall: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const quotes = [
    {
      text: "Automation is not about replacing humans; it's about empowering them to focus on what truly matters.",
      author: "Awnish Sharma",
      category: "DevOps Philosophy"
    },
    {
      text: "In the cloud, scalability isn't just a feature—it's a mindset that transforms how we approach problem-solving.",
      author: "Awnish Sharma",
      category: "Cloud Computing"
    },
    {
      text: "Security isn't a checkpoint; it's a continuous journey of vigilance and adaptation.",
      author: "Awnish Sharma",
      category: "Cybersecurity"
    },
    {
      text: "The best infrastructure is the one you never have to think about—because it just works.",
      author: "Awnish Sharma",
      category: "Infrastructure"
    },
    {
      text: "Innovation happens when curiosity meets the courage to challenge the status quo.",
      author: "Awnish Sharma",
      category: "Innovation"
    },
    {
      text: "Every failed deployment is a lesson; every successful one is a step toward mastery.",
      author: "Awnish Sharma",
      category: "Learning"
    }
  ];

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
    hidden: { y: 50, opacity: 0, rotateX: 45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const colors = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-blue-500",
    "from-yellow-500 to-orange-500"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Philosophy & Insights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thoughts and reflections on technology, innovation, and the future of DevOps
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative perspective-1000"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} opacity-10 rounded-2xl blur-lg group-hover:opacity-20 transition-all`}></div>
                <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${colors[index % colors.length]} text-white mr-3 flex-shrink-0`}>
                      <Quote className="w-4 h-4" />
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${colors[index % colors.length]} text-white font-medium`}>
                      {quote.category}
                    </span>
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed italic">
                    "{quote.text}"
                  </blockquote>

                  <div className="mt-auto">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-3"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      — {quote.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://hashnode.com/@awnishsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More Insights on My Blog
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};