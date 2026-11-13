import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { FARMING_STAGES } from '../config/farmingJourney';

// Warm Sun Disk with radiant atmospheric glow
const GoldenSunDisk: React.FC = () => {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!glowRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle pulsating glow
    const s = 1.8 + Math.sin(t * 1.2) * 0.05;
    glowRef.current.scale.set(s, s, s);
  });

  return (
    <group position={[12, 9, -40]}>
      {/* Core Sun Disk */}
      <mesh>
        <sphereGeometry args={[3.4, 32, 32]} />
        <meshBasicMaterial color="#FFF7DE" />
      </mesh>
      {/* Outer Golden Corona */}
      <mesh ref={glowRef} scale={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[3.4, 32, 32]} />
        <meshBasicMaterial
          color="#E8B94F"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
      {/* Extended Atmosphere Halo */}
      <mesh scale={[3.2, 3.2, 3.2]}>
        <sphereGeometry args={[3.4, 16, 16]} />
        <meshBasicMaterial
          color="#B5D957"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

// 3D Floating Pollen Spores reacting to scroll and ambient wind
const PollenSpores: React.FC<{ progressRef: React.MutableRefObject<number> }> = ({ progressRef }) => {
  const count = 320;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 48;
      pos[i * 3 + 1] = Math.random() * 14 - 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    const scrollP = progressRef.current || 0;

    // Gentle wind drift + subtle lift with scroll
    pointsRef.current.rotation.y = t * 0.02 + scrollP * 0.15;
    pointsRef.current.position.y = Math.sin(t * 0.35) * 0.15 + (scrollP - 0.5) * 0.8;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#E8B94F"
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Continuous Camera Choreography Controller mapping scroll travel
interface CameraRigProps {
  progressRef: React.MutableRefObject<number>;
}

const StoryboardCameraRig: React.FC<CameraRigProps> = ({ progressRef }) => {
  const { camera } = useThree();
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useFrame((state, delta) => {
    const progress = Math.min(1, Math.max(0, progressRef.current));

    // Pointer-driven gentle parallax (disabled on reduced motion)
    const px = reducedMotion ? 0 : state.pointer.x * 0.4;
    const py = reducedMotion ? 0 : state.pointer.y * 0.2;

    // Interpolate across stage camera positions
    const numStages = FARMING_STAGES.length;
    const segment = progress * (numStages - 1);
    const i = Math.min(Math.floor(segment), numStages - 2);
    const tRaw = segment - i;
    // Smooth hermite curve (ease-in-out)
    const t = tRaw * tRaw * (3 - 2 * tRaw);

    const p0 = FARMING_STAGES[i].cameraPos;
    const p1 = FARMING_STAGES[i + 1].cameraPos;
    const l0 = FARMING_STAGES[i].cameraLookAt;
    const l1 = FARMING_STAGES[i + 1].cameraLookAt;

    const targetPosX = THREE.MathUtils.lerp(p0[0], p1[0], t) + px;
    const targetPosY = THREE.MathUtils.lerp(p0[1], p1[1], t) + py;
    const targetPosZ = THREE.MathUtils.lerp(p0[2], p1[2], t);

    const lookX = THREE.MathUtils.lerp(l0[0], l1[0], t) + px * 0.2;
    const lookY = THREE.MathUtils.lerp(l0[1], l1[1], t);
    const lookZ = THREE.MathUtils.lerp(l0[2], l1[2], t);

    // Frame-rate independent exponential lerp for stutter-free camera travel
    const lerpSpeed = Math.min(1, 1 - Math.exp(-4.5 * delta));
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetPosX, lerpSpeed);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetPosY, lerpSpeed);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetPosZ, lerpSpeed);

    camera.lookAt(lookX, lookY, lookZ);
  });

  return null;
};

export interface HeroSceneProps {
  progressRef: React.MutableRefObject<number>;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ progressRef }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.8, 8.0], fov: 48, near: 0.1, far: 140 }}
        dpr={[1, 1.75]} // Clamped to 1.75 to prevent 4K mobile thermal throttling
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        {/* Transparent WebGL Canvas Overlay for Canvas 120-Frame Sequence */}

        {/* Ambient & Golden Hour Directional Lighting */}
        <ambientLight intensity={0.55} color="#83B83D" />
        <directionalLight
          position={[12, 14, -20]}
          intensity={1.75}
          color="#FFE2A4"
          castShadow={false}
        />
        <pointLight position={[0, 3, 2]} intensity={0.5} color="#E8B94F" />

        {/* Background Atmosphere Halo & 3D Golden Sun */}
        <GoldenSunDisk />

        {/* Pollen Particles & Camera Rig */}
        <PollenSpores progressRef={progressRef} />
        <StoryboardCameraRig progressRef={progressRef} />
      </Canvas>
    </div>
  );
};
