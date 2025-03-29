import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
  
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="outline">
              <a href="/contact">Contact Us</a>
            </Button>
 
          </div>
        </div>
      </header>
      <main className="flex-1">
        <PageHeader title="Contact Us" description="Get in touch with the Evelyn Oweibo Foundation team" />
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
        
    </div>
  )
}

