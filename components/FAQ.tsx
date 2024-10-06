'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Smartify generate questions?",
    answer: "Smartify uses advanced AI algorithms to analyze your study materials and generate relevant multiple-choice questions. Our system understands context and key concepts to create questions that effectively test your knowledge."
  },
  {
    question: "Can I use Smartify for any subject?",
    answer: "Yes! Smartify is designed to work with a wide range of subjects, from sciences and humanities to professional certifications. Our AI adapts to the content you provide, making it versatile for various fields of study."
  },
  {
    question: "How accurate are the generated questions?",
    answer: "Smartify's questions are highly accurate, thanks to our sophisticated AI and continuous learning algorithms. However, we always recommend reviewing the generated questions to ensure they align with your specific study goals."
  },
  {
    question: "Can I customize the difficulty of the questions?",
    answer: "Absolutely! Smartify allows you to adjust the difficulty level of generated questions. You can set it to match your current knowledge level or challenge yourself with more advanced questions as you progress."
  },
  {
    question: "Is my study material kept confidential?",
    answer: "Yes, we take your privacy seriously. All uploaded study materials are encrypted and used solely for generating questions for your personal use. We never share your content with third parties."
  }
]

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about Smartify</p>
        </motion.div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ