"use client";
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"
import { TeamSection } from "@/components/team-section"
import { HistorySection } from "@/components/history-section"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

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

      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{
              y: imageY,
              opacity: imageOpacity
            }}
          >
            <Image
              src="https://images.pexels.com/photos/6646899/pexels-photo-6646899.jpeg"
              alt="Team working together at Evelyn Oweibo Foundation"
              fill
              className="object-cover object-center"
              priority
              quality={90}
              sizes="100vw"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
          
          <motion.div 
            className="container relative z-10 h-full flex flex-col items-center justify-center text-center"
            style={{ opacity: contentOpacity }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Learn about our mission, history, and the team behind the Evelyn Oweibo Foundation
            </p>
          </motion.div>
        </section>

        <AboutContent />
        <HistorySection />
        <TeamSection />
      </main>
    </div>
  )
}
