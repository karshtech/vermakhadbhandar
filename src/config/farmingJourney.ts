export interface FarmingStage {
  id: string;
  stageNumber: string;
  nameHi: string;
  nameEn: string;
  shortLabel: string;
  shortLabelEn: string;
  headlineHi: string;
  headlineLine1: string[];
  headlineLine2: string[];
  supportingHi: string;
  headlineEn: string;
  headlineLine1En: string[];
  headlineLine2En: string[];
  supportingEn: string;
  imageFile: string;
  imageCredit: string;
  cameraPos: [number, number, number];
  cameraLookAt: [number, number, number];
  accentColor: string;
  startProgress: number;
  endProgress: number;
  startFrame: number;
  endFrame: number;
}

export const FARMING_STAGES: FarmingStage[] = [
  {
    id: 'ploughing',
    stageNumber: '01',
    nameHi: 'खेत की जुताई',
    nameEn: 'Land Preparation & Ploughing',
    shortLabel: '01 जुताई',
    shortLabelEn: '01 Ploughing',
    headlineHi: 'हर अच्छी फसल की शुरुआत, अच्छी तैयारी से।',
    headlineLine1: ['हर', 'अच्छी', 'फसल', 'की', 'शुरुआत,'],
    headlineLine2: ['अच्छी', 'तैयारी', 'से।'],
    supportingHi: 'मिट्टी को तैयार करने से लेकर बेहतर पैदावार तक, हर कदम महत्वपूर्ण है।',
    headlineEn: 'Every great harvest begins with careful soil preparation.',
    headlineLine1En: ['Every', 'Great', 'Harvest', 'Begins'],
    headlineLine2En: ['With', 'Careful', 'Soil', 'Preparation.'],
    supportingEn: 'From aerating deep furrows to mineral balancing, preparation is the foundation of farm success.',
    imageFile: '/images/hero/stages/stage1-ploughing-tractor.webp',
    imageCredit: 'Warren Wong (Unsplash)',
    cameraPos: [0, 1.8, 8.0],
    cameraLookAt: [0, 0.4, -20],
    accentColor: '#B58D57',
    startProgress: 0.0,
    endProgress: 0.17,
    startFrame: 1,
    endFrame: 20,
  },
  {
    id: 'sowing',
    stageNumber: '02',
    nameHi: 'बीज की बुवाई',
    nameEn: 'Certified Seed Sowing',
    shortLabel: '02 बुवाई',
    shortLabelEn: '02 Sowing',
    headlineHi: 'हर बीज में छिपी है, बेहतर कल की उम्मीद।',
    headlineLine1: ['हर', 'बीज', 'में', 'छिपी', 'है,'],
    headlineLine2: ['बेहतर', 'कल', 'की', 'उम्मीद।'],
    supportingHi: 'सही बीज और सही शुरुआत, स्वस्थ फसल की नींव बनाते हैं।',
    headlineEn: 'Inside every seed lies the promise of a better tomorrow.',
    headlineLine1En: ['In', 'Every', 'Seed', 'Lies'],
    headlineLine2En: ['The', 'Promise', 'Of', 'Tomorrow.'],
    supportingEn: 'Certified high-germination seeds and proper treatment ensure strong, disease-resistant crop emergence.',
    imageFile: '/images/hero/stages/stage2-sowing-seeds.webp',
    imageCredit: 'CDC / Unsplash',
    cameraPos: [0.25, 0.7, 5.2],
    cameraLookAt: [0.1, 0.0, -18],
    accentColor: '#83B83D',
    startProgress: 0.17,
    endProgress: 0.33,
    startFrame: 21,
    endFrame: 39,
  },
  {
    id: 'irrigation',
    stageNumber: '03',
    nameHi: 'समय पर सिंचाई',
    nameEn: 'Timely Furrow Irrigation',
    shortLabel: '03 सिंचाई',
    shortLabelEn: '03 Irrigation',
    headlineHi: 'सही समय पर पानी, फसल को नई जान।',
    headlineLine1: ['सही', 'समय', 'पर', 'पानी,'],
    headlineLine2: ['फसल', 'को', 'नई', 'जान।'],
    supportingHi: 'संतुलित सिंचाई फसल की स्वस्थ वृद्धि में महत्वपूर्ण भूमिका निभाती है।',
    headlineEn: 'Timely irrigation breathes vigorous life into growing crops.',
    headlineLine1En: ['Timely', 'Irrigation', 'Brings'],
    headlineLine2En: ['Renewed', 'Life', 'To', 'Crops.'],
    supportingEn: 'Balanced furrow water management ensures steady nutrient transport and deep root vitality.',
    imageFile: '/images/hero/stages/stage3-irrigation-water.webp',
    imageCredit: 'Efraimstochter (Unsplash)',
    cameraPos: [-0.2, 0.15, 3.5],
    cameraLookAt: [-0.05, -0.2, -15],
    accentColor: '#4FA3E8',
    startProgress: 0.33,
    endProgress: 0.48,
    startFrame: 40,
    endFrame: 57,
  },
  {
    id: 'germination',
    stageNumber: '04',
    nameHi: 'नन्हा अंकुरण',
    nameEn: 'Seedling Germination',
    shortLabel: '04 अंकुरण',
    shortLabelEn: '04 Germination',
    headlineHi: 'हर नई कोंपल, मेहनत का विश्वास।',
    headlineLine1: ['हर', 'नई', 'कोंपल,'],
    headlineLine2: ['मेहनत', 'का', 'विश्वास।'],
    supportingHi: 'पोषण और देखभाल के साथ फसल धीरे-धीरे आगे बढ़ती है।',
    headlineEn: 'Every fresh sprout reflects the farmer’s honest dedication.',
    headlineLine1En: ['Every', 'Fresh', 'Sprout'],
    headlineLine2En: ['Reflects', 'Honest', 'Dedication.'],
    supportingEn: 'Nurtured with gentle early micro-nutrients, young seedlings build vigorous tillering and leaf strength.',
    imageFile: '/images/hero/stages/stage4-germination-sprout.webp',
    imageCredit: 'Roman Synkevych (Unsplash)',
    cameraPos: [0.15, 0.45, 2.2],
    cameraLookAt: [0.1, 0.2, -12],
    accentColor: '#B5D957',
    startProgress: 0.48,
    endProgress: 0.62,
    startFrame: 58,
    endFrame: 74,
  },
  {
    id: 'growth',
    stageNumber: '05',
    nameHi: 'फसल की वृद्धि',
    nameEn: 'Vigorous Crop Growth (Wheat & Paddy)',
    shortLabel: '05 वृद्धि',
    shortLabelEn: '05 Growth',
    headlineHi: 'स्वस्थ फसल, खुशहाल किसान।',
    headlineLine1: ['स्वस्थ', 'फसल,'],
    headlineLine2: ['खुशहाल', 'किसान।'],
    supportingHi: 'सही पोषण और फसल की उचित देखभाल से बेहतर परिणामों की दिशा में कदम बढ़ाएँ।',
    headlineEn: 'A healthy crop canopy brings prosperity to the farmer.',
    headlineLine1En: ['A', 'Healthy', 'Canopy'],
    headlineLine2En: ['Brings', 'Prosperity', 'To', 'Farmers.'],
    supportingEn: 'Balanced NPK, zinc, and targeted defense build dense green fields and sturdy stalks.',
    imageFile: '/images/hero/stages/stage5-crop-growth.webp',
    imageCredit: 'Jan Kopřiva (Unsplash)',
    cameraPos: [0.35, 0.85, 1.2],
    cameraLookAt: [0.2, 0.5, -10],
    accentColor: '#83B83D',
    startProgress: 0.62,
    endProgress: 0.78,
    startFrame: 75,
    endFrame: 93,
  },
  {
    id: 'harvest',
    stageNumber: '06',
    nameHi: 'लहलहाती पैदावार',
    nameEn: 'Bountiful Harvest & Golden Yield',
    shortLabel: '06 पैदावार',
    shortLabelEn: '06 Harvest',
    headlineHi: 'समृद्ध पैदावार, किसान की मुस्कान।',
    headlineLine1: ['समृद्ध', 'पैदावार,'],
    headlineLine2: ['किसान', 'की', 'मुस्कान।'],
    supportingHi: 'वर्मा खाद भंडार — खेती के हर महत्वपूर्ण कदम पर आपका साथी।',
    headlineEn: 'Bountiful golden yield brings a joyful smile to the farm.',
    headlineLine1En: ['Bountiful', 'Golden', 'Yield'],
    headlineLine2En: ['Brings', 'Prosperity', '&', 'Smiles.'],
    supportingEn: 'Verma Khad Bhandar — Standing faithfully with farmers through every stage of the agricultural journey.',
    imageFile: '/images/hero/stages/stage6-harvest-golden.webp',
    imageCredit: 'Karsten Würth (Unsplash)',
    cameraPos: [0.0, 1.6, 0.4],
    cameraLookAt: [0.0, 0.8, -15],
    accentColor: '#E8B94F',
    startProgress: 0.78,
    endProgress: 1.0,
    startFrame: 94,
    endFrame: 120,
  },
];

/**
 * Returns the active stage index (0 to 5) corresponding to normalized scroll progress (0.0 to 1.0)
 * synchronized with the extracted 120-frame video sequence.
 */
export function getStageIndexForProgress(progress: number): number {
  const p = Math.min(1, Math.max(0, progress));
  for (let i = 0; i < FARMING_STAGES.length; i++) {
    const stage = FARMING_STAGES[i];
    // Last stage covers up to 1.0
    if (i === FARMING_STAGES.length - 1) {
      if (p >= stage.startProgress) return i;
    } else if (p >= stage.startProgress && p < stage.endProgress) {
      return i;
    }
  }
  return 0;
}
