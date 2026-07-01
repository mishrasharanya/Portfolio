import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Rocket, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Target,
      title: 'Research & Innovation',
      description: 'IEEE publication, robotics optimization research, and AI-powered systems development'
    },
    {
      icon: Lightbulb,
      title: 'AI & Machine Learning',
      description: 'Experience across NLP, computer vision, forecasting, optimization, and generative AI'
    },
    {
      icon: Rocket,
      title: 'Full-Stack Builder',
      description: 'Built end-to-end platforms combining data pipelines, ML models, APIs, and interactive applications'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Data science and analytics experience across consulting, retail technology, and research environments'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[360px] sm:h-[500px] overflow-hidden border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1662638600476-d563fffbb072"
                  alt="Data Science Workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-0 lg:-left-6 w-40 h-40 sm:w-48 sm:h-48 bg-cyan-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-black">15+</div>
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
            className="space-y-6 text-center lg:text-left"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">Data Science graduate from Illinois Institute of Technology</span> with experience building machine learning, AI, analytics, and optimization solutions that transform complex data into actionable insights. My interests span <span className="text-cyan-400 font-semibold">machine learning</span>, <span className="text-cyan-400 font-semibold">generative AI</span>, <span className="text-cyan-400 font-semibold">data engineering</span>, and <span className="text-cyan-400 font-semibold">intelligent systems</span>, with a focus on creating solutions that deliver measurable real-world impact.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Throughout my academic, research, and industry experiences, I have developed end-to-end applications ranging from computer vision and NLP systems to forecasting platforms, optimization frameworks, AI-powered applications, and data-driven analytics solutions. My work includes an <span className="text-white font-semibold">IEEE-published accessibility project</span>, <span className="text-white font-semibold">urban analytics research</span>, <span className="text-white font-semibold">financial forecasting systems</span>, <span className="text-white font-semibold">trajectory optimization platforms for robotics</span>, and enterprise analytics initiatives across consulting and technology organizations.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I enjoy solving challenging problems at the intersection of <span className="text-white font-semibold">data, AI, and software engineering</span>. Whether building predictive models, designing data pipelines, developing intelligent applications, or translating research into practical tools, I am driven by <span className="text-cyan-400 font-semibold">curiosity</span>, <span className="text-cyan-400 font-semibold">continuous learning</span>, and creating technology that people can actually use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
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
                    <Icon className="text-cyan-400 mb-3 mx-auto lg:mx-0 group-hover:scale-110 transition-transform" size={24} />
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