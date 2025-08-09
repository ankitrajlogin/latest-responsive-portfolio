import { motion } from 'framer-motion';
import { ChevronDown, Download, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
        <div className="absolute inset-0 animated-bg opacity-20" />
      </div>

      {/* Floating Particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block">Ankit Raj</span>
            <span className="block text-gradient text-4xl md:text-6xl lg:text-7xl">Developer</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            <span className="inline-block border-r-2 border-primary animate-typewriter overflow-hidden whitespace-nowrap">
              Full-Stack Software Engineer
            </span>
          </div>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Engineering impactful software with precision and purpose. From optimizing AI models and building scalable full-stack platforms to leading teams that deliver results, I turn ideas into high-performance digital solutions. 
          Passionate about clean code, real-world problem-solving, and pushing the boundaries of modern technology.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            className="btn-hero-primary group"
            onClick={() => window.open('https://drive.google.com/file/d/11cvytJAhQ-1dGpPqRxe8UzqL2aleXu1F/view?usp=sharing', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            View Resume
          </Button>
          <Button 
            className="btn-hero-secondary group"
            onClick={() => window.open('tel:+15551234567', '_self')}
          >
            <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scrollIndicatorVariants}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;