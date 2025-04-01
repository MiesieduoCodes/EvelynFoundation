"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Evelyn Oweibo",
    role: "Founder",
    bio: "Evelyn Oweibo, born on February 20, 1979, in Lagos, Nigeria, is an accountant and founder of the Evelyn Oweibo Foundation. A graduate of Rivers State Polytechnic, she has worked with the Bayelsa State Council for Arts and Culture and started several businesses. Passionate about helping others, she established her foundation in 2021 to support the less privileged. Currently residing in the USA, she remains committed to inspiring hope.",
    image: "/images/Mrs_Evelyn.jpeg",
  },
  {
    name: "Solomon Diepreye",
    role: "Medical Director",
    bio: "A public administration professional with degrees in Political Science and Peace Studies. Former Human Resources Manager at Bayelsa State Tourism, now Senior Assistant Registrar at Bayelsa Medical University. Trustee and Secretary of the Foundation.",
    image: "/images/Mr_Solomon.jpeg",
  },
]

export function TeamSection() {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals behind the Evelyn Oweibo Foundation
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-80">
                    <Image 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-2 text-muted-foreground line-clamp-4">
                      {member.bio}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-4 pt-0">
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}