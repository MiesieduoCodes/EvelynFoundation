"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Users, BookOpen, Activity, Coffee } from "lucide-react"

const programs = [
  {
    title: "Home Care Services",
    description:
      "Personalized care services provided in the comfort of the elderly individual's home, including assistance with daily activities, medication management, and companionship.",
    icon: Home,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Community Centers",
    description:
      "Vibrant community spaces where elderly individuals can participate in social activities, educational programs, and wellness initiatives designed to combat isolation and promote active aging.",
    icon: Users,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Educational Workshops",
    description:
      "Informative workshops on topics relevant to elderly individuals, such as health management, financial planning, technology use, and creative pursuits to support lifelong learning.",
    icon: BookOpen,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Wellness Programs",
    description:
      "Comprehensive wellness programs including exercise classes, nutrition guidance, and preventive health services tailored to the unique needs of elderly individuals.",
    icon: Activity,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Caregiver Support",
    description:
      "Resources, training, and respite services for family caregivers to help them provide the best possible care for their elderly loved ones while maintaining their own well-being.",
    icon: Heart,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Social Events",
    description:
      "Regular social gatherings, celebrations, and outings that provide opportunities for elderly individuals to form meaningful connections and enjoy shared experiences.",
    icon: Coffee,
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function ProgramsList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <program.icon className="h-5 w-5 text-primary" />
                    <CardTitle>{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

