"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const milestones = [
  {
    year: "2020",
    title: "Conception in Georgia, USA",
    description: "The Evelyn Oweibo Foundation was conceived in the State of Georgia, USA, laying the groundwork for its future charitable work.",
  },
  {
    year: "April 2021",
    title: "Official Registration",
    description: "Registered with Nigeria's Corporate Affairs Commission (CAC No: 158247) on April 29, 2021.",
  },
  {
    year: "2021",
    title: "First Outreach Programs",
    description: "Began outreach months before formal registration, providing food items (noodles, rice, cooking cubes, oil) and cash assistance to widows, physically challenged individuals, and the poor.",
  },
  {
    year: "2022",
    title: "Expanded Assistance",
    description: "Implemented tailored support programs including small business capital, food aid, and healthcare assistance based on individual needs.",
  },
  {
    year: "2023",
    title: "Community Partnerships",
    description: "Established collaborations with volunteers and like-minded individuals to expand our impact.",
  },
]

const coreValues = [
  {
    title: "Integrity",
    description: "Commitment to truth and honesty in all our undertakings as the foundation for trust and collaboration."
  },
  {
    title: "Accountability",
    description: "Taking responsibility for our decisions and actions that impact human lives and society."
  },
  {
    title: "Humility",
    description: "Giving with humility, recognizing it as a privilege rather than a right."
  },
  {
    title: "Service",
    description: "Viewing service to humanity as a divine duty and service to God."
  }
]

export function HistorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted to-white">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
            Our Story & Values
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            The journey of making a difference in lives and communities
          </p>
        </motion.div>

        {/* History Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Our History</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-amber-300 rounded-full" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    damping: 10
                  }}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"} md:justify-center`}
                >
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-amber-500'} z-10 border-4 border-white`} />
                  <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`font-bold text-xl mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-amber-600'}`}>
                        {milestone.year}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-muted"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground">
              To develop into one of the leading Charity Organizations with international recognition and to bring hope to those we encounter on our journey to make a difference.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-muted"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To provide assistance that would empower the less privileged, poor, physically challenged and the hopeless to become positive members of society and understand that we need one another to build a better world.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-white to-muted/50">
                  <CardContent className="p-6">
                    <div className="text-primary font-bold text-xl mb-3">{value.title}</div>
                    <p className="text-muted-foreground">{value.description}</p>
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