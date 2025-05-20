
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FloatingSkillIcon from "./FloatingSkillIcon";

interface SkillsCloudProps {
  skills: string[];
}

const SkillsCloud = ({ skills }: SkillsCloudProps) => {
  // Generate positions in a spherical pattern
  const positions: Array<[number, number, number]> = [];
  const colors = ["#8B5CF6", "#D946EF", "#0EA5E9", "#6366F1", "#ffffff"];
  
  for (let i = 0; i < skills.length; i++) {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    
    const x = 3 * Math.sin(phi) * Math.cos(theta);
    const y = 3 * Math.sin(phi) * Math.sin(theta);
    const z = 3 * Math.cos(phi);
    
    positions.push([x, y, z]);
  }

  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
      <OrbitControls 
        enableZoom={false}
        autoRotate 
        autoRotateSpeed={0.5}
        enableDamping 
        dampingFactor={0.1}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />

      {skills.map((skill, i) => (
        <FloatingSkillIcon
          key={skill}
          text={skill}
          position={positions[i % positions.length]}
          color={colors[i % colors.length]}
          scale={0.8}
          rotationSpeed={Math.random() * 0.2 + 0.1}
          floatingSpeed={Math.random() * 0.4 + 0.3}
        />
      ))}
    </Canvas>
  );
};

export default SkillsCloud;
