import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const experiences = [
  {
    role: "Software Engineer",
    company: "Optum",
    location: "Bengaluru, Karnataka, India",
    duration: "July 2025 - Present",
    achievements: [
      "Working on developing and maintaining scalable healthcare applications",
      "Collaborating with cross-functional teams to design and implement new features",
      "Focusing on clean code, performance optimization, and best development practices"
    ]
  },
  {
    role: "Associate Software Developer Intern",
    company: "Juspay",
    location: "Bengaluru, Karnataka, India",
    duration: "Jan 2025 - July 2025",
    achievements: [
      "Completed Haskell training and integrated merchants with backend using multiple gateways for Partial TPV mandates",
      "Tested and validated merchant/payment gateway APIs, handling edge cases and error scenarios",
      "Debugged and optimized API request bodies to meet merchant data transmission requirements"
    ]
  },
  {
    role: "Advanced App Engineering Analyst Intern",
    company: "Accenture",
    location: "Gurugram, Haryana, India",
    duration: "May 2024 - July 2024",
    achievements: [
      "Optimized Small and Large Language Models (SLM, LLM) for QA and summarization, achieving 15% higher accuracy and 30% faster response times",
      "Developed and fine-tuned a Retrieval-Augmented Generation (RAG) model improving context analysis efficiency by 20%",
      "Executed debugging tasks for Full Stack applications, resolving 70% of identified issues and reducing bugs"
    ]
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey building innovative software solutions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
            
            <div className="space-y-6 md:space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative flex items-start md:pr-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute right-6 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background-secondary hidden md:block" />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 w-full group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mobile-first responsive header */}
                    <div className="flex flex-col gap-4 mb-4">
                      {/* Top row with icon and badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                          <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30">
                            Professional
                          </span>
                        </div>
                      </div>
                      
                      {/* Date and location - stacked on mobile, inline on larger screens */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="font-medium">{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="break-words">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300 leading-tight">
                      {item.role}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 md:mb-6 font-medium text-base md:text-lg">
                      {item.company}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider opacity-70">
                        Key Achievements
                      </h4>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start gap-3 group/item"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 group-hover/item:text-secondary transition-colors flex-shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;