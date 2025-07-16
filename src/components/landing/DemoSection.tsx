'use client';

import { motion } from 'framer-motion';
import { PlayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const demoSteps = [
  {
    step: 1,
    title: 'Upload Return Images',
    description: 'Customer submits return with product photos',
    time: '0s'
  },
  {
    step: 2,
    title: 'AI Analysis',
    description: 'Computer vision analyzes condition and authenticity',
    time: '2s'
  },
  {
    step: 3,
    title: 'Automated Decision',
    description: 'System approves, rejects, or flags for manual review',
    time: '3s'
  },
  {
    step: 4,
    title: 'Process Complete',
    description: 'Refund issued and inventory updated automatically',
    time: '3s'
  }
];

export default function DemoSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startDemo = () => {
    setIsPlaying(true);
    setActiveStep(0);
    
    // Simulate the demo progression
    const intervals = [0, 1000, 2000, 3000];
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setActiveStep(index);
        if (index === intervals.length - 1) {
          setTimeout(() => setIsPlaying(false), 1000);
        }
      }, delay);
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Demo interface */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mock dashboard interface */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm font-mono">boomerang.ai/dashboard</div>
              </div>

              {/* Dashboard content */}
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Return #R-2024-001</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    activeStep >= 3 ? 'bg-green-100 text-green-800' : 
                    activeStep >= 1 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {activeStep >= 3 ? 'Approved' : activeStep >= 1 ? 'Processing' : 'Pending'}
                  </span>
                </div>

                {/* Product info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">IMG</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Designer Jacket</div>
                    <div className="text-sm text-gray-500">SKU: DJ-001-BLK-M</div>
                    <div className="text-sm text-gray-500">$299.00</div>
                  </div>
                </div>

                {/* AI Analysis */}
                {activeStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 rounded-lg p-4 mb-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-900">AI Analysis</span>
                      <span className="text-sm text-blue-600">95% Confidence</span>
                    </div>
                    <div className="text-sm text-blue-800">
                      Condition: Like New • No damage detected • Authentic
                    </div>
                  </motion.div>
                )}

                {/* Decision */}
                {activeStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 rounded-lg p-4 flex items-center"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-900">
                      Full refund approved • $299.00 processed
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Play button overlay */}
            {!isPlaying && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={startDemo}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
              >
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <PlayIcon className="w-8 h-8 text-blue-600 ml-1" />
                </div>
              </motion.button>
            )}
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              See Boomerang in Action
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch how our AI processes a typical return in under 3 seconds, 
              from image upload to automated refund processing.
            </p>

            {/* Demo steps */}
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: activeStep >= index ? 1 : 0.5,
                    scale: activeStep === index ? 1.02 : 1
                  }}
                  className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeStep >= index 
                      ? 'border-blue-200 bg-blue-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
                    activeStep >= index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {activeStep > index ? '✓' : step.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    <div className="text-sm text-gray-600">{step.description}</div>
                  </div>
                  <div className="text-sm font-mono text-gray-500">{step.time}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={startDemo}
                disabled={isPlaying}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                {isPlaying ? 'Running Demo...' : 'Run Interactive Demo'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}