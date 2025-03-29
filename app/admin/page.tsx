"use client"

import { useEffect, useState } from "react"
import { ref, onValue } from "firebase/database"
import { database } from "@/lib/firebase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Calendar, TrendingUp } from "lucide-react"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalDonors: 0,
    totalEvents: 0,
    monthlyGrowth: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null) // Updated type

  useEffect(() => {
    if (!database) {
      console.error("Database is not initialized");
      setLoading(false);
      return;
    }

    const statsRef = ref(database, "stats")
    const unsubscribe = onValue(statsRef, (snapshot) => {
      setLoading(false) // Stop loading
      if (snapshot.exists()) {
        const data = snapshot.val()
        setStats({
          totalDonations: data.totalDonations || 0,
          totalDonors: data.totalDonors || 0,
          totalEvents: data.totalEvents || 0,
          monthlyGrowth: data.monthlyGrowth || 0,
        })
      } else {
        setError("No data available") // Now accepts string
      }
    }, (error) => {
      setLoading(false) // Stop loading on error
      setError(error.message) // Now accepts string
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <AdminHeader title="Dashboard" description="Overview of your foundation's performance" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalDonations.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDonors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalEvents}</div>
            <p className="text-xs text-muted-foreground">+2 new events this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.monthlyGrowth}%</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Donation Overview</CardTitle>
            <CardDescription>Monthly donation trends for the current year</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Add donation overview chart or content here */}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
            <CardDescription>Latest donations received</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add recent donations list or content here */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}