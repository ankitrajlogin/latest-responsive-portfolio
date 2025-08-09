import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Wrench, Users, Brain } from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "C", "JavaScript", "Python", "SQL", "MATLAB"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Code,
    skills: ["React", "Redux", "Node.js", "Express.js", "FastAPI", "TensorFlow", "Keras"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "NoSQL", "SQLite"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Streamlit", "Vercel", "GitHub Actions"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Bootstrap", "Power BI", "LabVIEW"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Collaboration", "Leadership", "Event Management"]
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 px-6 bg-background-secondary">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional software solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-3xl p-8"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary mb-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-badge cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Additional <span className="text-gradient">Technologies</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "GraphQL", "REST APIs", "Microservices", 
                "Linux", "Jenkins" , "LogViewer" , "OpenSearch"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={badgeVariants}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="skill-badge cursor-default bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;