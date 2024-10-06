'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, TrendingUp } from 'lucide-react'

const stats = [
  { id: 1, name: 'Active Users', value: '100,000+', icon: Users },
  { id: 2, name: 'Questions Generated', value: '10 Million+', icon: BookOpen },
  { id: 3, name: 'Average Score Improvement', value: '35%', icon: TrendingUp },
]

const Stats = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Trusted by students and educators worldwide
          </h2>
          <p className="mt-3 text-xl text-primary-foreground/80 sm:mt-4">
            Smartify is revolutionizing the way people learn and prepare for exams.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat.id * 0.1 }}
            >
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-foreground/80">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-primary-foreground">
                <div className="flex justify-center items-center">
                  <stat.icon className="h-8 w-8 mr-2" />
                  {stat.value}
                </div>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Stats