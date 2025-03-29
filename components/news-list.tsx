"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

// Sample news data
const newsItems = [
  {
    id: "1",
    title: "Annual Charity Gala Raises Record Funds for Elderly Care",
    excerpt:
      "Our annual charity gala was a tremendous success, raising over $100,000 to support our programs for elderly individuals in need.",
    date: new Date(2023, 10, 15),
    category: "Event",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "2",
    title: "New Community Center Opening Next Month",
    excerpt:
      "We're excited to announce the opening of our third community center, which will serve the eastern part of the city and provide essential services to elderly residents.",
    date: new Date(2023, 11, 5),
    category: "News",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "3",
    title: "Volunteer Appreciation Week Celebrates Dedicated Helpers",
    excerpt:
      "During our annual Volunteer Appreciation Week, we recognized the incredible contributions of over 200 volunteers who donated their time and talents to support our mission.",
    date: new Date(2023, 9, 22),
    category: "News",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "4",
    title: "Health and Wellness Workshop Series Launches",
    excerpt:
      "Our new monthly workshop series focuses on health and wellness topics specifically relevant to elderly individuals, including nutrition, exercise, and mental health.",
    date: new Date(2023, 8, 10),
    category: "Event",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "5",
    title: "Foundation Receives Community Impact Award",
    excerpt:
      "The Evelyn Oweibo Foundation was honored with the prestigious Community Impact Award in recognition of our outstanding contributions to elderly care and support.",
    date: new Date(2023, 7, 28),
    category: "News",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "6",
    title: "Holiday Gift Drive for Isolated Seniors",
    excerpt:
      "Join our annual holiday gift drive to bring joy and comfort to elderly individuals who may be isolated or alone during the holiday season.",
    date: new Date(2023, 11, 1),
    category: "Event",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function NewsList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const filteredNews = filter === "All" ? newsItems : newsItems.filter((item) => item.category === filter)

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button variant={filter === "All" ? "default" : "outline"} onClick={() => setFilter("All")}>
            All
          </Button>
          <Button variant={filter === "News" ? "default" : "outline"} onClick={() => setFilter("News")}>
            News
          </Button>
          <Button variant={filter === "Event" ? "default" : "outline"} onClick={() => setFilter("Event")}>
            Events
          </Button>
        </div>

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
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Badge variant={item.category === "Event" ? "secondary" : "default"}>{item.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{format(item.date, "MMMM d, yyyy")}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/news/${item.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Button>Load More</Button>
        </div>
      </div>
    </section>
  )
}

