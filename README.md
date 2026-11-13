# VERMA KHAD BHANDAR (वर्मा खाद भंडार)
### Premium Cinematic Multi-Page Agricultural Website

A production-ready, cinematic, multi-page agricultural business website for **VERMA KHAD BHANDAR (वर्मा खाद भंडार)** — a premier fertilizer and agricultural supplies shop.

---

## 🌾 Multi-Page Website Architecture

| Route | Page | Purpose & Experience |
| :--- | :--- | :--- |
| `/` | **Home (होम)** | Full-screen 3D agricultural hero (Three.js/R3F), **Skiper 16 3D Sticky Card Stacking Storytelling** (*Soil → Growth → Harvest*), brand overview, featured categories, and CTA. |
| `/about` | **About Us (हमारे बारे में)** | Editorial brand introduction, core mission, uncompromised commitment to farmers, and customer trust values. |
| `/products` | **Products (उत्पाद)** | 4 Core categories (Fertilizers, Seeds, Pesticides, Plant Nutrients), clean category filtering, search, interactive Farm Guidance Calculator, and direct WhatsApp inquiry. |
| `/agriculture` | **Agriculture Knowledge (कृषि जानकारी)** | Agronomic guidance on soil management, NPK balance, certified seed selection, responsible crop protection, Seasonal Crop Advisory Calendar (Rabi, Kharif, Zaid), and farmer FAQs. |
| `/why-choose-us` | **Why Choose Us (हमें क्यों चुनें)** | In-depth breakdown of the 4 core pillars: Quality Products, Helpful Guidance, Customer Trust, and Continuous Farming Support. |
| `/visit` | **Visit Us (हमारी दुकान)** | Preserves the authentic basement-level storefront, recessed entrance, corrugated metal roofing, high-resolution photo inspection lightbox, and Google Maps directions. |
| `/contact` | **Contact (संपर्क)** | Phone, WhatsApp chat launcher, location details, business hours, and interactive inquiry form with validation and feedback. |

---

## ✨ Cinematic Agricultural Journey (Skiper 16 Sticky Cards Effect)

The **Cinematic Agricultural Journey** (`StorytellingSection.tsx`) exclusively features the **Skiper 16 StickyCard_001** 3D scroll stacking effect:
- **Scroll Tracking**: Driven by `useScroll` from `framer-motion` tracking the storytelling viewport container (`offset: ["start start", "end end"]`).
- **Scale Transforms**:
  - `Stage 01 (Soil)`: Enters and pins to the top of the viewport. As the user continues scrolling, it scales down smoothly to `0.84`.
  - `Stage 02 (Growth)`: Glides up, stacks directly on top of Stage 01 with a `+32px` vertical header reveal, and scales to `0.92`.
  - `Stage 03 (Harvest)`: Slides up to complete the card stack at full scale (`1.0`), concluding the journey from healthy soil to abundant harvest.

---

## 🎨 UI/UX Pro Max & Design Tokens

Designed in accordance with **UI/UX Pro Max** standards:
- **No Emojis as Icons**: 100% SVG vector icons (Lucide React) with semantic accessible names.
- **Contrast & Legibility**: Body text contrast exceeds 4.5:1 on both dark cinematic surfaces and warm off-white content surfaces.
- **Rhythm & Spacing**: Strict 4dp/8dp spacing rhythm (`px-4`, `py-6`, `p-8`, `gap-8`).
- **Touch-Friendly**: Minimum 44x44pt tap target on mobile controls and floating actions.
- **Accessible Motion**: `framer-motion` variants respecting `prefers-reduced-motion`.

---

## 🚀 Running the Project

### 1. Development Server
```bash
npm run dev
```

### 2. Production Build
```bash
npm run build
```

### 3. Run Automated System Verification
```bash
npm test
```
