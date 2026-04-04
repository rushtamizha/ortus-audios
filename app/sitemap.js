export default function sitemap() {
  const baseUrl = 'https://ortusaudios.in';

  // Define your brand routes
  const brands = [
    'denon',
    'marantz',
    'jamo',
    'elac',
    'fyne',
    'epson',
    'optoma',
    'integra',
    'jvc',
    'klipsch',
    'monitor-audio',
    'pioneer',
    'polk',
    'pure-acoustic',
    'wiim',
  ];

  const brandEntries = brands.map((brand) => ({
    url: `${baseUrl}/${brand}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // --- Added Contact Page ---
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, 
    },
    ...brandEntries,
  ];
}