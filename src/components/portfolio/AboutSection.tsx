import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const highlights = [
    {
      icon: Code,
      title: "Industry Experience",
      description: "Internships at Juspay & Accenture, now at Optum"
    },
    {
      icon: Zap,
      title: "20+ Projects",
      description: "From AI/ML to full-stack applications"
    },
    {
      icon: Target,
      title: "Problem-Solving Focus",
      description: "1000+ DSA problems solved"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions and beautiful user experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo and Info */}
            <motion.div variants={cardVariants} className="relative">
              <div className="glass rounded-3xl p-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-primary to-secondary p-1">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-glow opacity-20 -z-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Ankit Raj Developer</h3>
                <p className="text-primary font-semibold mb-4">Full-Stack Software Engineer</p>
                
                <Button 
                  className="btn-hero-primary group"
                  onClick={() => window.open('/resume_final.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A developer who enjoys building things that actually work and make life a little easier. Over the past few years, I've worked on everything from full-stack web apps to machine learning projects — sometimes for internships, sometimes just out of curiosity.
                  I've spent time at Juspay and Accenture, where I learned how to solve messy real-world problems — like integrating payment gateways, optimizing AI models, and debugging code that didn't want to cooperate. I like projects where I can mix problem-solving with creativity, whether that's predicting plant diseases with 96% accuracy or making a platform that connects people.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Outside of work, I'm often exploring new tech, trying to get better at competitive programming, or just tinkering with ideas to see where they go. I'm not chasing perfection — I'm chasing progress, and I enjoy every step of it.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.1 * index },
                      },
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-2xl p-4 text-center group cursor-pointer"
                  >
                    <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:animate-pulse" />
                    <h4 className="font-bold text-sm mb-1">{highlight.title}</h4>
                    <p className="text-xs text-muted-foreground">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;