import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, Clock, Eye, Heart, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  // Featured blog posts - you can update these with your actual Hashnode articles
  const blogPosts = [
    {
      title: "Building Scalable CI/CD Pipelines with Jenkins and Docker",
      excerpt: "Learn how to create robust, automated deployment pipelines that scale with your team and infrastructure needs.",
      image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      views: "2.1k",
      likes: 45,
      comments: 12,
      tags: ["DevOps", "CI/CD", "Jenkins", "Docker"],
      url: "https://hashnode.com/@awnishsharma/building-scalable-cicd-pipelines",
      category: "DevOps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AWS Cost Optimization: 10 Strategies That Saved Us 40%",
      excerpt: "Practical techniques and tools to reduce your AWS bill without compromising performance or reliability.",
      image: "https://images.pexels.com/photos/8636597/pexels-photo-8636597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2024-01-08",
      readTime: "12 min read",
      views: "3.5k",
      likes: 78,
      comments: 23,
      tags: ["AWS", "Cloud", "Cost Optimization", "FinOps"],
      url: "https://hashnode.com/@awnishsharma/aws-cost-optimization",
      category: "Cloud",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Kubernetes Security Best Practices: A Complete Guide",
      excerpt: "Essential security measures every DevOps engineer should implement when working with Kubernetes clusters.",
      image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2023-12-22",
      readTime: "15 min read",
      views: "1.8k",
      likes: 62,
      comments: 18,
      tags: ["Kubernetes", "Security", "DevSecOps", "Container Security"],
      url: "https://hashnode.com/@awnishsharma/kubernetes-security",
      category: "Security",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Infrastructure as Code with Terraform: From Beginner to Pro",
      excerpt: "Master Terraform with real-world examples, best practices, and advanced techniques for managing cloud infrastructure.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2023-12-10",
      readTime: "20 min read",
      views: "4.2k",
      likes: 91,
      comments: 34,
      tags: ["Terraform", "IaC", "AWS", "Infrastructure"],
      url: "https://hashnode.com/@awnishsharma/terraform-guide",
      category: "Infrastructure",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Monitoring Microservices: Observability with Prometheus & Grafana",
      excerpt: "Build comprehensive monitoring solutions for distributed systems using modern observability tools.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2023-11-28",
      readTime: "10 min read",
      views: "2.7k",
      likes: 56,
      comments: 15,
      tags: ["Monitoring", "Prometheus", "Grafana", "Observability"],
      url: "https://hashnode.com/@awnishsharma/microservices-monitoring",
      category: "Monitoring",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "GitOps Workflow: Automating Deployments with ArgoCD",
      excerpt: "Implement GitOps principles to achieve continuous deployment with better security and reliability.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      publishedAt: "2023-11-15",
      readTime: "14 min read",
      views: "1.9k",
      likes: 43,
      comments: 9,
      tags: ["GitOps", "ArgoCD", "Kubernetes", "Automation"],
      url: "https://hashnode.com/@awnishsharma/gitops-argocd",
      category: "GitOps",
      color: "from-indigo-500 to-purple-500"
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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
                Latest Insights
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Blog & Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Sharing knowledge about DevOps, cloud architecture, and modern infrastructure through detailed technical articles
            </p>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              className="group relative"
              onMouseEnter={() => setHoveredPost(0)}
              onMouseLeave={() => setHoveredPost(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${blogPosts[0].color} opacity-10 rounded-3xl blur-2xl`}
                animate={{ 
                  scale: hoveredPost === 0 ? [1, 1.05, 1] : 1,
                  opacity: hoveredPost === 0 ? [0.1, 0.2, 0.1] : 0.1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-80 lg:h-auto">
                    <motion.img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
                    
                    {/* Featured badge */}
                    <div className="absolute top-6 left-6">
                      <motion.span 
                        className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 rgba(251, 191, 36, 0)",
                            "0 0 20px rgba(251, 191, 36, 0.5)",
                            "0 0 0 rgba(251, 191, 36, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Featured
                      </motion.span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${blogPosts[0].color} text-white font-medium`}>
                        {blogPosts[0].category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {blogPosts[0].title}
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {blogPosts[0].excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(blogPosts[0].publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {blogPosts[0].views} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {blogPosts[0].likes} likes
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {blogPosts[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more button */}
                    <motion.a
                      href={blogPosts[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${blogPosts[0].color} text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group w-fit`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={index + 1}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredPost(index + 1)}
                onMouseLeave={() => setHoveredPost(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${post.color} opacity-5 rounded-2xl blur-xl`}
                  animate={{ 
                    opacity: hoveredPost === index + 1 ? 0.15 : 0.05
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${post.color} text-white font-medium`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight line-clamp-2"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {post.comments}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-md">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Read more link */}
                    <motion.a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium group/link"
                      whileHover={{ x: 5 }}
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://hashnode.com/@awnishsharma"
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
              <BookOpen className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-500" />
              Read All Articles on Hashnode
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Newsletter signup */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  📧 Stay Updated
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Get notified when I publish new articles about DevOps, cloud architecture, and modern infrastructure practices.
                </p>
                <motion.a
                  href="https://hashnode.com/@awnishsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Follow on Hashnode
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};