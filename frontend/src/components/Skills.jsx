import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Brain, BarChart3, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'SQL', 'R', 'JavaScript', 'React', 'Node.js', 'FastAPI', 'C++']
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'LangChain', 'LangGraph', 'Multi-Agent Systems', 'Computer Vision']
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      skills: ['Statistical Analysis', 'Feature Engineering', 'A/B Testing', 'Predictive Modeling', 'Data Cleaning', 'Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'TensorFlow']
    },
    {
      icon: BarChart3,
      title: 'Forecasting & Optimization',
      skills: ['Time Series', 'ARIMA', 'SARIMA', 'GARCH', 'Monte Carlo', 'Optimization', 'AMPL', 'NEOS', 'Model Validation']
    },
    {
      icon: Cloud,
      title: 'Data Engineering & Cloud',
      skills: ['ETL Pipelines', 'PySpark', 'Hadoop', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Git', 'GitHub']
    },
    {
      icon: GitBranch,
      title: 'LLM Infrastructure & Deployment',
      skills: ['ChromaDB', 'Vector Search', 'Sentence Transformers', 'OpenAI API', 'Groq', 'REST APIs', 'OAuth 2.0', 'Google APIs', 'Streamlit', 'Vercel']
    },
    {
      icon: BarChart3,
      title: 'Visualization & Business Intelligence',
      skills: ['Tableau', 'Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'Excel', 'Dashboard Design', 'Data Storytelling']
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">
              TECHNICAL EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-16">
            SKILLS & <span className="text-cyan-400">TECHNOLOGIES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-5 sm:p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 group-hover:bg-cyan-400 transition-all duration-300">
                    <Icon className="text-cyan-400 group-hover:text-black transition-colors" size={24} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;