import React, { useRef } from 'react';
import { HeroScene } from './HeroScene';

/**
 * AgriculturalScene - Backward compatibility wrapper around the upgraded
 * 6-stage cinematic photographic HeroScene.
 */
export const AgriculturalScene: React.FC = () => {
  const progressRef = useRef<number>(0);
  return <HeroScene progressRef={progressRef} />;
};

export default AgriculturalScene;
