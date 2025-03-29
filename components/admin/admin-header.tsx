"use client"

import { Button } from "@/components/ui/button"

interface AdminHeaderProps {
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function AdminHeader({ title, description, action }: AdminHeaderProps) {
  return (
    <div className="flex flex-col gap-1 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  )
}

