"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32 md:flex-row">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-start gap-4 md:w-1/2"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Caring for our <span className="text-primary">Elderly</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            The Evelyn Oweibo Foundation is dedicated to improving the lives of elderly individuals through
            compassionate care, community support, and innovative programs.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="/gallery">Explore</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/about">About Us</a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative h-[300px] w-full md:h-[400px] md:w-1/2 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/DSC_0401.jpg"
            alt="Elderly people enjoying community activities"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

