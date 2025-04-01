"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const outreachItems = [
    "Noodles", "Rice", "Cooking Cubes", "Salt", 
    "Groundnut Oil", "Tomatoes", "Cash assistance"
  ]

  const galleryImages = [
    "/images/DSC_0390.jpg",
    "/images/DSC_0404.jpg",
    "/images/DSC_0432.jpg",
    "/images/DSC_0446.jpg"
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-muted/50">
      <div className="container">
        {/* Founder Story Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
              About Evelyn Oweibo
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Evelyn Oweibo was born on February 20, 1979 in Lagos State, Nigeria. An accountant by profession, she is an alumna of Elelewon Girls Secondary School, Port Harcourt, and Rivers State Polytechnic, Bori where she earned her certificate in Accountancy.
              </p>
              <p>
                In 2011, she was employed as an accountant with the Bayelsa State Council for Arts and Culture. Her entrepreneurial spirit led her to establish several businesses in Bayelsa State.
              </p>
              <p>
                Evelyn's deep compassion for others motivated her to establish the Evelyn Oweibo Foundation in 2021. Even before its formal creation, she had been a consistent source of hope and encouragement to many across different age groups and circumstances.
              </p>
              <p>
                Currently residing in the United States, Evelyn remains committed to being a beacon of hope to those in need.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/Mrs_Evelyn.jpeg"
              alt="Founder Evelyn Oweibo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>

        {/* Foundation Story Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <Image
              src="/images/DSC_0378.jpg"
              alt="Foundation team helping community members"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">
              Our Foundation Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Evelyn Oweibo Foundation was conceived in Georgia, USA and officially registered with Nigeria's Corporate Affairs Commission on April 29, 2021 (CAC No: 158247).
              </p>
              <p>
                Even before formal registration, the Foundation began its outreach, driven by the urgent need to help the less privileged. We've proudly provided assistance to widows, the physically challenged, and the poor through:
              </p>
              <ul className="grid grid-cols-2 gap-2 my-4">
                {outreachItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Through volunteer support and partnerships, we've addressed diverse needs - from business capital to food aid and healthcare support - recognizing that each situation requires unique solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Outreach Gallery */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Our Outreach in Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`Outreach activity ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary/5 p-8 rounded-xl border border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-primary">Our Approach</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            At Evelyn Oweibo Foundation, we reject a one-size-fits-all approach. We carefully assess each individual's circumstances to provide tailored assistance that truly empowers and transforms lives. Our work is guided by the belief that everyone deserves dignity and the opportunity to thrive.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    <path d="M8.5 8.5v.01"></path>
                    <path d="M16 15.5v.01"></path>
                    <path d="M12 12v.01"></path>
                    <path d="M11 17v.01"></path>
                    <path d="M7 14v.01"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Personalized Support</h4>
                <p className="text-muted-foreground">Custom solutions for each individual's unique challenges</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Community Network</h4>
                <p className="text-muted-foreground">Leveraging volunteers and partners to maximize impact</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-primary">Sustainable Help</h4>
                <p className="text-muted-foreground">Providing both immediate relief and long-term solutions</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}