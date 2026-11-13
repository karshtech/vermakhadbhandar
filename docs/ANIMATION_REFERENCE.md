# ANIMATION REFERENCE MANUAL: BORROWED TECHNIQUES FOR VERMA KHAD BHANDAR

**Reference Source:** `C:\Users\karsh\Desktop\websites-source-codes\netflix-portfolio`  
**Application Target:** `VERMA KHAD BHANDAR (वर्मा खाद भंडार)`  
**Purpose:** Technical dissection of signature motion patterns and their exact agricultural adaptations.

---

## 1. MASTER CINEMATIC EASING CURVE

### Technical Dissection
- **Source:** `src/index.css` (Line 12) & `src/components/fx.tsx` (Line 5)
- **Mathematical Formula:** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Behavioral Characteristics:**
  - Starts with high instantaneous acceleration.
  - Spends 70% of its duration in a smooth, asymptotic deceleration tail.
  - Eliminates the robotic bounce of standard springs while retaining physical weight.

### Source Code
```ts
export const EASE = [0.22, 1, 0.36, 1] as const;
```

### Adaptation for Verma Khad Bhandar
Applied globally to all Framer Motion component entrances, modal reveals, tab transitions, and section scroll triggers. Pairs naturally with agricultural growth motifs (rapid emergence, gentle settling).

---

## 2. WORD-BY-WORD MASKED BLUR REVEAL (`RevealText`)

### Technical Dissection
- **Source:** `src/components/fx.tsx` (Lines 73–102)
- **Library:** Framer Motion (`motion.span`, `whileInView`, `variants`)
- **Key Mechanics:**
  - Words are split via `text.split(' ')`.
  - Parent container staggers children (`staggerChildren: 0.06`).
  - Each word is placed inside an `overflow-hidden` mask container with bottom padding (`pb-[0.08em]`) to prevent descenders from being clipped.
  - Each word translates vertically from `y: '105%'` with `filter: 'blur(8px)'` to `y: '0%'` and `blur(0px)`.
  - Fully accessible: Parent preserves screen-reader text via `aria-label={text}`, while animated fragments carry `aria-hidden`.

### Source Code
```tsx
export function RevealText({ text, className = '', delay = 0, as = 'span' }: RevealTextProps) {
  const Tag = motion[as];
  const words = text.split(' ');
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-4% 0px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', opacity: 0, filter: 'blur(8px)' },
              show: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
```

### Adaptation for Verma Khad Bhandar
- **Hero Headline:** *"हर खेत की तरक्की, हमारी जिम्मेदारी।"*
- **Agricultural Journey Section:** *"बीज से लेकर समृद्ध फसल तक का सफर"*
- **Storefront Headline:** *"हमारी दुकान पर आपका स्वागत है।"*
Transforms static Devanagari typography into impactful editorial statements.

---

## 3. SPRING 3D TILT WITH INTERACTIVE GLARE (`Tilt`)

### Technical Dissection
- **Source:** `src/components/fx.tsx` (Lines 34–71)
- **Libraries:** Framer Motion (`useMotionValue`, `useSpring`, `useTransform`)
- **Key Mechanics:**
  - Normalized cursor position `(px, py)` inside the element bounding box:
    ```ts
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    ```
  - Rotation transformed with inverted spring physics:
    ```ts
    const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
    const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });
    ```
  - Dynamic specular glare overlay tracking cursor coordinates in real time:
    ```ts
    const glareBg = useTransform([gx, gy], ([a, b]) =>
      `radial-gradient(circle at ${a} ${b}, rgba(255,255,255,0.18), transparent 55%)`
    );
    ```
  - Hardware acceleration enabled via `[transform-style:preserve-3d]` and `transformPerspective: 1000`.
  - Automatically flat on touch devices via `useFinePointer()` check.

### Adaptation for Verma Khad Bhandar
- **Product Category Packaging:** Fertilizers, Seeds, Pesticides, and Plant Nutrients cards gain tactile 3D depth, resembling physical sacks and bottles under sunlight.
- **Storefront Photo Framing:** The original shop photograph tilts gently with a warm golden highlight glare.

---

## 4. POINTER MAGNETIC DRIFT (`Magnetic`)

### Technical Dissection
- **Source:** `src/components/fx.tsx` (Lines 8–32)
- **Libraries:** Framer Motion (`useSpring`, `motion.span`)
- **Key Mechanics:**
  - Two independent springs for horizontal and vertical displacement:
    ```ts
    const x = useSpring(0, { stiffness: 220, damping: 18 });
    const y = useSpring(0, { stiffness: 220, damping: 18 });
    ```
  - Calculates delta vector from the center of the control:
    ```ts
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
    ```
  - Smooth spring snap back to `(0, 0)` on pointer leave.
  - Gated by `useFinePointer() && !useReducedMotionPref()`.

### Adaptation for Verma Khad Bhandar
- **Floating WhatsApp Launcher & Direct Call Pills**: Buttons subtly pull toward the farmer's mouse pointer, inviting click engagement.
- **Primary CTAs**: "हमारे उत्पाद देखें" (Explore Products) and "संपर्क करें" (Contact Us) buttons.

---

## 5. INTERACTIVE SPRING CURSOR WITH LABELED BADGES (`CustomCursor`)

### Technical Dissection
- **Source:** `src/components/CustomCursor.tsx`
- **Libraries:** Framer Motion (`useMotionValue`, `useSpring`, `AnimatePresence`)
- **Key Mechanics:**
  - Position smoothed with high-mass spring: `{ stiffness: 600, damping: 40, mass: 0.4 }`.
  - Element sniffing via `(e.target as HTMLElement)?.closest('[data-cursor]')`.
  - Morphing states:
    - Default idle dot: `10px`
    - Over link/button: `34px` ring
    - `data-cursor="view"`: `72px` disc displaying `"VIEW"`
    - `data-cursor="play"`: `52px` disc displaying `"▶"`
    - `data-cursor="close"`: `52px` disc displaying `"✕"`
  - Press feedback: Scales down to `0.85` on `pointerdown`.
  - Automatically hidden on touch devices or under `prefers-reduced-motion`.

### Adaptation for Verma Khad Bhandar
- Use agricultural brand colors: Forest Green `#103D28` background with Golden Harvest `#FDB813` text for labelled badges:
  - `data-cursor="zoom"` on Storefront photo
  - `data-cursor="calc"` on Fertilizer Calculator
  - `data-cursor="view"` on Product cards
  - `data-cursor="call"` on Phone links

---

## 6. SMART HIDE-ON-SCROLL NAVBAR WITH `layoutId` UNDERLINE

### Technical Dissection
- **Source:** `src/components/Navbar.tsx`
- **Libraries:** Framer Motion (`useScroll`, `useMotionValueEvent`, `AnimatePresence`)
- **Key Mechanics:**
  - Delta scroll calculation:
    ```ts
    useMotionValueEvent(scrollY, 'change', (y) => {
      const prev = scrollY.getPrevious() ?? 0;
      setSolid(y > 40);
      setHidden(y > 400 && y > prev && !mobileNav);
    });
    ```
  - Header translates off-screen on downward scroll: `animate={{ y: hidden ? '-100%' : '0%' }}`.
  - Active navigation indicator uses shared layout:
    ```tsx
    {isActive && (
      <motion.span
        layoutId="nav-underline"
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#83B83D] rounded-full"
      />
    )}
    ```
  - Mobile drawer entrance uses clip-path wipe:
    ```tsx
    initial={{ clipPath: 'inset(0 0 100% 0)' }}
    animate={{ clipPath: 'inset(0 0 0% 0)' }}
    exit={{ clipPath: 'inset(0 0 100% 0)' }}
    ```

### Adaptation for Verma Khad Bhandar
Directly incorporated into [`Navbar.tsx`](file:///c:/Users/karsh/Desktop/verma%20khad%20bhandar/src/components/layout/Navbar.tsx). Frees up 100% of vertical viewport for agricultural inspection while ensuring instant retrieval when the user reverses scroll direction.

---

## 7. SHARED-ELEMENT EXPANSION WITH `layoutId` (`ProjectModal`)

### Technical Dissection
- **Source:** `src/components/ProjectModal.tsx` & `src/components/ProjectCard.tsx`
- **Libraries:** Framer Motion (`layoutId`, `LayoutGroup`)
- **Key Mechanics:**
  - Card element and Modal dialog share identical layout IDs:
    - Card thumbnail: `<motion.div layoutId={'art-' + id}>`
    - Card title: `<motion.h3 layoutId={'title-' + id}>`
    - Modal backdrop: `<motion.div layoutId={'art-' + id}>`
    - Modal title: `<motion.h2 layoutId={'title-' + id}>`
  - When state changes, Framer Motion animates the physical bounding box from the card grid directly into the full-screen dialog without visual tearing.
  - Integrates `useScrollLock(true)` to lock the underlying Lenis scroll instance while keeping the modal scrollable (`data-lenis-prevent`).

### Adaptation for Verma Khad Bhandar
- **Product Category Quick-View**: Clicking "खाद एवं उर्वरक" expands the card directly into a detailed application advisory dialog detailing dosage (किलो/एकड़), application timing, and soil compatibility.
- **Storefront Photo Lightbox**: Smoothly expands the physical shop image into full-screen view.

---

## 8. ACCORDION HOVER PUSH ON CARD RAILS (`ContinueWatching`)

### Technical Dissection
- **Source:** `src/components/ContinueWatching.tsx` (Lines 35–55)
- **Libraries:** Framer Motion (`animate={{ x: shift }}`)
- **Key Mechanics:**
  - When card `i` is hovered, neighbor cards shift away from it:
    ```ts
    const shift = fine && hovered !== null && hovered !== i
      ? (i < hovered ? -16 : 16)
      : 0;
    ```
  - Hovered card scales up (`scale: 1.08`) and pops to `zIndex: 10`.
  - Creates the signature streaming carousel accordion expansion.

### Adaptation for Verma Khad Bhandar
Applied to the Seasonal Crop Calendar and Product Highlights rails on the homepage and agriculture page.

---

## 9. SCROLL-LINKED LETTER SPACING & FOCUS BLUR (`FinalCTA`)

### Technical Dissection
- **Source:** `src/components/FinalCTA.tsx` (Lines 9–25)
- **Libraries:** Framer Motion (`useScroll`, `useTransform`)
- **Key Mechanics:**
  - Target container scroll progress linked to typographic attributes:
    ```ts
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
    const spacing = useTransform(scrollYProgress, [0, 1], ['0.5em', '0.02em']);
    const blur = useTransform(scrollYProgress, [0, 1], ['blur(14px)', 'blur(0px)']);
    const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
    ```
  - As the section scrolls up, wide tracking contracts into tight, crisp focus.

### Adaptation for Verma Khad Bhandar
Applied to the concluding call to action: *"हर खेत की तरक्की, हमारी जिम्मेदारी"* before the footer.

---

## 10. INTERSECTIONOBSERVER-PAUSED PARTICLES CANVAS (`Particles`)

### Technical Dissection
- **Source:** `src/components/fx.tsx` (Lines 114–188)
- **Libraries:** Pure HTML5 Canvas 2D + `IntersectionObserver` + `ResizeObserver`
- **Key Mechanics:**
  - Runs on `requestAnimationFrame` with delta-time (`dt`) calculation.
  - Automatically pauses RAF loop when the element leaves the viewport via `IntersectionObserver`.
  - Scales automatically with device pixel ratio `Math.min(window.devicePixelRatio || 1, 2)`.
  - Disabled under `prefers-reduced-motion`.

### Adaptation for Verma Khad Bhandar
Used for drifting golden pollen and harvest chaff particles across editorial sections, guaranteeing zero CPU/GPU battery drain when not visible.
