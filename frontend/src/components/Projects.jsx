import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Audio Description for the Visually Impaired',
      description: 'Deep learning pipeline generating real-time voice captions from videos, achieving BLEU score 0.7. Combined object and action recognition models (YOLO, ResNet-35) to enhance video accessibility.',
      tech: ['Python', 'PyTorch', 'YOLO', 'ResNet-35', 'Google TTS API', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1680783954745-3249be59e527',
      github: 'https://github.com/Obsarian/Audio-Description-of-Videos',
      paper: 'https://ieeexplore.ieee.org/document/10544216',
      tag: 'Published in IEEE 2024'
    },
    {
      title: 'HerWay - Urban Analytics Research',
      description: 'Urban analytics research project analyzing community narratives, Chicago 311 service data, and crime data to identify neighborhood awareness patterns. Built with NLP and AI for narrative extraction, featuring an interactive map and chatbot interface to help users explore insights about different areas.',
      tech: ['Python', 'NLP', 'AI', 'NLTK', 'spaCy', 'Urban Analytics', 'Data Visualization', 'Chatbot'],
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4',
      tag: 'SoReMo Fellowship'
    },
    {
      title: 'ForeQuest - Volatility Forecasting App',
      description: 'Financial forecasting platform combining GARCH and Monte Carlo methods, achieving ~85% R² and <0.02 MAE in volatility prediction. Integrated LangChain for interpretable forecast summaries and automated decision support.',
      tech: ['Python', 'Streamlit', 'GARCH', 'Monte Carlo', 'yFinance', 'LangChain', 'Time Series'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      github: 'https://github.com/mishrasharanya/Forequest-Forecast',
      tag: 'Live on Streamlit'
    },
    {
      title: 'Shoe Classification & Generator System',
      description: 'CNN model for multiclass shoe classification achieving 92% accuracy and F1-score of 0.87. Implemented GAN to generate realistic shoe designs, expanding dataset for creative design exploration.',
      tech: ['Python', 'PyTorch', 'CNN', 'GAN', 'Deep Learning', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
      github: 'https://github.com/mishrasharanya/Shoe-Classification-using-CNN-and-GAN',
      tag: 'Deep Learning'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">MY WORK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-400 text-black text-xs font-bold">
                  {project.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300 group/link"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 group/link"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
