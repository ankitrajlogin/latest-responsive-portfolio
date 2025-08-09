import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, Presentation, Code, Heart, Star , BookOpen } from 'lucide-react';

const ExtraCurricularSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
const activities = [
  {
    icon: Users,
    title: "General Secretary & Technical Wing Head",
    organization: "Instrumentation and Electronics Engineering Society (INSEES), NIT Silchar",
    description: "Led technical initiatives, organized events, and managed collaborations for the society",
    achievements: [
      "Built the INSEES website from scratch using HTML, CSS, JavaScript, and Express.js",
      "Organized collaborative technical events and forged partnerships with external organizations",
      "Managed and coordinated domain-specific events for members"
    ]
  },
  {
    icon: Code,
    title: "Web Member",
    organization: "Google Developer Student Clubs (GDSC), NIT Silchar",
    description: "Contributed to web development projects and technical content creation",
    achievements: [
      "Built the GDSC Explore website for the North-East region using HTML, CSS, and React",
      "Wrote invitations and technical content for GDSC events",
      "Collaborated with the team to improve user experience and engagement"
    ]
  },
  {
    icon: BookOpen,
    title: "Content Team Member",
    organization: "Gyansagar",
    description: "Part of the content creation team contributing educational and technical materials",
    achievements: [
      "Authored multiple technical and non-technical articles",
      "Collaborated with editorial team for quality content delivery"
    ]
  },
  {
    icon: Trophy,
    title: "Module Head",
    organization: "Technolosis - NIT Silchar Annual Flagship Technical Event",
    description: "Led a specific module in the flagship technical fest, coordinating activities and participants",
    achievements: [
      "Planned and executed event modules attracting significant participation",
      "Collaborated with other module heads to ensure smooth event flow",
      "Engaged with participants and managed on-ground event logistics"
    ]
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
              Extra-Curricular <span className="text-gradient">Activities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leadership roles and community involvement that shaped my professional growth
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass rounded-3xl p-8 group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-all duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {activity.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activity.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider opacity-70 flex items-center gap-2">
                    <Star className="h-3 w-3" />
                    Key Highlights
                  </h4>
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + (index * 0.1) + (achievementIndex * 0.05) }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Recognition */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass rounded-3xl p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Community <span className="text-gradient">Impact</span>
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Through my roles in the Instrumentation and Electronics Engineering Society (INSEES) and Google Developer Student Clubs (GDSC) at NIT Silchar, I've contributed to building platforms, organizing technical events, and creating opportunities for learning and collaboration. From developing society and event websites to leading modules in Technolosis, our annual flagship technical fest, I've focused on making technology accessible, encouraging peer-to-peer learning, and fostering an environment where students can explore, experiment, and excel together.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;