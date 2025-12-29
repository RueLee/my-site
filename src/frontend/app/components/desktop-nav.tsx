import { NavBarButton } from "./custom-button"
import SocialLinks from "./social-link"

export const DesktopNav = () => {
  return (
    <nav aria-label="Header Navbar" className="hidden md:inline-flex items-center justify-center">
      <SocialLinks />
      {/* <nav aria-label="Header Navbar"> */}
      <NavBarButton href="/resume" name="Resume" />
      <NavBarButton href="/twitch" name="Twitch" />
      <NavBarButton href="/support" name="Support" />
      {/* </nav> */}
    </nav>
  )
}

export default DesktopNav;