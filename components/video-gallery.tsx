"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronRight, ChevronLeft, Loader2, Play } from "lucide-react"
import { database } from "@/lib/firebase"
import { ref as dbRef, onValue } from "firebase/database"

interface GalleryVideo {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  createdAt?: number
}

const ITEMS_PER_PAGE = 6

export function VideoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [galleryVideos, setGalleryVideos] = useState<GalleryVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch videos from Firebase
  useEffect(() => {
    const videosRef = dbRef(database, "galleryVideos")

    const unsubscribe = onValue(
      videosRef,
      (snapshot) => {
        try {
          const data = snapshot.val()
          if (data) {
            const videosArray = Object.keys(data)
              .map((key) => {
                const item = data[key]
                return {
                  id: key,
                  title: item.title || "",
                  description: item.description || "",
                  videoUrl: item.videoUrl || "",
                  thumbnailUrl: item.thumbnailUrl || "",
                  createdAt: item.createdAt || Date.now(),
                }
              })
              .filter((video) => video.videoUrl) // Filter out videos with empty URLs

            setGalleryVideos(videosArray.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)))
          } else {
            setGalleryVideos([])
          }
          setLoading(false)
        } catch (err) {
          console.error("Error fetching gallery videos:", err)
          setError("Failed to load gallery videos. Please try again later.")
          setLoading(false)
        }
      },
      (error) => {
        console.error("Firebase error:", error)
        setError("Failed to connect to video gallery. Please check your connection.")
        setLoading(false)
      },
    )

    return () => unsubscribe()
  }, [])

  const totalPages = Math.ceil(galleryVideos.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const displayedVideos = galleryVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Animation triggers
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Reset animation when page changes
  useEffect(() => {
    controls.set("hidden")
    controls.start("visible")
  }, [currentPage, controls])

  const handleNextVideo = () => {
    if (!selectedVideo) return
    const currentIndex = galleryVideos.findIndex((video) => video.id === selectedVideo.id)
    const nextIndex = (currentIndex + 1) % galleryVideos.length
    setSelectedVideo(galleryVideos[nextIndex])
  }

  const handlePreviousVideo = () => {
    if (!selectedVideo) return
    const currentIndex = galleryVideos.findIndex((video) => video.id === selectedVideo.id)
    const previousIndex = (currentIndex - 1 + galleryVideos.length) % galleryVideos.length
    setSelectedVideo(galleryVideos[previousIndex])
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  if (loading) {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
          <p className="mt-4">Loading videos...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-red-500">{error}</p>
          <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      </section>
    )
  }

  if (galleryVideos.length === 0) {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-muted-foreground">No videos found.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20" ref={sectionRef}>
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden cursor-pointer group" onClick={() => setSelectedVideo(video)}>
                <div className="relative aspect-video">
                  <div className="relative w-full h-full">
                    <img
                      src={video.thumbnailUrl || "/placeholder.svg?height=400&width=600"}
                      alt={video.title || "Video thumbnail"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.error(`Thumbnail load failed: ${video.thumbnailUrl}`)
                        const target = e.currentTarget
                        target.src = "/placeholder.svg?height=400&width=600"
                        target.onerror = null
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-medium">{video.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className="w-10 h-10"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        <AnimatePresence>
          {selectedVideo && (
            <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>{selectedVideo.title}</DialogTitle>
                </DialogHeader>
                <div className="relative w-full aspect-video">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-4 rounded-full z-20"
                    onClick={() => setSelectedVideo(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{selectedVideo.description}</p>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" onClick={handlePreviousVideo}>
                      <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                    </Button>
                    <Button variant="outline" onClick={handleNextVideo}>
                      Next <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
