'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, BookOpen, Trophy } from 'lucide-react'

const steps = [
  {
    name: 'Upload Materials',
    description: 'Simply upload your study notes, textbooks, or any learning material.',
    icon: Upload,
  },
  {
    name: 'AI Processing',
    description: 'Our AI analyzes your content and generates tailored MCQs.',
    icon: Cpu,
  },
  {
    name: 'Take Quizzes',
    description: 'Answer questions and receive instant feedback to reinforce learning.',
    icon: BookOpen,
  },
  {
    name: 'Track Progress',
    description: 'Monitor your improvement and identify areas for further study.',
    icon: Trophy,
  },
]

const HowItWorks = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary">How It Works</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Four simple steps to smarter studying
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
            Smartify streamlines your learning process, making it easy to create effective study materials.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-background text-lg font-medium">
                The Process
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-4 lg:max-w-none">
            {steps.map((step, index) => (
              <motion.div 
                key={step.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium">{step.name}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks