import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'InsightAI - Production RAG Agent',
      description:
        'Turn scattered Google Workspace data into answers you can trust. A 4-agent RAG system that routes questions, retrieves evidence and delivers grounded responses with confidence scoring, PII redaction and secure OAuth access.',
      tech: [
        'React',
        'FastAPI',
        'Supabase',
        'pgvector',
        'Groq',
        'Llama',
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
      title: 'HerWay - Urban Analytics Research',
      description:
        'What if neighborhood safety reflected how people actually experience a city? HerWay combines community narratives with 150K+ crime and 311 records across 77 Chicago neighborhoods to surface local patterns through NLP, interactive maps and conversational insights.',
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
      title: 'VulnScope - CVE Intelligence & Severity Prediction',
      description:
        'Spot potentially severe vulnerabilities before structured scoring catches up. VulnScope turns continuously updated CVE data into explainable severity signals, historical evidence and grounded analyst briefs through an end-to-end data, ML and agentic AI pipeline.',
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
      title: 'ForeQuest - AI-Powered Financial Forecasting',
      description:
        'Forecast volatility, price options and understand the reasoning behind the numbers. ForeQuest combines ARIMA, GARCH and Monte Carlo simulation with LLM-powered explanations, achieving ~85% R² and <0.02 MAE in volatility prediction.',
      tech: [
        'Python',
        'Streamlit',
        'GARCH',
        'Monte Carlo',
        'Groq',
        'LLMs',
        'yFinance',
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
        'Making video content more accessible through AI. A multimodal deep-learning pipeline combining object and action recognition with text-to-speech to generate real-time audio descriptions, achieving a 0.70 BLEU score and resulting in an IEEE 2024 publication.',
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
        'Take robotics optimization from solver scripts to the browser. OptiWeb automatically generates optimization models and benchmarks 50+ solver configurations across cart-pole, biped and quadruped systems for faster, reproducible experimentation.',
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
      title: 'Voice AI Travel Planner',
      description:
        'Plan a trip by simply talking to it. A voice-first AI travel agent that turns spoken preferences into personalized itineraries through real-time speech recognition, LLM reasoning and APIs for transit, accessibility and travel context.',
      tech: [
        'Python',
        'FastAPI',
        'ElevenLabs',
        'Groq',
        'LLMs',
        'Speech-to-Text',
        'Text-to-Speech',
        'REST APIs'
      ],
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
      github:
        'https://github.com/lulu-chenyang/conversation-to-itinerary',
      tag: 'Hackathon Best Idea'
    },

    {
      title: 'Shoe Classification & Generator System',
      description:
        'From recognizing shoes to designing new ones. A deep-learning system combining a CNN with 92% classification accuracy and a GAN that generates new shoe designs for data augmentation and creative exploration.',
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
                      <span className="text-sm font-medium">
                        Code
                      </span>
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
                      <span className="text-sm font-semibold">
                        Live Demo
                      </span>
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