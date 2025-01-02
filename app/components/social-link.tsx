import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faTwitch, faXTwitter, faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  var cssIconMargin = "mx-2";
  return (
    <div className="flex flex-col mr-8">
      <p className="text-center">Socials</p>
      <div className="flex justify-center text-xl">
        <Link href="https://youtube.com/@RueLee" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faYoutube}/></Link>
        <Link href="https://twitch.tv/rueleerj" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faTwitch}/></Link>
        <Link href="https://x.com/ruelee125" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faXTwitter}/></Link>
        <Link href="https://discord.gg/NWqWFqDXUp" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faDiscord}/></Link>
        <Link href="https://github.com/RueLee" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faGithub}/></Link>
        <Link href="https://linkedin.com/in/ruleon-lee/" target="_blank" className={cssIconMargin}><FontAwesomeIcon icon={faLinkedin}/></Link>
      </div>
    </div>
  )
}

export default SocialLinks;