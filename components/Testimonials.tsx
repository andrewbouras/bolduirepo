'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    content: "Smartify has revolutionized the way I study. I've seen a significant improvement in my test scores!",
    author: {
      name: 'Emily Chen',
      role: 'Medical Student',
      image: '/images/testimonials/emily-chen.jpg',
    },
    rating: 5,
  },
  {
    content: "As a teacher, I've found Smartify to be an invaluable tool for creating engaging quizzes for my students.",
    author: {
      name: 'Michael Johnson',
      role: 'High School Teacher',
      image: '/images/testimonials/michael-johnson.jpg',
    },
    rating: 5,
  },
  {
    content: "The AI-generated questions are spot-on. It's like having a personal tutor available 24/7.",
    author: {
      name: 'Sarah Thompson',
      role: 'Law Student',
      image: '/images/testimonials/sarah-thompson.jpg',
    },
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hear from our users
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground">
              Discover how Smartify is transforming the way people learn and study.
            </p>
          </motion.div>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.author.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={48}
                        height={48}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium">{testimonial.author.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials