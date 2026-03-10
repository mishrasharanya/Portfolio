import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Research Assistant Lead',
      company: 'Illinois Institute of Technology',
      location: 'Chicago, IL',
      period: 'January 2025 - Present',
      description: [
        'Leading development of reproducible, solver-agnostic trajectory optimization platform for robotics',
        'Benchmarking across 50+ NEOS solvers to identify optimal performance configurations',
        'Improved simulation speed by ~30% through algorithm optimization and parallel processing',
        'Integrated LLM-driven adaptive optimization for enhanced model evaluation and decision support'
      ]
    },
    {
      title: 'Data Classification - Spring Intern',
      company: 'Aptos Retail',
      location: 'Remote',
      period: 'January 2024 - July 2024',
      description: [
        'Created 15+ data integrity rules improving reporting accuracy to 95%',
        'Collaborated with 5+ cross-functional teams to automate data classification workflows',
        'Reduced manual data processing effort by 40% through intelligent automation',
        'Developed Python-based validation pipelines for retail data quality assurance'
      ]
    },
    {
      title: 'Data Analyst Summer Intern (Risk Advisory)',
      company: 'Deloitte Touche Tohmatsu LLC',
      location: 'India',
      period: 'June 2023 - August 2023',
      description: [
        'Automated anomaly detection in 7+ client datasets using Python and SQL',
        'Developed Excel dashboards to support risk advisory decisions for enterprise clients',
        'Conducted statistical analysis to identify fraud patterns and compliance risks',
        'Collaborated with senior consultants on data-driven risk assessment frameworks'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'Capgemini',
      location: 'India',
      period: 'June 2022 - August 2022',
      description: [
        'Developed SQL-based analytics pipelines for client reporting systems',
        'Created interactive Tableau dashboards enhancing client reporting efficiency',
        'Performed data cleaning and transformation on large-scale enterprise datasets',
        'Supported migration of legacy reporting systems to modern BI platforms'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
            <span className="text-cyan-400 font-semibold text-sm tracking-wide">MY JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            WORK <span className="text-cyan-400">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-cyan-400/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                <div className="absolute left-0 md:left-8 top-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-[7px] border-4 border-[#0A0A0A]"></div>

                <div className="bg-white/5 border border-white/10 p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-3">
                        <span className="text-cyan-400 mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
