"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

function PhotoBox() {
  const meshRef = useRef();
  
  // Make sure your images are in the /public folder
  const textures = useTexture([
    '/1.jpg', '/2.jpg', '/3.jpg', 
    '/4.jpg', '/5.jpg', '/6.jpg'
  ]);

  // This hook runs on every frame, creating the animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Auto-rotate speed
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      {/* Apply each texture to a different face of the cube */}
      {textures.map((texture, index) => (
        <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
      ))}
    </mesh>
  );
}

export default function MemoriesPage() {
  return (
    <div className="relative w-screen h-screen bg-pink-100">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PhotoBox />
        {/* OrbitControls allows rotating the object with mouse/touch */}
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>

      <div className="absolute top-5 left-5 z-10">
        <Link href="/celebrate" className="px-4 py-2 bg-white text-rose-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          ← Back
        </Link>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 text-white p-2 rounded-lg text-sm md:text-base">
        Drag the box to see our memories!
      </div>
    </div>
  );
}