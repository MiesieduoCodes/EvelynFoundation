"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { Loader2 } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/login")
      } else {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [router])

  if (loading && pathname !== "/admin/login") {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="sr-only">Loading</span>
      </div>
    )
  }

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container py-6 md:py-8">{children}</div>
      </div>
    </div>
  )
}

