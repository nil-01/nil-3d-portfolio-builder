
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSpring } from "@react-spring/three";

interface Point {
  position: [number, number, number];
  color: string;
}

const BackgroundParticles = ({ count = 500 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particleColors = useMemo(() => {
    const colors = ["#8B5CF6", "#D946EF", "#0EA5E9", "#6366F1"];
    return Array.from({ length: count }, () => 
      colors[Math.floor(Math.random() * colors.length)]
    );
  }, [count]);
  
  const points = useMemo<Point[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      color: particleColors[i],
    }));
  }, [count, particleColors]);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);
    
    points.forEach((point, i) => {
      const i3 = i * 3;
      positions[i3] = point.position[0];
      positions[i3 + 1] = point.position[1];
      positions[i3 + 2] = point.position[2];
      
      const color = new THREE.Color(point.color);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    });
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [points]);
  
  useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.75 },
    config: { duration: 2000 },
  });
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
    }
  });
  
  return (
    <points ref={mesh} geometry={particlesGeometry}>
      <pointsMaterial 
        size={0.05} 
        vertexColors 
        transparent 
        depthWrite={false} 
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default BackgroundParticles;
