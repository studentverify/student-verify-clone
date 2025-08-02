import { useEffect } from 'react'

const SEOHead = ({ 
  title = "StudentVerify powered by sheerid.fastdiscountfinder.com - SheerID Discount Verification",
  description = "Professional SheerID student discount verification service. Get verified for exclusive student discounts from top brands. 100% success rate, 24-48 hour processing.",
  keywords = "student discounts, SheerID verification, student deals, college discounts, university savings",
  canonicalUrl = "https://sheerid.fastdiscountfinder.com",
  ogImage = "https://sheerid.fastdiscountfinder.com/og-image.jpg",
  structuredData = null
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "StudentVerify powered by sheerid.fastdiscountfinder.com",
      "url": "https://sheerid.fastdiscountfinder.com"
    }
  }

  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:url', canonicalUrl, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
    
    // Update structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]')
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script')
      structuredDataScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredDataScript)
    }
    structuredDataScript.textContent = JSON.stringify(structuredData || defaultStructuredData)
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])

  return null
}

export default SEOHead

