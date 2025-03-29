"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The Evelyn Oweibo Foundation has been a blessing in my life. Their care and support have made my golden years truly golden.",
    name: "Margaret Johnson",
    role: "Program Participant",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Volunteering with the foundation has been one of the most rewarding experiences of my life. The impact we make is truly meaningful.",
    name: "David Thompson",
    role: "Volunteer",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "The foundation's commitment to elderly care is unmatched. Their programs address real needs in our community.",
    name: "Sarah Williams",
    role: "Community Partner",
    avatar: "/images/testimonial-3.jpg",
  },
]

export function TestimonialsSection() {
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
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
            Testimonials
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from those whose lives have been touched by the Evelyn Oweibo Foundation.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
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
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-all bg-white/90 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6 px-6 flex-grow">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <Quote className="h-6 w-6 text-primary mb-4" />
                  </div>
                  <p className="text-lg text-foreground/90 italic font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 pt-4 pb-6 px-6 border-t border-muted/50">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}