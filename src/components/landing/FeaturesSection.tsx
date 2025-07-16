'use client';

import { motion } from 'framer-motion';
import {
    EyeIcon,
    BoltIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    ClockIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        icon: EyeIcon,
        title: 'AI-Powered Inspection',
        description: 'Computer vision analyzes return condition with 95% accuracy, detecting damage, wear, and authenticity issues instantly.',
        color: 'blue'
    },
    {
        icon: BoltIcon,
        title: 'Automated Processing',
        description: 'High-confidence returns are processed automatically, triggering refunds and inventory updates without human intervention.',
        color: 'indigo'
    },
    {
        icon: ChartBarIcon,
        title: 'Real-time Analytics',
        description: 'Track processing metrics, fraud detection, and cost savings with comprehensive dashboards and exportable reports.',
        color: 'purple'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Fraud Detection',
        description: 'Advanced algorithms identify suspicious patterns and fraudulent returns, protecting your bottom line.',
        color: 'green'
    },
    {
        icon: ClockIcon,
        title: 'Instant Decisions',
        description: 'Process returns in under 3 seconds with AI recommendations and automated routing for edge cases.',
        color: 'orange'
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Cost Optimization',
        description: 'Reduce processing costs by 60% while improving customer satisfaction with faster resolution times.',
        color: 'red'
    }
];

const colorClasses: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-100',
    indigo: 'text-indigo-600 bg-indigo-100',
    purple: 'text-purple-600 bg-purple-100',
    green: 'text-green-600 bg-green-100',
    orange: 'text-orange-600 bg-orange-100',
    red: 'text-red-600 bg-red-100'
};

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Everything You Need to Automate Returns
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        From AI-powered inspection to automated processing, Boomerang handles
                        every aspect of your returns workflow with precision and speed.
                    </motion.p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                        See All Features
                    </button>
                </motion.div>
            </div>
        </section>
    );
}