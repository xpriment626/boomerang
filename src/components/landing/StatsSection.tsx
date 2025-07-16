'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '200+',
    label: 'Fashion Retailers',
    description: 'Trust Boomerang with their returns'
  },
  {
    number: '10M+',
    label: 'Returns Processed',
    description: 'Through our AI platform'
  },
  {
    number: '80%',
    label: 'Time Reduction',
    description: 'In processing workflows'
  },
  {
    number: '$50M+',
    label: 'Fraud Prevented',
    description: 'Saved for our customers'
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xl font-semibold mb-1 text-blue-100">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}