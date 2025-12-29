import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons"
import SocialLinks from "./social-link"
import { NavBarButton } from "./custom-button"

export const MobileNav = () => {
  return (
    <div className="md:hidden inline-flex items-center justify-center mx-4">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faAlignJustify} />
        </SheetTrigger>
        <SheetContent side="right" className="bg-background text-foreground">
          <SocialLinks />
          <nav aria-label="Header Mobile Navbar" className="flex flex-col">
            <NavBarButton href="/resume" name="Resume" />
            <NavBarButton href="/twitch" name="Twitch" />
            <NavBarButton href="/support" name="Support" />
          </nav>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileNav;