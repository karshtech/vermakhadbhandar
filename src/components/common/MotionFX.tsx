import React, { useEffect, useRef, useMemo, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../../hooks/useMedia';

/**
 * Signature cinematic easing curve:
 * High initial acceleration, ultra-smooth asymptotic deceleration tail.
 * cubic-bezier(0.22, 1, 0.36, 1)
 */
export const EASE = [0.22, 1, 0.36, 1] as const;

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps buttons and interactive pills so they smoothly drift towards the cursor on desktop.
 * Layout-cached on pointer enter to avoid forced reflows during pointermove.
 * Flat and unaffected on touch screens or reduced-motion.
 */
export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.35,
  className = '',
}) => {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  const active = fine && !reduced;
  const rectRef = useRef<DOMRect | null>(null);

  const onEnter = (e: RPointerEvent<HTMLSpanElement>) => {
    if (!active) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const onMove = (e: RPointerEvent<HTMLSpanElement>) => {
    if (!active) return;
    const r = rectRef.current || e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={`inline-flex ${className}`}
      style={{ x, y }}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
};

interface TiltProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
}

/**
 * Subtle 3D tilt that follows the cursor in 3D perspective with a golden agricultural glare.
 * Caches element dimensions on pointer enter to prevent layout thrashing on move events.
 */
export const Tilt: React.FC<TiltProps> = ({
  children,
  max = 6,
  className = '',
  glare = true,
  ...rest
}) => {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const active = fine && !reduced;
  const rectRef = useRef<DOMRect | null>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);

  // Warm golden sunlight specular reflection
  const glareBg = useTransform(
    [gx, gy],
    ([a, b]) => `radial-gradient(circle at ${a} ${b}, rgba(253, 184, 19, 0.16), transparent 60%)`
  );

  const onEnter = (e: RPointerEvent<HTMLDivElement>) => {
    if (!active) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!active) return;
    const r = rectRef.current || e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    rectRef.current = null;
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      {...rest}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={active ? { rotateX: rx, rotateY: ry, transformPerspective: 1000, ...(rest.style as object) } : rest.style}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
      {active && glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-overlay"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
};

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

/**
 * Word-by-word blur-to-focus reveal for Hindi and English headings.
 * Fully accessible with aria-label on parent and aria-hidden on masked segments.
 */
export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  as = 'span',
}) => {
  const Tag = motion[as];
  const words = useMemo(() => text.split(' '), [text]);

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
        <span key={i} aria-hidden className="inline-block overflow-hidden pt-[0.25em] pb-[0.15em] -mt-[0.25em] align-bottom">
          <motion.span
            className="inline-block pt-[0.05em]"
            variants={{
              hidden: { y: '105%', opacity: 0, filter: 'blur(8px)' },
              show: {
                y: '0%',
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.85, ease: EASE },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

interface AgriculturalParticlesProps {
  count?: number;
  color?: string; // rgb format
  className?: string;
}

/**
 * High-performance golden agricultural pollen/chaff spores on HTML5 canvas.
 * Automatically pauses animation loop when scrolled out of view via IntersectionObserver.
 * Dynamically scales down particle count on mobile viewports to preserve battery life.
 */
export const AgriculturalParticles: React.FC<AgriculturalParticlesProps> = ({
  count = 36,
  color = '253, 184, 19',
  className = '',
}) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile optimization: clamp particle count
    const isMobile = window.innerWidth < 768;
    const effectiveCount = isMobile ? Math.min(count, 18) : count;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const dots = Array.from({ length: effectiveCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: -Math.random() * 0.00022 - 0.00007,
      a: Math.random() * 0.55 + 0.15,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    let running = false;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.tw += dt * 0.002;

        if (d.y < -0.02) {
          d.y = 1.02;
          d.x = Math.random();
        }
        if (d.x < -0.02) d.x = 1.02;
        if (d.x > 1.02) d.x = -0.02;

        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tw));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });

    io.observe(canvas);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [count, color, reduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};
