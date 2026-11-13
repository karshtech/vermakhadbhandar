import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useReducedMotionPref } from '../../hooks/useMedia';

export interface TypingTextProps {
  /** Array of phrases to cycle through, or a single string */
  phrases: string | string[];
  /** Typing speed in ms per character/grapheme (default: 65ms) */
  typeSpeed?: number;
  /** Deletion speed in ms per character (default: 35ms) */
  deleteSpeed?: number;
  /** Pause duration in ms when phrase is fully typed (default: 2600ms) */
  pauseDuration?: number;
  /** Language hint for Intl.Segmenter ('hi' | 'en', default: 'hi') */
  lang?: string;
  /** Extra class name for container */
  className?: string;
  /** Extra class name for blinking cursor */
  cursorClassName?: string;
  /** Character or element for cursor (default: '|') */
  cursorChar?: string;
  /** Whether to loop through phrases (default: true if phrases.length > 1) */
  loop?: boolean;
}

/**
 * Splits text into true unicode graphemes (handling Hindi matras, conjuncts & viramas correctly)
 */
function getGraphemes(text: string, lang = 'hi'): string[] {
  const intlAny = Intl as unknown as { Segmenter?: new (l: string, opts: { granularity: string }) => { segment: (t: string) => Iterable<{ segment: string }> } };
  if (typeof Intl !== 'undefined' && intlAny.Segmenter) {
    try {
      const segmenter = new intlAny.Segmenter(lang, { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    } catch {
      // Fallback if locale isn't supported
    }
  }
  // Regex fallback matching Devanagari base characters + combining vowel signs, anusvara, visarga, virama
  const match = text.match(/[\s\S][\u0900-\u097F]*/g);
  return match || text.split('');
}

/**
 * Reusable Typewriter component engineered for bilingual (Hindi Devanagari + English) text.
 * Safely handles complex unicode conjuncts, includes blinking cursor,
 * and immediately falls back to full text when prefers-reduced-motion is enabled.
 */
export const TypingText: React.FC<TypingTextProps> = ({
  phrases,
  typeSpeed = 65,
  deleteSpeed = 35,
  pauseDuration = 2600,
  lang = 'hi',
  className = '',
  cursorClassName = '',
  cursorChar = '|',
  loop = true,
}) => {
  const phraseList = useMemo(() => (Array.isArray(phrases) ? phrases : [phrases]), [phrases]);
  const reducedMotion = useReducedMotionPref();

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedGraphemeCount, setDisplayedGraphemeCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phraseList[phraseIndex] || '';
  const graphemes = useMemo(() => getGraphemes(currentPhrase, lang), [currentPhrase, lang]);

  // Keep ref to avoid stale timer closures
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If reduced motion is preferred, show complete phrase immediately
    if (reducedMotion) {
      setDisplayedGraphemeCount(graphemes.length);
      return;
    }

    const isMultiple = phraseList.length > 1 && loop;

    if (!isDeleting) {
      // Typing phase
      if (displayedGraphemeCount < graphemes.length) {
        timerRef.current = setTimeout(() => {
          setDisplayedGraphemeCount((prev) => prev + 1);
        }, typeSpeed);
      } else if (isMultiple) {
        // Phrase complete, pause before deleting
        timerRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase (only if multiple phrases)
      if (displayedGraphemeCount > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayedGraphemeCount((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phraseList.length);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [
    displayedGraphemeCount,
    isDeleting,
    graphemes.length,
    phraseList.length,
    phraseIndex,
    loop,
    reducedMotion,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  const displayedText = reducedMotion
    ? currentPhrase
    : graphemes.slice(0, displayedGraphemeCount).join('');

  return (
    <span className={`inline-flex items-center ${className}`} aria-label={currentPhrase}>
      <span aria-hidden="true">{displayedText}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block animate-pulse font-mono font-normal text-[#E8B94F] ${cursorClassName}`}
      >
        {cursorChar}
      </span>
    </span>
  );
};
