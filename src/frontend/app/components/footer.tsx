import Link from "next/link"

export const Footer = () => {
  return (
    <footer aria-label="Footer Label" className="bg-gray-300 dark:bg-gray-700 mt-auto py-4 text-center">
      <p>Copyright © 2025 Ruleon (RueLee) Lee. All Rights Reserved.</p>
      <p>
        Made with&nbsp;
        <Link href="https://nextjs.org/" target="_blank" className="underline">Next.js</Link>
        ,&nbsp;
        <Link href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind</Link>
        , and&nbsp;
        <Link href="https://ui.shadcn.com/" target="_blank" className="underline">ShadCN</Link>
      </p>
      <Link href="https://github.com/RueLee/my-site" target="_blank" className="underline">View Source via GitHub</Link>
    </footer>
  )
}

export default Footer;