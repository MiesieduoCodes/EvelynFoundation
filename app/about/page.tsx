import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
  
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"
import { TeamSection } from "@/components/team-section"
import { HistorySection } from "@/components/history-section"

export default function AboutPage() {
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
        <PageHeader
          title="About Us"
          description="Learn about our mission, history, and the team behind the Evelyn Oweibo Foundation"
        />
        <AboutContent />
        <HistorySection />
        <TeamSection />
      </main>
        
    </div>
  )
}

