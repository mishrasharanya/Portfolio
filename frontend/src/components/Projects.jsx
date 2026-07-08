import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
<<<<<<< HEAD
      title: 'HerWay - Urban Analytics Platform',
      description:
        'Built a multi-source urban analytics platform combining 1,000+ Reddit community posts, 150k+ Chicago 311 service requests, and crime datasets across 77 Chicago neighborhoods. Developed NLP pipelines, an interactive Leaflet-based map, and an AI-powered chatbot for neighborhood insights.',
      tech: ['Python', 'React', 'Leaflet', 'OpenAI API', 'spaCy', 'NLP', 'Data Visualization', 'Chatbot'],
=======
      title: 'InsightAI - Production RAG Agent',
      description:
        'Production-style 4-agent RAG system for Google Workspace with semantic retrieval, grounded responses, confidence scoring, PII redaction, and OAuth-based access. Deployed using Vercel, Render, Supabase pgvector, and Groq/Llama.',
      tech: ['React', 'FastAPI', 'Supabase', 'pgvector', 'Groq', 'Llama', 'OAuth 2.0', 'Python'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      github: 'https://github.com/mishrasharanya/Insight--AI-agent',
      demo: 'https://insight-ai-agent-phi.vercel.app/',
      tag: 'Agentic AI'
    },
    {
      title: 'HerWay - Urban Analytics Research',
      description:
        'Urban analytics research project analyzing community narratives, 150k+ Chicago 311 service requests, and crime data across 77 neighborhoods. Built with NLP and OpenAI-powered analysis, featuring an interactive map and chatbot interface for neighborhood insights.',
      tech: ['Python', 'React', 'Leaflet', 'OpenAI API', 'NLP', 'spaCy', 'Urban Analytics', 'Chatbot'],
>>>>>>> df70a5bd (updating projects)
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4',
      github: 'https://github.com/mishrasharanya/HerWay-Soremo',
      demo: 'https://her-way-soremo.vercel.app/',
      tag: 'SoReMo Fellowship'
    },
    {
      title: 'ForeQuest - AI-Powered Financial Forecasting Platform',
      description:
<<<<<<< HEAD
        'Built an end-to-end financial forecasting platform combining ARIMA, GARCH, Monte Carlo simulation, and option pricing models with an AI-powered financial assistant. Integrated Groq-hosted LLMs to generate forecast explanations, volatility insights, risk analysis, and interactive question-answering, transforming quantitative outputs into actionable investment insights through a deployed Streamlit application.',
      tech: [
        'Python',
        'Streamlit',
        'GARCH',
        'Monte Carlo',
        'Groq',
        'LLMs',
        'Financial Analytics',
        'Time Series'
      ],
=======
        'Financial forecasting platform combining ARIMA, GARCH, Monte Carlo simulation, option pricing, and Groq-hosted LLMs. Achieved ~85% R² and <0.02 MAE in volatility prediction while delivering explainable market insights through a deployed Streamlit app.',
      tech: ['Python', 'Streamlit', 'GARCH', 'Monte Carlo', 'Groq', 'LLMs', 'yFinance', 'Time Series'],
>>>>>>> df70a5bd (updating projects)
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      github: 'https://github.com/mishrasharanya/Forequest-Forecast_Smarter',
      demo: 'https://forequest.streamlit.app/',
      tag: 'AI + Financial Analytics'
    },
    {
<<<<<<< HEAD
      title: 'OptiWeb - Trajectory Optimization Platform',
      description:
        'Led development of a browser-based robotics trajectory optimization platform that generates solver-ready AMPL models. Built support for robot systems, custom constraints, Runge-Kutta methods, NEOS solver workflows, and benchmarking across 50+ optimization solvers. Presented at the Midwest Robotics Workshop.',
      tech: ['React', 'Node.js', 'AMPL', 'NEOS', 'Robotics', 'Optimization', 'JavaScript', 'LLMs'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      tag: 'Midwest Robotics Workshop'
    },
    {
      title: 'Audio Description for the Visually Impaired',
      description:
        'Developed a real-time video captioning pipeline using YOLO, ResNet-35, and Google Text-to-Speech to generate audio descriptions for visually impaired users. Combined object detection and action recognition to improve scene understanding and achieved a BLEU score of 0.7.',
=======
      title: 'Audio Description for the Visually Impaired',
      description:
        'Deep learning pipeline generating real-time voice captions from videos, achieving BLEU score 0.7. Combined object and action recognition models using YOLO and ResNet-35 to enhance video accessibility.',
>>>>>>> df70a5bd (updating projects)
      tech: ['Python', 'PyTorch', 'YOLO', 'ResNet-35', 'Google TTS API', 'Computer Vision'],
      image: 'https://images.unsplash.com/photo-1680783954745-3249be59e527',
      github: 'https://github.com/Obsarian/Audio-Description-of-Videos_Capstone',
      paper: 'https://ieeexplore.ieee.org/document/10544216',
<<<<<<< HEAD
      tag: 'IEEE Publication'
    }
=======
      tag: 'Published in IEEE 2024'
    },
    {
      title: 'OptiWeb - Trajectory Optimization Platform',
      description:
        'Browser-based robotics trajectory optimization platform for automated model generation and reproducible experimentation. Implemented cart-pole, five-link biped, and quadruped benchmarks while evaluating convergence across 50+ NEOS solver configurations.',
      tech: ['React', 'Node.js', 'AMPL', 'NEOS', 'Robotics', 'Optimization', 'JavaScript', 'LLMs'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      tag: 'Midwest Robotics Workshop'
    },
    {
      title: 'Shoe Classification & Generator System',
      description:
        'CNN model for multiclass shoe classification achieving 92% accuracy and F1-score of 0.87. Implemented GAN to generate realistic shoe designs, expanding dataset for creative design exploration.',
      tech: ['Python', 'PyTorch', 'CNN', 'GAN', 'Deep Learning', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
      github: 'https://github.com/mishrasharanya/Shoe-Classification-using-CNN-and-GAN',
      tag: 'Deep Learning'
    },
>>>>>>> df70a5bd (updating projects)
  ];


  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">MY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-16">
            FEATURED <span className="text-cyan-400">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-cyan-400 text-black text-[10px] sm:text-xs font-bold">
                  {project.tag}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </a>
                  )}

                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
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