import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../../hooks/useMedia';

const LABELS: Record<string, string> = {
  view: 'देखें',
  zoom: 'ZOOM',
  calc: 'गणना',
  call: 'CALL',
  close: '✕',
};

/**
 * Premium Agricultural Custom Cursor
 * Subtle spring dot on desktop that smoothly expands into branded Hindi/English tags over interactive elements.
 * Automatically bypassed on touch screens or reduced-motion.
 */
export const CustomCursor: React.FC = () => {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const tagged = target?.closest<HTMLElement>('[data-cursor]');
      setMode(tagged?.dataset.cursor ?? null);
      setHoverLink(!tagged && !!target?.closest('a, button, [role="button"], input, select'));
    };

    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = mode ? LABELS[mode] : null;
  const size = label ? 64 : hoverLink ? 34 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full shadow-lg"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.85 : 1,
        backgroundColor: label
          ? 'rgba(16, 61, 40, 0.94)' // Deep Forest Green badge
          : hoverLink
          ? 'rgba(131, 184, 61, 0.18)' // Fresh Green ring
          : 'rgba(253, 184, 19, 0.95)', // Golden Harvest dot
        borderColor: label
          ? 'rgba(131, 184, 61, 0.6)'
          : hoverLink
          ? 'rgba(181, 217, 87, 0.8)'
          : 'rgba(253, 184, 19, 0.4)',
        boxShadow: label
          ? '0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(131, 184, 61, 0.3)'
          : hoverLink
          ? '0 0 12px rgba(131, 184, 61, 0.3)'
          : '0 0 8px rgba(253, 184, 19, 0.6)',
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
    >
      <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }} />
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-hindi text-[11px] font-bold tracking-wider text-[#F7F6EF]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
