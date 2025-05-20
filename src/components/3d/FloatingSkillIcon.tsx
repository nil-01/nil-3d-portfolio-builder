
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingSkillIconProps {
  text: string;
  position: [number, number, number];
  color?: string;
  scale?: number;
  rotationSpeed?: number;
  floatingSpeed?: number;
}

const FloatingSkillIcon = ({
  text,
  position,
  color = "#ffffff",
  scale = 1,
  rotationSpeed = 0.2,
  floatingSpeed = 0.5,
}: FloatingSkillIconProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Unique offset for this icon to create varied movement
  const offset = useRef({
    x: Math.random() * 2 * Math.PI,
    y: Math.random() * 2 * Math.PI,
    z: Math.random() * 2 * Math.PI,
  });

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += rotationSpeed * 0.005;
      
      // Floating effect with unique pattern
      const time = clock.getElapsedTime();
      const floatX = Math.sin(time * floatingSpeed + offset.current.x) * 0.1;
      const floatY = Math.sin(time * floatingSpeed + offset.current.y) * 0.1;
      const floatZ = Math.sin(time * floatingSpeed + offset.current.z) * 0.05;
      
      groupRef.current.position.x = position[0] + floatX;
      groupRef.current.position.y = position[1] + floatY;
      groupRef.current.position.z = position[2] + floatZ;
    }
  });

  return (
    <group ref={groupRef as any} position={position} scale={[scale, scale, scale]}>
      <Text
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineColor="#000000"
        outlineWidth={0.01}
      >
        {text}
      </Text>
    </group>
  );
};

export default FloatingSkillIcon;
