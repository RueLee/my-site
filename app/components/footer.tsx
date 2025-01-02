import Link from "next/link"

export const Footer = () => {
  return (
    <footer aria-label="Footer Label" className="bg-gray-300 dark:bg-gray-700 mt-auto py-4">
      <p className="footer-text">Copyright © 2025 Ruleon (RueLee) Lee. All Rights Reserved.</p>
      <p className="footer-text">
        Made with&nbsp;
        <Link href="https://nextjs.org/" target="_blank" className="footer-text-url">NextJS</Link>
        ,&nbsp;
        <Link href="https://tailwindcss.com/" target="_blank" className="footer-text-url">Tailwind</Link>
        , and&nbsp;
        <Link href="https://ui.shadcn.com/" target="_blank" className="footer-text-url">ShadCN</Link>
      </p>
      <Link href="https://github.com/RueLee/my-site" target="_blank" className="footer-text footer-text-url">View Source via GitHub</Link>
    </footer>
  )
}

export default Footer;