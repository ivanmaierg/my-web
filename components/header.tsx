import Link from "next/link"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"

export const Header = () => {
  return (
    <header className="max-w-4xl mx-auto p-6 border-b border-border">
      <div className="flex flex-col mobile:flex-row mobile:items-center mobile:justify-between gap-4">
        <div className="flex flex-col mobile:flex-row mobile:items-center gap-4 mobile:gap-8">
          <h1 className="text-foreground font-medium">ivan</h1>
          <nav className="flex items-center gap-4 mobile:gap-6 text-sm" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="hover:text-foreground transition-colors text-muted-foreground" 
                aria-label={item.ariaLabel}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <address className="text-sm not-italic self-start mobile:self-auto text-muted-foreground">
            <span className="hidden mobile:inline">Buenos Aires, Argentina</span>
            <span className="mobile:hidden">Argentina</span>
          </address>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
