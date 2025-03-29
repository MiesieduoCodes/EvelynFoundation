"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ref as dbRef, onValue, remove, update, push, set } from "firebase/database"
import { database } from "@/lib/firebase"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Loader2, MoreHorizontal, Pencil, Trash2, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
  createdAt: number
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const { toast } = useToast()

  // Fetch images from Firebase
  useEffect(() => {
    const galleryRef = dbRef(database, "galleryImages")
    
    const unsubscribe = onValue(galleryRef, (snapshot) => {
      try {
        const imagesData: GalleryImage[] = []
        
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val()
            imagesData.push({
              id: childSnapshot.key as string,
              title: data.title || "Untitled",
              description: data.description || "",
              imageUrl: data.imageUrl || data.image || "",
              createdAt: data.createdAt || Date.now(),
            })
          })
          
          // Sort by creation date (newest first)
          setImages(imagesData.sort((a, b) => b.createdAt - a.createdAt))
        } else {
          setImages([])
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching images:", error)
        toast({
          title: "Error",
          description: "Failed to load gallery images",
          variant: "destructive",
        })
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [toast])

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!imageUrl) {
      toast({
        title: "Error",
        description: "Please enter an image URL",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    try {
      const newImageRef = push(dbRef(database, 'galleryImages'))
      await set(newImageRef, {
        title,
        description,
        imageUrl,
        createdAt: Date.now(),
      })

      // Reset form
      setTitle("")
      setDescription("")
      setImageUrl("")
      setOpenDialog(false)

      toast({
        title: "Success",
        description: "Image added successfully",
      })
    } catch (error) {
      console.error("Error adding image:", error)
      toast({
        title: "Error",
        description: "Failed to add image",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleEditImage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingImage) return

    try {
      const updates = {
        title: editingImage.title,
        description: editingImage.description,
        imageUrl: editingImage.imageUrl,
      }

      await update(dbRef(database, `galleryImages/${editingImage.id}`), updates)

      setEditingImage(null)
      toast({
        title: "Success",
        description: "Image updated successfully",
      })
    } catch (error) {
      console.error("Error updating image:", error)
      toast({
        title: "Error",
        description: "Failed to update image",
        variant: "destructive",
      })
    }
  }

  const handleDeleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return

    try {
      await remove(dbRef(database, `galleryImages/${id}`))
      toast({
        title: "Success",
        description: "Image deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting image:", error)
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <AdminHeader
        title="Gallery Management"
        description="Add and manage gallery images"
        action={{
          label: "Add Image",
          onClick: () => setOpenDialog(true),
        }}
      />

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {images.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No images found. Add some to get started.</p>
          </div>
        ) : (
          images.map((image) => (
            <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    console.error("Error loading image:", image.imageUrl)
                    // Consider adding a fallback image here
                  }}
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full bg-background/80">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setEditingImage(image)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-destructive"
                        onClick={() => handleDeleteImage(image.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold truncate">{image.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add Image Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Image</DialogTitle>
            <DialogDescription>
              Add a new image to your gallery collection
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddImage}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Image title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Image description"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={uploading}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Add Image
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Image Dialog */}
      <Dialog open={!!editingImage} onOpenChange={(open) => !open && setEditingImage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Image</DialogTitle>
            <DialogDescription>
              Make changes to your image here
            </DialogDescription>
          </DialogHeader>
          {editingImage && (
            <form onSubmit={handleEditImage}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    value={editingImage.title}
                    onChange={(e) => setEditingImage({...editingImage, title: e.target.value})}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editingImage.description}
                    onChange={(e) => setEditingImage({...editingImage, description: e.target.value})}
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-imageUrl">Image URL</Label>
                  <Input
                    id="edit-imageUrl"
                    type="url"
                    value={editingImage.imageUrl}
                    onChange={(e) => setEditingImage({...editingImage, imageUrl: e.target.value})}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditingImage(null)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}