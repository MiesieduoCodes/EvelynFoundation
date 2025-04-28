"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import { Loader2, MoreHorizontal, Pencil, Trash2, Upload, Play } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface GalleryVideo {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  createdAt: number
}

export default function VideosPage() {
  const [videos, setVideos] = useState<GalleryVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [editingVideo, setEditingVideo] = useState<GalleryVideo | null>(null)
  const [openDialog, setOpenDialog] = useState(false)
  const { toast } = useToast()

  // Fetch videos from Firebase
  useEffect(() => {
    const videosRef = dbRef(database, "galleryVideos")

    const unsubscribe = onValue(videosRef, (snapshot) => {
      try {
        const videosData: GalleryVideo[] = []

        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val()
            videosData.push({
              id: childSnapshot.key as string,
              title: data.title || "Untitled",
              description: data.description || "",
              videoUrl: data.videoUrl || "",
              thumbnailUrl: data.thumbnailUrl || "",
              createdAt: data.createdAt || Date.now(),
            })
          })

          // Sort by creation date (newest first)
          setVideos(videosData.sort((a, b) => b.createdAt - a.createdAt))
        } else {
          setVideos([])
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching videos:", error)
        toast({
          title: "Error",
          description: "Failed to load gallery videos",
          variant: "destructive",
        })
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [toast])

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!videoUrl) {
      toast({
        title: "Error",
        description: "Please enter a video URL",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    try {
      const newVideoRef = push(dbRef(database, "galleryVideos"))
      await set(newVideoRef, {
        title,
        description,
        videoUrl,
        thumbnailUrl,
        createdAt: Date.now(),
      })

      // Reset form
      setTitle("")
      setDescription("")
      setVideoUrl("")
      setThumbnailUrl("")
      setOpenDialog(false)

      toast({
        title: "Success",
        description: "Video added successfully",
      })
    } catch (error) {
      console.error("Error adding video:", error)
      toast({
        title: "Error",
        description: "Failed to add video",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }

  const handleEditVideo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingVideo) return

    try {
      const updates = {
        title: editingVideo.title,
        description: editingVideo.description,
        videoUrl: editingVideo.videoUrl,
        thumbnailUrl: editingVideo.thumbnailUrl,
      }

      await update(dbRef(database, `galleryVideos/${editingVideo.id}`), updates)

      setEditingVideo(null)
      toast({
        title: "Success",
        description: "Video updated successfully",
      })
    } catch (error) {
      console.error("Error updating video:", error)
      toast({
        title: "Error",
        description: "Failed to update video",
        variant: "destructive",
      })
    }
  }

  const handleDeleteVideo = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return

    try {
      await remove(dbRef(database, `galleryVideos/${id}`))
      toast({
        title: "Success",
        description: "Video deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting video:", error)
      toast({
        title: "Error",
        description: "Failed to delete video",
        variant: "destructive",
      })
    }
  }

  const getYouTubeThumbnail = (url: string) => {
    // Extract video ID from YouTube URL
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`
    }

    return ""
  }

  const handleVideoUrlChange = (url: string) => {
    setVideoUrl(url)

    // If it's a YouTube URL and no thumbnail is set, auto-generate one
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      if (!thumbnailUrl) {
        const thumbnail = getYouTubeThumbnail(url)
        if (thumbnail) {
          setThumbnailUrl(thumbnail)
        }
      }
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
        title="Video Management"
        description="Add and manage gallery videos"
        action={{
          label: "Add Video",
          onClick: () => setOpenDialog(true),
        }}
      />

      {/* Video Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {videos.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No videos found. Add some to get started.</p>
          </div>
        ) : (
          videos.map((video) => (
            <Card key={video.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnailUrl || "/placeholder.svg?height=400&width=600"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Error loading thumbnail:", video.thumbnailUrl)
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
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full bg-background/80">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setEditingVideo(video)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteVideo(video.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold truncate">{video.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{video.description}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add Video Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Video</DialogTitle>
            <DialogDescription>Add a new video to your gallery collection</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddVideo}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Video title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Video description"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="videoUrl">Video URL (YouTube, Vimeo, etc.)</Label>
                <Input
                  id="videoUrl"
                  type="url"
                  value={videoUrl}
                  onChange={(e) => handleVideoUrlChange(e.target.value)}
                  placeholder="https://www.youtube.com/embed/VIDEO_ID"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  For YouTube videos, use the embed URL format: https://www.youtube.com/embed/VIDEO_ID
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="thumbnailUrl">Thumbnail URL (Optional)</Label>
                <Input
                  id="thumbnailUrl"
                  type="url"
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  placeholder="https://example.com/thumbnail.jpg"
                />
                <p className="text-xs text-muted-foreground">
                  For YouTube videos, a thumbnail will be automatically generated if left blank
                </p>
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
                    Add Video
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Video Dialog */}
      <Dialog open={!!editingVideo} onOpenChange={(open) => !open && setEditingVideo(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Video</DialogTitle>
            <DialogDescription>Make changes to your video here</DialogDescription>
          </DialogHeader>
          {editingVideo && (
            <form onSubmit={handleEditVideo}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    value={editingVideo.title}
                    onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={editingVideo.description}
                    onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-videoUrl">Video URL</Label>
                  <Input
                    id="edit-videoUrl"
                    type="url"
                    value={editingVideo.videoUrl}
                    onChange={(e) => setEditingVideo({ ...editingVideo, videoUrl: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-thumbnailUrl">Thumbnail URL</Label>
                  <Input
                    id="edit-thumbnailUrl"
                    type="url"
                    value={editingVideo.thumbnailUrl}
                    onChange={(e) => setEditingVideo({ ...editingVideo, thumbnailUrl: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditingVideo(null)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
