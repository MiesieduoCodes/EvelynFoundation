"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const stories = [
  {
    quote:
      "The home care services provided by the Evelyn Oweibo Foundation have allowed me to maintain my independence while receiving the support I need. The caregivers are compassionate and professional, and they've become like family to me.",
    name: "Eleanor, 78",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "After my wife passed away, I felt isolated and lonely. The community center became my second home, where I've made new friends and discovered a passion for painting that I never knew I had. It's given me a new lease on life.",
    name: "Robert, 82",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "The caregiver support program has been a lifeline for me as I care for my mother with dementia. The training and respite services have helped me provide better care while also taking care of my own well-being.",
    name: "Maria, 56",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function SuccessStories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from individuals whose lives have been transformed by our programs
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg italic mb-6">{story.quote}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <p className="font-medium">{story.name}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

