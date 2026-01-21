/**
 * QuantumParticles - Three.js Particle System
 * Creates an immersive quantum particle field with neural connections
 */

import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Generate random particle positions in a sphere
function generateParticlePositions(count, radius) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = radius * Math.cbrt(Math.random());

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Gradient colors: cyan to violet
        const t = Math.random();
        colors[i * 3] = 0 + t * 0.55; // R: 0 -> 0.55
        colors[i * 3 + 1] = 0.83 - t * 0.5; // G: 0.83 -> 0.33
        colors[i * 3 + 2] = 1; // B: 1
    }

    return { positions, colors };
}

// Animated Particle Field
function ParticleField({ count = 2000, radius = 8 }) {
    const pointsRef = useRef();
    const { positions, colors } = useMemo(() => generateParticlePositions(count, radius), [count, radius]);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

// Floating Quantum Orbs
function QuantumOrbs() {
    const orbsRef = useRef([]);

    const orbs = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ],
            scale: 0.2 + Math.random() * 0.3,
            color: i % 2 === 0 ? '#00d4ff' : '#8b5cf6',
            speed: 0.5 + Math.random() * 0.5
        }));
    }, []);

    useFrame(({ clock }) => {
        orbsRef.current.forEach((orb, i) => {
            if (orb) {
                orb.position.y += Math.sin(clock.getElapsedTime() * orbs[i].speed + i) * 0.003;
                orb.position.x += Math.cos(clock.getElapsedTime() * orbs[i].speed * 0.5 + i) * 0.002;
            }
        });
    });

    return (
        <>
            {orbs.map((orb, i) => (
                <Float
                    key={i}
                    speed={orb.speed}
                    rotationIntensity={0.2}
                    floatIntensity={0.5}
                >
                    <mesh
                        ref={el => orbsRef.current[i] = el}
                        position={orb.position}
                    >
                        <sphereGeometry args={[orb.scale, 32, 32]} />
                        <meshBasicMaterial
                            color={orb.color}
                            transparent
                            opacity={0.3}
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

// Neural Network Lines
function NeuralConnections({ count = 50 }) {
    const linesRef = useRef();

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 6);
        const colors = new Float32Array(count * 6);

        for (let i = 0; i < count; i++) {
            // Start point
            positions[i * 6] = (Math.random() - 0.5) * 15;
            positions[i * 6 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 6 + 2] = (Math.random() - 0.5) * 10;

            // End point
            positions[i * 6 + 3] = positions[i * 6] + (Math.random() - 0.5) * 3;
            positions[i * 6 + 4] = positions[i * 6 + 1] + (Math.random() - 0.5) * 3;
            positions[i * 6 + 5] = positions[i * 6 + 2] + (Math.random() - 0.5) * 3;

            // Colors
            const t = Math.random();
            colors[i * 6] = 0;
            colors[i * 6 + 1] = 0.83;
            colors[i * 6 + 2] = 1;
            colors[i * 6 + 3] = 0.55;
            colors[i * 6 + 4] = 0.33;
            colors[i * 6 + 5] = 0.97;
        }

        return { positions, colors };
    }, [count]);

    useFrame(({ clock }) => {
        if (linesRef.current) {
            linesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <lineSegments ref={linesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count * 2}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count * 2}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial
                vertexColors
                transparent
                opacity={0.2}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}

// Mouse Interaction
function MouseFollower() {
    const meshRef = useRef();
    const { viewport } = useThree();
    const mouse = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }, []);

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.x += (mouse.current.x * viewport.width * 0.3 - meshRef.current.position.x) * 0.05;
            meshRef.current.position.y += (mouse.current.y * viewport.height * 0.3 - meshRef.current.position.y) * 0.05;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.1} />
        </mesh>
    );
}

// Main Quantum Particles Component
export default function QuantumParticles({ className = '', interactive = true }) {
    return (
        <div className={`fixed inset-0 -z-10 ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 12], fov: 60 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                {/* Ambient lighting */}
                <ambientLight intensity={0.2} />

                {/* Main particle field */}
                <ParticleField count={1500} radius={10} />

                {/* Floating orbs */}
                <QuantumOrbs />

                {/* Neural connections */}
                <NeuralConnections count={30} />

                {/* Mouse interaction */}
                {interactive && <MouseFollower />}

                {/* Subtle camera controls for interactive mode */}
                {interactive && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                )}
            </Canvas>
        </div>
    );
}

// Lightweight version for mobile
export function QuantumParticlesLite({ className = '' }) {
    return (
        <div className={`fixed inset-0 -z-10 ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                gl={{ antialias: false, alpha: true }}
                dpr={1}
            >
                <ParticleField count={500} radius={12} />
            </Canvas>
        </div>
    );
}
