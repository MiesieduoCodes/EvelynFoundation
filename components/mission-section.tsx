"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Heart, Users, Utensils, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import React from "react"

const missions: {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
}[] = [
  {
    title: "Dignified Care",
    description:
      "Delivering compassionate care that upholds the dignity and independence of every senior citizen.",
    icon: "Heart",
    image: "/images/DSC_0419.jpg",
  },
  {
    title: "Connecting Communities",
    description:
      "Fostering vibrant communities where seniors can build lasting relationships and overcome feelings of loneliness.",
    icon: "Users",
    image: "/images/DSC_0377.JPG",
  },
  {
    title: "Nutritional Support",
    description: "Ensuring seniors have access to healthy meals and nutrition education to enhance their well-being.",
    icon: "Utensils",
    image: "/images/DSC_4607.JPG",
  },
  {
    title: "Enhanced Wellbeing",
    description:
      "Implementing initiatives that promote the physical, mental, and emotional health of seniors.",
    icon: "Award",
    image: "/images/DSC_0327.JPG",  
  },
];

const iconMap = {
  Heart,
  Users,
  Utensils,
  Award,
};

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="bg-gradient-to-b from-muted to-white py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
            Our Mission
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to enhancing the quality of life for elderly individuals through compassionate care and community support.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      {React.createElement(iconMap[mission.icon], { className: "h-6 w-6 text-primary" })}
                    </div>
                    <CardTitle className="text-lg">{mission.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-foreground/80">
                    {mission.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}