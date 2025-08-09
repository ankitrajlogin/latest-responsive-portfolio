import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
  {
    degree: "B.Tech in Electronics and Instrumentation Engineering",
    institution: "National Institute of Technology (NIT) Silchar, Assam, India",
    year: "2021 - 2025",
    grade: "CGPA: 8.63/10",
    type: "Undergraduate"
  },
  {
    degree: "Senior Secondary (BSEB)",
    institution: "Ram Krishna Dwarika College, Patna, Bihar, India",
    year: "2018 - 2020",
    grade: "Percentage: 76.4%",
    type: "Higher Secondary"
  },
  {
    degree: "Secondary (CBSE)",
    institution: "Shiksha Niketan Dighi Kalan, Hajipur, Bihar, India",
    year: "2017 - 2018",
    grade: "Percentage: 81.6%",
    type: "Secondary"
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 px-6">
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
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey and qualifications that shaped my technical foundation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
            
            <div className="space-y-6 md:space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative flex items-start md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background hidden md:block" />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 w-full group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mobile-first header layout */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      {/* Date - better mobile positioning */}
                      <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium whitespace-nowrap">{item.year}</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300 leading-tight">
                      {item.degree}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3 font-medium text-sm md:text-base">
                      {item.institution}
                    </p>

                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm font-semibold text-secondary">
                        {item.grade}
                      </span>
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

export default EducationSection;