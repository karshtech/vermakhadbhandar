import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageProvider';
import { ROUTE_SEO, SITE_URL, RouteMetadata } from '../config/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
  schema?: Record<string, unknown>;
}

export function usePageSEO(customSEO?: SEOProps): void {
  const location = useLocation();
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  const pathname = customSEO?.canonicalPath || location.pathname;
  const routeConfig: RouteMetadata | undefined = ROUTE_SEO[pathname] || ROUTE_SEO['/'];

  const title = customSEO?.title || (isHindi ? routeConfig.titleHi : routeConfig.titleEn);
  const description =
    customSEO?.description || (isHindi ? routeConfig.descHi : routeConfig.descEn);
  const keywords =
    customSEO?.keywords || (isHindi ? routeConfig.keywordsHi : routeConfig.keywordsEn);
  const ogImage = customSEO?.ogImage || routeConfig.ogImage || `${SITE_URL}/images/social/og-home.jpg`;
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const imageAlt = isHindi
    ? (routeConfig.ogImageAltHi || title)
    : (routeConfig.ogImageAltEn || title);

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'Verma Khad Bhandar');

    // 3. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:image:secure_url', fullImageUrl);
    setMeta('property', 'og:image:type', routeConfig.ogImageType || 'image/jpeg');
    setMeta('property', 'og:image:width', String(routeConfig.ogImageWidth || 1200));
    setMeta('property', 'og:image:height', String(routeConfig.ogImageHeight || 630));
    setMeta('property', 'og:image:alt', imageAlt);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', isHindi ? 'वर्मा खाद भंडार' : 'Verma Khad Bhandar');
    setMeta('property', 'og:locale', isHindi ? 'hi_IN' : 'en_IN');
    setMeta('property', 'og:locale:alternate', isHindi ? 'en_IN' : 'hi_IN');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', canonicalUrl);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImageUrl);
    setMeta('name', 'twitter:image:alt', imageAlt);

    // 6. Route-Specific Schema.org JSON-LD (if provided)
    const scriptId = 'route-specific-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (customSEO?.schema) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(customSEO.schema);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, keywords, canonicalUrl, fullImageUrl, isHindi, imageAlt, routeConfig, customSEO?.schema]);
}
