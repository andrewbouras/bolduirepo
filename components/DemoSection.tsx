'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('upload')

  const steps = [
    { id: 'upload', title: 'Upload Materials' },
    { id: 'generate', title: 'Generate Questions' },
    { id: 'quiz', title: 'Take Quiz' },
    { id: 'results', title: 'View Results' },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">See Smartify in Action</h2>
          <p className="text-xl text-muted-foreground">Experience how easy it is to transform your study materials into interactive quizzes.</p>
        </motion.div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                {steps.map((step) => (
                  <TabsTrigger key={step.id} value={step.id}>{step.title}</TabsTrigger>
                ))}
              </TabsList>
              <div className="mt-8">
                <TabsContent value="upload">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Upload Your Study Materials</h3>
                    <p className="mb-4">Simply drag and drop your PDF, Word documents, or text files to get started.</p>
                    <Button>Upload Files</Button>
                  </motion.div>
                </TabsContent>
                <TabsContent value="generate">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">AI-Powered Question Generation</h3>
                    <p className="mb-4">Our advanced AI analyzes your content and creates relevant multiple-choice questions.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-mono">Generating questions... 75% complete</p>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="quiz">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Take Your Personalized Quiz</h3>
                    <p className="mb-4">Answer the AI-generated questions to test your knowledge.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold">Question 1 of 10:</p>
                      <p>What is the capital of France?</p>
                      <div className="mt-2 space-y-2">
                        <Button variant="outline" className="w-full justify-start">A. London</Button>
                        <Button variant="outline" className="w-full justify-start">B. Berlin</Button>
                        <Button variant="outline" className="w-full justify-start">C. Paris</Button>
                        <Button variant="outline" className="w-full justify-start">D. Madrid</Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="results">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">View Your Results</h3>
                    <p className="mb-4">See your score and get detailed explanations for each question.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold mb-2">Your Score: 8/10</p>
                      <p>Great job! You've mastered 80% of the material. Here are some areas to focus on:</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>European Geography</li>
                        <li>Historical Dates</li>
                      </ul>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default DemoSection