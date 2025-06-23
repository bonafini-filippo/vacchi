'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

function RotatingCube() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00d4aa"
        transparent
        opacity={0.8}
        emissive="#00c4f4"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export function FloatingCube() {
  return (
    <motion.div
      className="absolute top-1/2 right-10 w-32 h-32 lg:w-48 lg:h-48"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
      </Canvas>
    </motion.div>
  );
}
