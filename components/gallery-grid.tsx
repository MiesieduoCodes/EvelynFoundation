"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronRight, ChevronLeft, Loader2 } from "lucide-react"
import { database } from "@/lib/firebase"
import { ref as dbRef, onValue } from "firebase/database"

interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
  createdAt?: number
}

const ITEMS_PER_PAGE = 6

export function GalleryGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch images from Firebase
  useEffect(() => {
    const galleryRef = dbRef(database, 'galleryImages')
    
    const unsubscribe = onValue(galleryRef, (snapshot) => {
      try {
        const data = snapshot.val()
        if (data) {
          const imagesArray = Object.keys(data).map(key => {
            const item = data[key]
            let imageUrl = item.imageUrl || item.image || ""
            
            // Convert Firebase Storage URLs if needed
            if (imageUrl.startsWith('gs://')) {
              imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
                imageUrl.replace('gs://', '').split('/')[0]
              }/o/${encodeURIComponent(imageUrl.split('/').slice(1).join('/'))}?alt=media`
            }

            return {
              id: key,
              title: item.title || "",
              description: item.description || "",
              imageUrl: imageUrl,
              createdAt: item.createdAt || Date.now()
            }
          }).filter(img => img.imageUrl) // Filter out images with empty URLs

          setGalleryImages(imagesArray.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)))
        } else {
          setGalleryImages([])
        }
        setLoading(false)
      } catch (err) {
        console.error("Error fetching gallery images:", err)
        setError('Failed to load gallery images. Please try again later.')
        setLoading(false)
      }
    }, (error) => {
      console.error("Firebase error:", error)
      setError('Failed to connect to gallery. Please check your connection.')
      setLoading(false)
    })
  
    return () => unsubscribe()
  }, [])

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const displayedImages = galleryImages.slice(startIndex, startIndex + ITEMS_PER_PAGE)

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

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }

  const handlePreviousImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const previousIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[previousIndex])
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
          <p className="mt-4">Loading gallery...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-red-500">{error}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </section>
    )
  }

  if (galleryImages.length === 0) {
    return (
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container text-center">
          <p className="text-muted-foreground">No gallery images found.</p>
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
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.id} 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
                <div className="relative aspect-square">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.title || "Gallery image"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        console.error(`Image load failed: ${image.imageUrl}`)
                        const target = e.currentTarget
                        target.src = '/image-placeholder.jpg'
                        target.onerror = null
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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
          {selectedImage && (
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>{selectedImage.title}</DialogTitle>
                  <DialogDescription>{selectedImage.description}</DialogDescription>
                </DialogHeader>
                <div className="relative h-[60vh] w-full">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title || "Gallery image"}
                    fill
                    className="object-contain"
                    priority
                    onError={(e) => {
                      console.error("Modal image failed to load:", selectedImage.imageUrl)
                      const target = e.currentTarget
                      target.src = '/image-placeholder.jpg'
                      target.onerror = null
                    }}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full z-20"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePreviousImage()
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full z-20"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextImage()
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-4 rounded-full z-20"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}