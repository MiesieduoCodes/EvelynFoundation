"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { useEffect, useRef } from "react"

export default function GalleryPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  // Fade-in animation for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col" ref={targetRef}>
      <motion.header 
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        style={{ y: headerY }}
      >
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="outline">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 overflow-hidden">
        <motion.section 
          className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background"
          style={{ opacity }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-[url('/images/gallery-bg.jpg')] bg-cover bg-center"
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
                y: useTransform(scrollYProgress, [0, 1], [0, 100])
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
          </div>
          
          <motion.div 
            className="container relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Capturing moments from our events, programs, and community activities
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          className="py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <motion.div variants={itemVariants} className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Activities
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Browse through our collection of memorable moments
              </p>
            </motion.div>

            <motion.div variants={itemVariants} style={{ y: contentY }}>
              <GalleryGrid />
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-gradient-to-b from-background to-primary/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Want to see more?
            </h2>
            <Button asChild size="lg" className="rounded-full">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}