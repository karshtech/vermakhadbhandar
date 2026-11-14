export interface NavItem {
  id: string;
  path: string;
  labelEn: string;
  labelHi: string;
  shortLabelEn?: string;
  shortLabelHi?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', path: '/', labelEn: 'Home', labelHi: 'होम' },
  { id: 'about', path: '/about', labelEn: 'About Us', labelHi: 'हमारे बारे में' },
  { id: 'products', path: '/products', labelEn: 'Products', labelHi: 'उत्पाद' },
  { id: 'agriculture', path: '/agriculture', labelEn: 'Agriculture', labelHi: 'कृषि जानकारी' },
  { id: 'why-choose-us', path: '/why-choose-us', labelEn: 'Why Choose Us', labelHi: 'हमें क्यों चुनें' },
  { id: 'visit', path: '/visit', labelEn: 'Visit Store', labelHi: 'हमारी दुकान' },
  { id: 'contact', path: '/contact', labelEn: 'Contact', labelHi: 'संपर्क' },
];
