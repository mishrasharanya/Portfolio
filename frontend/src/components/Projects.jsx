
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  const projects = [
    {
      title: 'InsightAI - Multi-Agent RAG Platform',
      description:
        'Built a 4-agent RAG platform that connects Google Drive and Calendar through OAuth 2.0. Implemented semantic retrieval with pgvector, context-aware query routing, confidence scoring and PII redaction to generate grounded responses from personal workspace data.',
      tech: [
        'React',
        'FastAPI',
        'Supabase',
        'pgvector',
        'RAG',
        'Groq',
        'OAuth 2.0',
        'Python'
      ],
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      github:
        'https://github.com/mishrasharanya/Insight--AI-agent',
      demo:
        'https://insight-ai-agent-phi.vercel.app/',
      tag: 'Agentic AI'
    },

    {
      title: 'HerWay - Urban Safety Analytics',
      description:
        'Built a neighborhood analytics platform using 150K+ crime and 311 records alongside 1,000+ community posts across 77 Chicago neighborhoods. Developed data cleaning, geographic mapping and NLP workflows to identify neighborhood-level safety patterns and make the results accessible through interactive maps and conversational Q&A.',
      tech: [
        'Python',
        'React',
        'Leaflet',
        'OpenAI API',
        'NLP',
        'spaCy',
        'Urban Analytics',
        'Chatbot'
      ],
      image:
        'https://images.unsplash.com/photo-1674027444485-cec3da58eef4',
      github:
        'https://github.com/mishrasharanya/HerWay-Soremo',
      demo:
        'https://her-way-soremo.vercel.app/',
      tag: 'SoReMo Fellowship'
    },
    {
      title: 'SayAway - Voice AI Travel Planner',
      description:
        'Built a voice-based travel planner that converts natural group conversations into structured itineraries. Integrated VAD for speech detection, local Whisper for transcription, Llama via Ollama for extracting travel preferences and Zod for schema validation. Added browser-based TTS, nearby place recommendations, distance calculations and Stay22 accommodation search without relying on paid AI inference APIs.',
      tech: [
        'Python',
        'Whisper',
        'Llama',
        'Ollama',
        'VAD',
        'Zod',
        'Browser TTS',
        'Stay22',
        'Local AI'
      ],
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
      github:
        'https://github.com/mishrasharanya/SayAway',
      demo:
        'https://www.loom.com/share/ce0fb83cbeb248a189956ae692fe2348',
      tag: 'Hackathon Best Use Case'
    },

    {
      title: 'VulnScope - CVE Severity Prediction',
      description:
        'Built a CVE intelligence pipeline combining vulnerability data processing, severity prediction and model explainability. Evaluated the model on 45,198 unseen 2025 CVEs, achieving 80.5% recall, 0.708 F1 and 0.764 PR-AUC. Added an evidence-grounded analyst agent to investigate vulnerabilities and explain predictions.',
      tech: [
        'Python',
        'Machine Learning',
        'Data Engineering',
        'NLP',
        'Explainable AI',
        'RAG',
        'Groq',
        'Streamlit'
      ],
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      github:
        'https://github.com/mishrasharanya/VulnScope',
      demo:
        'https://vulnscope.streamlit.app/',
      tag: 'Security ML + AI'
    },

    {
      title: 'ForeQuest - Financial Forecasting & Option Pricing',
      description:
        'Developed a financial analytics platform combining ARIMA and GARCH models for volatility forecasting with Monte Carlo simulation for option pricing. Achieved ~85% R² and <0.02 MAE in volatility prediction, with interactive visualizations and LLM-generated explanations of forecasting and pricing results.',
      tech: [
        'Python',
        'Streamlit',
        'ARIMA',
        'GARCH',
        'Monte Carlo',
        'Groq',
        'LLMs',
        'Time Series'
      ],
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      github:
        'https://github.com/mishrasharanya/Forequest-Forecast_Smarter',
      demo:
        'https://forequest.streamlit.app/',
      tag: 'Quant + AI'
    },

    {
      title: 'Audio Description for the Visually Impaired',
      description:
        'Developed a multimodal deep-learning pipeline for generating spoken descriptions of video content. Combined YOLO-based object detection, ResNet-based visual feature extraction, action recognition and text-to-speech. Achieved a 0.70 BLEU score, with the research published at IEEE in 2024.',
      tech: [
        'Python',
        'PyTorch',
        'YOLO',
        'ResNet-35',
        'Google TTS API',
        'Computer Vision'
      ],
      image:
        'https://images.unsplash.com/photo-1680783954745-3249be59e527',
      github:
        'https://github.com/Obsarian/Audio-Description-of-Videos_Capstone',
      paper:
        'https://ieeexplore.ieee.org/document/10544216',
      tag: 'Published in IEEE 2024'
    },

    {
      title: 'OptiWeb - Trajectory Optimization Platform',
      description:
        'Built a browser-based platform for generating and solving trajectory optimization models using AMPL and NEOS. Benchmarked 50+ solver configurations across cart-pole, 5-link biped and quadruped systems, making it easier to compare solver performance, manage experiments and reproduce optimization results.',
      tech: [
        'React',
        'Node.js',
        'AMPL',
        'NEOS',
        'Robotics',
        'Optimization',
        'JavaScript',
        'LLMs'
      ],
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      github:
        'https://github.com/mishrasharanya/Optiweb',
      demo:
        'https://optiweb-smoky.vercel.app/index.html',
      tag: 'Robotics + Optimization'
    },

    {
      title: 'Shoe Classification & Generator System',
      description:
        'Trained a CNN for multiclass shoe classification, achieving 92% accuracy and a 0.87 F1 score. Extended the project with a GAN to generate synthetic shoe images, combining image classification and generative modeling for product recognition and design exploration.',
      tech: [
        'Python',
        'PyTorch',
        'CNN',
        'GAN',
        'Deep Learning',
        'Computer Vision'
      ],
      image:
        'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
      github:
        'https://github.com/mishrasharanya/Shoe-Classification-using-CNN-and-GAN',
      tag: 'Deep Learning'
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">
              MY WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-16">
            FEATURED{' '}
            <span className="text-cyan-400">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Project Tag */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-cyan-400 text-black text-[10px] sm:text-xs font-bold">
                  {project.tag}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Project Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">
                        Code
                      </span>
                    </a>
                  )}

                  {/* Live Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">
                        Live Demo
                      </span>
                    </a>
                  )}

                  {/* Research Paper */}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold">
                        Paper
                      </span>
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
