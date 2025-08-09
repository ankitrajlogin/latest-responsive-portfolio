import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alumninetImg from '@/assets/alumninet.png';
import realTimeChatApplicatin from '@/assets/realtimechat.png';
import cryptoHunterImg from '@/assets/cryptohunter.png';
import agriVisionImg from '@/assets/agriVision.png';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
  {
    id: 1,
    title: "AlumniNet",
    description: "A comprehensive platform designed to connect alumni, current students, and their alma mater by fostering meaningful professional and community engagement. Features include alumni networking, career resources, mentorship, event management, and knowledge sharing to support professional growth and reconnecting with peers.",
    image: alumninetImg,
    tech: ["MongoDB", "Express.js", "React", "Node.js", "UX Design"],
    liveUrl: "https://alumninet.example.com",
    githubUrl: "https://github.com/ankitrajlogin",
    featured: true
  },
  {
    id: 2,
    title: "AgriVision",
    description: "An AI-powered platform for farmers with crop recommendations, plant disease detection, fertilizer suggestions, and pest identification using ML models.",
    image: agriVisionImg,
    tech: ["Python", "TensorFlow", "React", "Node.js", "Flask API"],
    liveUrl: "https://example.com", // Replace with actual deployed link
    githubUrl: "https://github.com/ankitrajlogin", // Replace with actual repo link
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "A scalable chat application with features like file sharing, emoji reactions, and group management.",
    image: realTimeChatApplicatin,
    tech: ["Next.js", "Socket.io", "MongoDB", "Redis", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ankitrajlogin",
    featured: false
  },
  {
    id: 4,
    title: "Project Management Tool",
    description: "A comprehensive project management solution with task tracking, team collaboration, and time management features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "GraphQL", "PostgreSQL", "TypeScript", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ankitrajlogin",
    featured: false
  },
  {
    id: 6,
    title: "Crypto Hunter",
    description: "A real-time crypto portfolio tracker with advanced charting, price alerts, and portfolio analytics.",
    image: cryptoHunterImg,
    tech: ["React", "Chart.js", "CoinGecko API", "Tailwind", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ankitrajlogin",
    featured: false
  },
  
  {
    id: 7,
    title: "MERN Bookstore Platform",
    description: "A full-stack MERN-based application store where users can browse, search, and download apps with integrated authentication, ratings, and reviews.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=book",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth"],
    liveUrl: "https://example.com", // Replace with actual deployed link
    githubUrl: "https://github.com/ankitrajlogin", // Replace with actual repo link
    featured: false
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="project-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a href ={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" 
                        className="btn-hero-primary">
                          <Play className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="btn-hero-secondary">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex">
                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex">
                      <Button variant="outline" size="sm" className="group/btn">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        View Code
                      </Button>
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Other <span className="text-gradient">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass rounded-2xl p-6 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h4 className="font-bold mb-2 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="ghost" size="sm" className="flex-1 group/btn">
                        <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:animate-pulse" />
                        Demo
                      </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="ghost" size="sm" className="flex-1 group/btn">
                      <Github className="h-3 w-3 mr-1 group-hover/btn:animate-pulse" />
                      Code
                    </Button>
                  </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/ankitrajlogin?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero-primary group">
                <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
                View All Projects on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
