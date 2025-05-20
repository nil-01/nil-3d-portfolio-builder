
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface TimelineNodeProps {
  position: [number, number, number];
  date: string;
  title: string;
  active?: boolean;
}

const TimelineNode = ({ position, date, title, active = false }: TimelineNodeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      if (active) {
        const time = clock.getElapsedTime();
        groupRef.current.scale.x = 1 + Math.sin(time * 2) * 0.05;
        groupRef.current.scale.y = 1 + Math.sin(time * 2) * 0.05;
        groupRef.current.scale.z = 1 + Math.sin(time * 2) * 0.05;
      }
    }
  });
  
  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={active ? "#8B5CF6" : "#6366F1"} 
          emissive={active ? "#8B5CF6" : "#6366F1"} 
          emissiveIntensity={active ? 0.5 : 0.2} 
        />
      </mesh>
      
      <Text
        position={[0, 0.25, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {date}
      </Text>
      
      <Text
        position={[0, -0.25, 0]}
        fontSize={0.12}
        color="#cccccc"
        anchorX="center"
        anchorY="top"
      >
        {title}
      </Text>
    </group>
  );
};

interface ExperienceTimeline3DProps {
  experiences: Array<{
    date: string;
    title: string;
    active?: boolean;
  }>;
}

const ExperienceTimeline3D = ({ experiences }: ExperienceTimeline3DProps) => {
  const linePoints = useMemo(() => {
    const points = [];
    const distance = 1.5;
    
    for (let i = 0; i < experiences.length; i++) {
      points.push(new THREE.Vector3(i * distance - (experiences.length - 1) * distance / 2, 0, 0));
    }
    
    return points;
  }, [experiences]);
  
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Line
        points={linePoints}
        color="#6366F1"
        lineWidth={3}
      />
      
      {experiences.map((exp, i) => (
        <TimelineNode
          key={i}
          position={[
            i * 1.5 - (experiences.length - 1) * 1.5 / 2,
            0,
            0
          ]}
          date={exp.date}
          title={exp.title}
          active={exp.active}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </Canvas>
  );
};

export default ExperienceTimeline3D;
