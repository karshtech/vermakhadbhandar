export type Language = 'hi' | 'en';

export interface Translations {
  brand: {
    nameEn: string;
    nameHi: string;
    taglineEn: string;
    taglineHi: string;
    subtextEn: string;
    subtextHi: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    agriculture: string;
    whyChooseUs: string;
    visit: string;
    contact: string;
    callNow: string;
  };
  common: {
    exploreProducts: string;
    contactUs: string;
    getDirections: string;
    inquireWhatsApp: string;
    viewDetails: string;
    readMore: string;
    backToHome: string;
    trustedPartner: string;
    qualityCertified: string;
    farmerTrust: string;
    soilToHarvest: string;
  };
  footer: {
    tagline: string;
    rightsReserved: string;
    dedicatedToFarmers: string;
    quickLinks: string;
    categories: string;
    contactInfo: string;
    developerCredit: string;
  };
}

export const translations: Record<Language, Translations> = {
  hi: {
    brand: {
      nameEn: 'VERMA KHAD BHANDAR',
      nameHi: 'वर्मा खाद भंडार',
      taglineEn: 'Growing Better Crops. Building a Better Tomorrow.',
      taglineHi: 'हर खेत की तरक्की, हमारी जिम्मेदारी।',
      subtextEn: 'Supporting your agricultural journey with high-grade fertilizers, certified seeds, crop protection, and plant nutrition.',
      subtextHi: 'गुणवत्तापूर्ण खाद, बीज और कृषि उत्पादों के साथ आपकी खेती को बेहतर बनाने का हमारा प्रयास।',
    },
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      agriculture: 'कृषि जानकारी',
      whyChooseUs: 'हमें क्यों चुनें',
      visit: 'हमारी दुकान',
      contact: 'संपर्क',
      callNow: 'संपर्क करें',
    },
    common: {
      exploreProducts: 'हमारे उत्पाद देखें',
      contactUs: 'संपर्क करें',
      getDirections: 'दिशा-निर्देश प्राप्त करें',
      inquireWhatsApp: 'व्हाट्सएप पर जानकारी लें',
      viewDetails: 'विवरण देखें',
      readMore: 'अधिक जानें',
      backToHome: 'मुख्य पृष्ठ पर जाएँ',
      trustedPartner: 'आपका भरोसेमंद साथी',
      qualityCertified: 'गुणवत्तापूर्ण कृषि उत्पाद',
      farmerTrust: 'किसान का विश्वास',
      soilToHarvest: 'मिट्टी से कटाई तक',
    },
    footer: {
      tagline: 'Growing Together. Naturally.',
      rightsReserved: 'सर्वाधिकार सुरक्षित।',
      dedicatedToFarmers: 'खेती की खुशहाली के लिए समर्पित',
      quickLinks: 'महत्वपूर्ण लिंक',
      categories: 'उत्पाद श्रेणियाँ',
      contactInfo: 'संपर्क विवरण',
      developerCredit: 'डिज़ाइन एवं विकास:',
    },
  },
  en: {
    brand: {
      nameEn: 'VERMA KHAD BHANDAR',
      nameHi: 'वर्मा खाद भंडार',
      taglineEn: 'Growing Better Crops. Building a Better Tomorrow.',
      taglineHi: 'Every Field Flourishes, Our Commitment.',
      subtextEn: 'Supporting your agricultural journey with high-grade fertilizers, certified seeds, crop protection, and plant nutrition.',
      subtextHi: 'Our endeavor to enhance farming with quality fertilizers, certified seeds, and agricultural inputs.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      agriculture: 'Agriculture',
      whyChooseUs: 'Why Choose Us',
      visit: 'Visit Store',
      contact: 'Contact',
      callNow: 'Contact Us',
    },
    common: {
      exploreProducts: 'Explore Products',
      contactUs: 'Contact Us',
      getDirections: 'Get Directions',
      inquireWhatsApp: 'Inquire on WhatsApp',
      viewDetails: 'View Details',
      readMore: 'Read More',
      backToHome: 'Back to Home',
      trustedPartner: 'Your Trusted Farm Partner',
      qualityCertified: 'Quality Agricultural Inputs',
      farmerTrust: 'Farmer Trust',
      soilToHarvest: 'From Soil to Harvest',
    },
    footer: {
      tagline: 'Growing Together. Naturally.',
      rightsReserved: 'All rights reserved.',
      dedicatedToFarmers: 'Dedicated to Farmer Prosperity',
      quickLinks: 'Quick Links',
      categories: 'Product Categories',
      contactInfo: 'Contact Information',
      developerCredit: 'Designed & Developed by:',
    },
  },
};
