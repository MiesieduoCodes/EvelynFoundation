"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, CalendarHeart, Award } from "lucide-react"

const stats = [
  {
    title: "Elderly Served",
    value: "500+",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Volunteer Hours",
    value: "25,000+",
    icon: Clock,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    title: "Community Programs",
    value: "50+",
    icon: CalendarHeart,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    title: "Years of Service",
    value: "5+",
    icon: Award,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
]

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="bg-gradient-to-b from-white to-muted py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
            Our Impact
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Through the generous support of our donors and volunteers, we have made a significant difference in the
            lives of elderly individuals.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
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
                damping: 10,
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="pb-0">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor} mb-6`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <CardTitle className={`text-5xl font-extrabold ${stat.color} mb-2`}>
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground/90">{stat.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}