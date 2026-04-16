export default function robots() {
  return {
    rules: [
      {
        userAgent: ["ia_archiver", "archive.org_bot", "ia_archiver-web.archive.org"],
        disallow: ["/"],
      },
      {
        userAgent: ["LinkedInBot"],
        allow: ["/pdfs/"],
      },
      {
        userAgent: ["*"],
        disallow: ["/images/", "/pdfs/"],
      }
    ],
    sitemap: "https://www.ruleonlee.com/sitemap.xml",
  }
}