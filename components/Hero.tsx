'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Download, GraduationCap, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme, setTheme } = useTheme()
  const [userCount, setUserCount] = useState(10000)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setUserCount(prevCount => prevCount + Math.floor(Math.random() * 10))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = theme === 'dark'

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Rest of the component remains the same */}
    </section>
  )
}

export default Hero