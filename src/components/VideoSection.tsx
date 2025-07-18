import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, ExternalLink } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const videos = [
    {
      title: "DevOps Pipeline Demo",
      description: "Complete CI/CD pipeline setup with Jenkins, Docker, and Kubernetes deployment",
      thumbnail: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12:34",
      views: "2.1K",
      url: "#",
      category: "Tutorial"
    },
    {
      title: "AWS Cloud Architecture",
      description: "Building scalable cloud infrastructure with AWS services and Terraform",
      thumbnail: "https://images.pexels.com/photos/8636597/pexels-photo-8636597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "18:45",
      views: "3.5K",
      url: "#",
      category: "Cloud"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Essential security measures for modern DevOps environments",
      thumbnail: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "15:22",
      views: "1.8K",
      url: "#",
      category: "Security"
    }
  ];

  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

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
              Video Tutorials & Demos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Learn DevOps, cloud architecture, and cybersecurity through practical demonstrations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all">
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: hoveredVideo === index ? 1 : 0.8,
                          opacity: hoveredVideo === index ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Play className="w-6 h-6 text-gray-800 ml-1" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {video.category}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {video.views} views
                      </span>
                      <motion.a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Watch Now
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </motion.a>
                    </div>
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
              href="https://youtube.com/@awnish-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2" />
              Subscribe to My YouTube Channel
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};