"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Our Locations",
      content: (
        <>
          <div className="mb-4">
            <p className="font-medium text-primary">USA Office</p>
            <address className="not-italic text-muted-foreground">
              1650 Anderson Mill Road<br />
              Austell, GA 30106<br />
              United States
            </address>
          </div>
          <div>
            <p className="font-medium text-primary">Nigeria Office</p>
            <address className="not-italic text-muted-foreground">
              Bayelsa Medical University<br />
              P.M.B. 178, Imgbi Rd, Onopa<br />
              Yenagoa, Bayelsa State
            </address>
          </div>
        </>
      )
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <div className="space-y-1">
          <p className="text-muted-foreground">USA: +1 (404) 910-8449</p>
          <p className="text-muted-foreground">Nigeria: 0803 929 3173</p>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <p className="text-muted-foreground">evelynoweibofoundation@gmail.com</p>
      )
    },
    {
      icon: Clock,
      title: "Hours",
      content: (
        <div className="space-y-1">
          <p className="text-muted-foreground">Mon-Fri: 9am - 5pm</p>
          <p className="text-muted-foreground">Sat: 10am - 2pm</p>
          <p className="text-muted-foreground">Sun: Closed</p>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Follow Us",
      content: (
        <div className="flex gap-4 mt-2">
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-primary hover:text-primary/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      )
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow border-0">
        <CardHeader>
          <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/10 p-2 rounded-full">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-lg mb-2">{item.title}</p>
                {item.content}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 rounded-xl overflow-hidden border border-muted shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.337259449904!2d6.280921373544086!3d4.932831669167213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNCw5MzU3NTEsIE5pZ2VyaWE!5e0!3m2!1sen!2sus!4v1710284144288!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}