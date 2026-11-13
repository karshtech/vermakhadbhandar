export interface BusinessConfig {
  name: {
    en: string;
    hi: string;
  };
  category: {
    en: string;
    hi: string;
  };
  tagline: {
    en: string;
    hi: string;
  };
  supportingText: {
    en: string;
    hi: string;
  };
  about: {
    titleEn: string;
    titleHi: string;
    bodyEn: string;
    bodyHi: string;
  };
  contact: {
    phoneDisplay: string;
    phoneNumberRaw: string; // for tel: links
    whatsappDisplay: string;
    whatsappNumberRaw: string; // international format without spaces
    addressDisplay: {
      en: string;
      hi: string;
    };
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    openingHours: {
      en: string;
      hi: string;
    };
  };
}

export const businessConfig: BusinessConfig = {
  name: {
    en: "VERMA KHAD BHANDAR",
    hi: "वर्मा खाद भंडार",
  },
  category: {
    en: "Fertilizer & Agricultural Supplies",
    hi: "खाद, बीज एवं कृषि उत्पाद केंद्र",
  },
  tagline: {
    en: "Growing Better Crops. Building a Better Tomorrow.",
    hi: "हर खेत की तरक्की, हमारी जिम्मेदारी।",
  },
  supportingText: {
    en: "Supporting your agricultural journey with high-grade fertilizers, certified seeds, crop protection, and essential plant nutrition.",
    hi: "गुणवत्तापूर्ण खाद, बीज और कृषि उत्पादों के साथ आपकी खेती को बेहतर बनाने का हमारा प्रयास।",
  },
  about: {
    titleEn: "Your Trusted Agricultural Partner",
    titleHi: "आपकी खेती का भरोसेमंद साथी।",
    bodyEn:
      "Verma Khad Bhandar aims to support farmers by providing quality agricultural products and helping them find suitable solutions for their farming needs.",
    bodyHi:
      "वर्मा खाद भंडार में हमारा उद्देश्य किसानों तक गुणवत्तापूर्ण कृषि उत्पाद पहुँचाना और उनकी खेती से जुड़ी आवश्यकताओं में सहयोग करना है।",
  },
  contact: {
    phoneDisplay: "+91 87262 48752",
    phoneNumberRaw: "+918726248752",
    whatsappDisplay: "+91 87262 48752",
    whatsappNumberRaw: "918726248752",
    addressDisplay: {
      en: "Rasra Kasimabad Road, Badhubandh Market, Rasra, Dulahpah, Uttar Pradesh 221712",
      hi: "रसड़ा कासिमाबाद रोड, बाधुबांध मार्केट, रसड़ा, दुलहपाह, उत्तर प्रदेश 221712",
    },
    googleMapsUrl: "https://maps.app.goo.gl/oWXYbJfeAPS23hrL9",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4259.540861977715!2d83.77669437594514!3d25.839208005397676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399217effafe6cb3%3A0xa24d727151f3e6d5!2sVerma%20Khad%20Bhandar!5e1!3m2!1sen!2sin!4v1794536153510!5m2!1sen!2sin",
    openingHours: {
      en: "Monday to Sunday: 8:00 AM – 7:30 PM",
      hi: "सोमवार से रविवार: प्रातः 8:00 बजे से सायं 7:30 बजे तक",
    },
  },
};
