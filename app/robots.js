export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'], // Add any private routes here
    },
    sitemap: 'https://ortusaudios.in/sitemap.xml',
  }
}