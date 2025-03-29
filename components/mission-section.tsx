"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Heart, Users, Home, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const missions = [
  {
    title: "Compassionate Care",
    description:
      "Providing personalized care services that respect the dignity and independence of every elderly individual.",
    icon: Heart,
    image: "https://images.pexels.com/photos/7551677/pexels-photo-7551677.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Community Building",
    description:
      "Creating supportive communities where elderly individuals can form meaningful connections and combat isolation.",
    icon: Users,
    image: "https://images.pexels.com/photos/8815226/pexels-photo-8815226.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Safe Housing",
    description: "Ensuring elderly individuals have access to safe, comfortable, and affordable housing options.",
    icon: Home,
    image: "https://images.pexels.com/photos/7578992/pexels-photo-7578992.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Quality of Life",
    description:
      "Developing programs that enhance the physical, mental, and emotional wellbeing of elderly individuals.",
    icon: Award,
    image: "https://images.pexels.com/photos/103127/pexels-photo-103127.jpeg?auto=compress&cs=tinysrgb&w=600",  
  },
]

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
            We are committed to enhancing the quality of life for elderly individuals through compassionate care and
            community support.
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
                      <mission.icon className="h-6 w-6 text-primary" />
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