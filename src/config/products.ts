export interface ProductCategory {
  id: string;
  titleEn: string;
  titleHi: string;
  categoryTag: string;
  categoryTagEn: string;
  categoryTagHi: string;
  descriptionEn: string;
  descriptionHi: string;
  highlightsEn: string[];
  highlightsHi: string[];
  icon: string;
  imageAlt: string;
  colorGradient: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "fertilizers",
    titleEn: "Fertilizers & Soil Enrichers",
    titleHi: "खाद एवं उर्वरक",
    categoryTag: "FERTILIZERS / खाद",
    categoryTagEn: "FERTILIZERS",
    categoryTagHi: "खाद एवं उर्वरक",
    descriptionEn: "Essential soil nutrition and agricultural fertilizers designed to balance soil health and promote vigorous root development.",
    descriptionHi: "मिट्टी की उर्वरता बढ़ाने और फसल के संतुलित विकास के लिए आवश्यक रासायनिक व जैविक खाद।",
    highlightsEn: ["Balanced Soil Nutrition", "Root Growth Support", "Reliable Quality"],
    highlightsHi: ["संतुलित मृदा पोषण", "जड़ों का मजबूत विकास", "विश्वसनीय गुणवत्ता"],
    icon: "Boxes",
    imageAlt: "Fertilizers and soil enrichment products",
    colorGradient: "from-[#103D28] to-[#1D603A]",
    image: "/images/hero/hero-crop-rows-soil.webp",
  },
  {
    id: "seeds",
    titleEn: "Certified Agricultural Seeds",
    titleHi: "उन्नत बीज",
    categoryTag: "SEEDS / बीज",
    categoryTagEn: "CERTIFIED SEEDS",
    categoryTagHi: "उन्नत बीज",
    descriptionEn: "Carefully selected and viable seeds for seasonal crops, ensuring optimal germination and robust plant emergence.",
    descriptionHi: "मौसमी फसलों के लिए चयनित एवं प्रामाणिक बीज, जो बेहतर अंकुरण और सशक्त फसल सुनिश्चित करें।",
    highlightsEn: ["High Germination Rate", "Selected Varieties", "Seasonal Reliability"],
    highlightsHi: ["उत्कृष्ट अंकुरण क्षमता", "चयनित किस्में", "मौसमी अनुकूलता"],
    icon: "Sprout",
    imageAlt: "High quality agricultural crop seeds",
    colorGradient: "from-[#1D603A] to-[#83B83D]",
    image: "/images/hero/stages/stage4-germination-sprout.webp",
  },
  {
    id: "pesticides",
    titleEn: "Crop Protection & Care",
    titleHi: "कीटनाशक एवं फसल सुरक्षा",
    categoryTag: "PESTICIDES / कीटनाशक",
    categoryTagEn: "CROP PROTECTION",
    categoryTagHi: "कीटनाशक व फसल सुरक्षा",
    descriptionEn: "Targeted crop care solutions to safeguard standing crops from pests, fungal risks, and unwanted weed competition.",
    descriptionHi: "फसलों को कीटों, फफूंद और अवांछित खरपतवार से बचाने हेतु प्रभावी एवं सुरक्षित फसल सुरक्षा उपाय।",
    highlightsEn: ["Pest Management", "Crop Health Defense", "Timely Protection"],
    highlightsHi: ["सुरक्षित कीट नियंत्रण", "फसल स्वास्थ्य सुरक्षा", "समयबद्ध प्रभाव"],
    icon: "ShieldCheck",
    imageAlt: "Agricultural crop protection and pest care supplies",
    colorGradient: "from-[#103D28] to-[#082B1C]",
    image: "/images/hero/stages/stage3-irrigation-water.webp",
  },
  {
    id: "plant-nutrients",
    titleEn: "Plant Nutrients & Boosters",
    titleHi: "पौध पोषक एवं टॉनिक",
    categoryTag: "PLANT NUTRIENTS / पौध पोषक",
    categoryTagEn: "PLANT NUTRIENTS",
    categoryTagHi: "पौध पोषक एवं टॉनिक",
    descriptionEn: "Specialized micronutrients, foliar sprays, and growth stimulators to foster chlorophyll formation, flowering, and yield quality.",
    descriptionHi: "सूक्ष्म पोषक तत्व और ग्रोथ टॉनिक जो फसल में हरियाली, फूल-फल के फैलाव और उत्तम उपज में सहायक हों।",
    highlightsEn: ["Micronutrient Delivery", "Foliar Energy Boost", "Vigorous Vegetative Growth"],
    highlightsHi: ["सूक्ष्म पोषक आपूर्ति", "फूल व फल में वृद्धि", "हरियाली व चमक"],
    icon: "Leaf",
    imageAlt: "Plant growth nutrients and micronutrient enhancers",
    colorGradient: "from-[#1D603A] to-[#B5D957]",
    image: "/images/hero/hero-crops-close-up.webp",
  },
];
