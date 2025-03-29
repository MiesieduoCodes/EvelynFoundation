"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend or newsletter service

    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    })

    setEmail("")
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
          <p className="mt-4 text-xl text-muted-foreground mb-6">
            Subscribe to our newsletter to receive updates on our programs, events, and ways to get involved.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="mt-2 text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  )
}

