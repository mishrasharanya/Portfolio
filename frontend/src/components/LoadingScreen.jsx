import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Sparkles, 
  TrendingUp,
  Cpu,
  BarChart3,
  Zap
} from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            setTimeout(() => onLoadingComplete(), 800);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      // FASTER Counter
      const counterTimer = setInterval(() => {
        setCounter(prev => prev < 100 ? prev + 2 : 100);
      }, 50);

      // Cleanup intervals
      return () => {
        clearInterval(progressTimer);
        clearInterval(counterTimer);
      };
    }, 4000); // Wait 4 seconds before starting (matches progress section delay)

    return () => clearTimeout(startDelay);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      },
    }),
  };

  const firstName = "SHARANYA".split("");
  const lastName = "MISHRA".split("");

  const floatingIcons = [
    { Icon: Brain, delay: 0, position: 'top-20 left-10' },
    { Icon: Code, delay: 0.5, position: 'top-40 right-16' },
    { Icon: Database, delay: 1, position: 'bottom-40 left-20' },
    { Icon: TrendingUp, delay: 1.5, position: 'bottom-32 right-12' },
    { Icon: Cpu, delay: 0.3, position: 'top-1/3 left-1/4' },
    { Icon: BarChart3, delay: 0.8, position: 'bottom-1/3 right-1/4' },
    { Icon: Zap, delay: 1.2, position: 'top-1/2 right-20' },
    { Icon: Sparkles, delay: 0.6, position: 'bottom-1/2 left-16' },
  ];

  const stats = [
    { value: '15+', label: 'Projects' },
    { value: '5+', label: 'Work Experience' },
    { value: '1', label: 'IEEE Paper' },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Multiple Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-cyan-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[500px] h-80 md:h-[500px] bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <div className="hidden md:block absolute inset-0">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              delay: delay,
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="text-cyan-400/30" size={32} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-6 md:mb-8"
        >
          <Sparkles className="text-cyan-400" size={16} />
          <span className="text-cyan-400 font-semibold text-xs md:text-sm tracking-widest">
            WELCOME TO MY PORTFOLIO
          </span>
          <Sparkles className="text-cyan-400" size={16} />
        </motion.div>

        {/* Animated Name */}
        <div className="mb-4 md:mb-6 space-y-1 md:space-y-2">
          {/* First Name */}
          <div className="flex flex-nowrap justify-center" style={{ gap: 'clamp(2px, 0.5vw, 8px)' }}>
            {firstName.map((letter, index) => (
              <motion.span
                key={`first-${index}`}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white flex-shrink-0"
                style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* Last Name */}
          <div className="flex flex-nowrap justify-center" style={{ gap: 'clamp(2px, 0.5vw, 8px)' }}>
            {lastName.map((letter, index) => (
              <motion.span
                key={`last-${index}`}
                custom={firstName.length + index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400 flex-shrink-0"
                style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mb-8 md:mb-12 space-y-2"
        >
          <p className="text-lg md:text-2xl text-gray-400 font-light">
            Data Science • Machine Learning • AI
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Building intelligent systems that solve real-world problems
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2 + index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 p-3 md:p-4 rounded-lg hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-xl md:text-3xl font-bold text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="max-w-md mx-auto space-y-4"
        >
          {/* Percentage Counter */}
          <motion.div className="text-center mb-3">
            <motion.span
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {counter}%
            </motion.span>
          </motion.div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Loading Text */}
          <motion.div className="flex justify-between items-center text-xs md:text-sm">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-gray-400"
            >
              Initializing portfolio...
            </motion.span>
            <span className="text-cyan-400 font-semibold">
              {Math.floor(progress)}%
            </span>
          </motion.div>
        </motion.div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          onClick={() => onLoadingComplete()}
          className="mt-8 md:mt-10 px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm text-gray-400 hover:text-cyan-400 border border-gray-700 hover:border-cyan-400 rounded-full transition-all duration-300 hover:scale-105 group"
        >
          <span className="flex items-center gap-2">
            Skip Intro
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="mt-8 text-xs md:text-sm text-gray-600 italic"
        >
          "In God we trust, all others must bring data."
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;