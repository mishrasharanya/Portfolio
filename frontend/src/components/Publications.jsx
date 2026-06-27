import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink, Award } from 'lucide-react';

const Publications = () => {
  const publicationsRef = useRef(null);
  const certificationsRef = useRef(null);
  const isPublicationsInView = useInView(publicationsRef, { once: true, margin: '-100px' });
  const isCertificationsInView = useInView(certificationsRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* Publications Section */}
      <section id="publications" ref={publicationsRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPublicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
              <span className="text-cyan-400 font-semibold text-sm tracking-wide">RESEARCH</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              <span className="text-cyan-400">PUBLICATIONS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPublicationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 group-hover:bg-cyan-400 transition-all duration-300">
                <FileText className="text-cyan-400 group-hover:text-black transition-colors" size={28} />
              </div>
              <div className="flex-1">
                <div className="px-3 py-1 bg-cyan-400 text-black text-xs font-bold inline-block mb-3">
                  IEEE 2024
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Audio Description for the Visually Impaired
                </h3>
                <p className="text-gray-400 mb-4">
                  Published research on deep learning pipeline for generating real-time voice captions from videos, 
                  combining object detection (YOLO) and action recognition (ResNet-35) to enhance video accessibility.
                </p>
                <a
                  href="https://ieeexplore.ieee.org/document/10544216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300 group/link"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="group-hover/link:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" ref={certificationsRef} className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCertificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-none mb-6">
              <span className="text-cyan-400 font-semibold text-sm tracking-wide">ACHIEVEMENTS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              CERTIFICATIONS & <span className="text-cyan-400">FELLOWSHIPS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCertificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Award className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Advanced Computer Vision with TensorFlow</h4>
                  <p className="text-gray-400 text-sm mb-2">DeepLearning.AI via Coursera • 2025</p>
                  <p className="text-gray-300 text-sm">Advanced training in computer vision techniques, model architectures, and deployment strategies.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCertificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Award className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">AI Applied Data Science Specialization</h4>
                  <p className="text-gray-400 text-sm mb-2">IBM • 2022</p>
                  <p className="text-gray-300 text-sm">Comprehensive specialization covering machine learning, data analysis, and applied AI techniques.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isCertificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-cyan-400/10 border border-cyan-400/30 p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <Award className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">SoReMo Fellowship - HerWay Project</h4>
                  <p className="text-gray-400 text-sm mb-2">Urban Analytics Research Fellowship</p>
                  <p className="text-gray-300 text-sm">Selected for fellowship focusing on NLP-driven community awareness analytics and urban insights exploration.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
