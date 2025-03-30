import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ImpactSection } from "@/components/impact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
  
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Header with Scroll Effects */}
      <header className={cn(
        "sticky top-0 z-50 w-full border-b",
        "bg-background/95 backdrop-blur-lg transition-all",
        "supports-[backdrop-filter]:bg-background/80"
      )}>
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button 
              asChild 
              variant="outline"
              className=" sm:inline-flex hover:scale-105 transition-transform"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content with Smooth Scrolling Sections */}
      <main className="flex-1">
        <section id="hero" className="scroll-mt-16">
          <HeroSection />
        </section>
        
        <section id="mission" className="scroll-mt-16">
          <MissionSection />
        </section>
        
        <section id="impact" className="scroll-mt-16">
          <ImpactSection />
        </section>
        
        <section id="testimonials" className="scroll-mt-16">
          <TestimonialsSection />
        </section>
      </main>


      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
