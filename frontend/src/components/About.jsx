import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Rocket, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Target,
      title: 'Research-Driven',
      description: 'Leading trajectory optimization research at IIT with published IEEE work'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Built ML pipelines improving accuracy to 95% and reducing manual effort by 40%'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Mastered LLM integration, GARCH modeling, and multi-solver optimization frameworks'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Proven track record at Deloitte, Capgemini, and Aptos in data-driven roles'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">WHO I AM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1662638600476-d563fffbb072"
                  alt="Data Science Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">10+</div>
                  <div className="text-sm text-black font-semibold">PROJECTS</div>
                  <div className="text-xs text-black/80">Built</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">Data Science graduate student at Illinois Institute of Technology</span>, 
              passionate about building AI systems that solve real problems. My work focuses on <span className="text-cyan-400 font-semibold">machine learning pipelines</span>, 
              <span className="text-cyan-400 font-semibold"> deep learning models</span>, and <span className="text-cyan-400 font-semibold">predictive analytics</span>—from 
              prototyping to deployment.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've built end-to-end systems including <span className="text-white font-semibold">computer vision models for accessibility</span> (published in IEEE), 
              <span className="text-white font-semibold"> NLP pipelines for community insights</span>, and <span className="text-white font-semibold">financial forecasting apps</span> using 
              GARCH and LangChain. Currently leading research on <span className="text-cyan-400 font-semibold">trajectory optimization frameworks</span> with 
              multi-solver benchmarking and LLM-driven optimization.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond work, I stay active playing <span className="text-white font-semibold">table tennis, squash, golf, and badminton</span>—sports that taught me 
              strategy, quick decision-making, and resilience. I bring the same energy to my projects: <span className="text-white font-semibold">iterate fast, 
              learn continuously, and deliver impact</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <Icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={24} />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
