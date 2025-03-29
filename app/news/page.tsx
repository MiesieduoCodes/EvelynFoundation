import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
  
import { PageHeader } from "@/components/page-header"
import { NewsList } from "@/components/news-list"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function NewsPage() {
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
          title="News & Events"
          description="Stay updated with the latest news, events, and stories from the Evelyn Oweibo Foundation"
        />
        <NewsList />
        <NewsletterSignup />
      </main>
        
    </div>
  )
}

