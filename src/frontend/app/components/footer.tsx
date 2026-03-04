import Link from "next/link"
import Image from "next/image"

interface FooterImage {
  id: number;
  href: string;
  src_dark: string;
  src_light: string;
  alt: string;
}

const footer_image_link: FooterImage[] = [
  { id: 1, href: "https://nextjs.org/", src_dark: "/images/nextjs-logotype-dark-background.svg", src_light: "/images/nextjs-logotype-light-background.svg", alt: "Next.js" },
  { id: 2, href: "https://tailwindcss.com/", src_dark: "/images/tailwindcss-logotype-white.svg", src_light: "/images/tailwindcss-logotype.svg", alt: "Tailwind" },
  { id: 3, href: "https://www.djangoproject.com/", src_dark: "/images/django-logo-negative.svg", src_light: "/images/django-logo-positive.svg", alt: "Django" },
  { id: 4, href: "https://www.cloudflare.com/", src_dark: "/images/CF Logo 2.jpg", src_light: "/images/CF-Logo 1.png", alt: "Cloudflare" },
]

export const Footer = () => {
  return (
    <footer aria-label="Footer Label" className="bg-gray-300 dark:bg-gray-700 mt-auto py-4 text-center">
      <p className="text-xl font-bold">Made with</p>
      <div className="flex items-center justify-center my-6 space-x-8">
      {footer_image_link.map((footer_img: FooterImage) => (
        <Link key={footer_img.id} href={footer_img.href} target="_blank" className="relative h-6">
          <Image
            className="hidden dark:block w-auto h-full object-contain"
            src={footer_img.src_dark}
            alt={footer_img.alt}
            width={100}
            height={100}
          />
          <Image
            className="dark:hidden block w-auto h-full object-contain"
            src={footer_img.src_light}
            alt={footer_img.alt}
            width={100}
            height={100}
          />
        </Link>
      ))}
      </div>
      <hr className="w-4/6 mx-auto my-4"></hr>
      <p>Copyright © 2026 Ruleon (RueLee) Lee. All Rights Reserved.&emsp;|&emsp;<Link href="https://github.com/RueLee/my-site" target="_blank" className="underline">View Source via GitHub</Link></p>
      
      {/* <p>
        Made with&nbsp;
        <Link href="https://nextjs.org/" target="_blank" className="underline">Next.js</Link>
        ,&nbsp;
        <Link href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind</Link>
        , and&nbsp;
        <Link href="https://ui.shadcn.com/" target="_blank" className="underline">ShadCN</Link>
      </p> */}
    </footer>
  )
}

export default Footer;