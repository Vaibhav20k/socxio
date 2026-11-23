import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Knot({ color }) {
    const mesh = useRef();
    const mat = useRef();
    const target = useRef(new THREE.Color(color));
    target.current.set(color);
    useFrame((s, d) => {
        if (mesh.current) {
            mesh.current.rotation.x += d * 0.12;
            mesh.current.rotation.y += d * 0.18;
            mesh.current.position.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.25;
        }
        if (mat.current) mat.current.color.lerp(target.current, 0.05);
    });
    return (
        <mesh ref={mesh}>
            <torusKnotGeometry args={[1.45, 0.4, 200, 28]} />
            <meshBasicMaterial ref={mat} wireframe transparent opacity={0.4} />
        </mesh>
    );
}

function Ico({ color }) {
    const mesh = useRef();
    const mat = useRef();
    const target = useRef(new THREE.Color(color));
    target.current.set(color);
    useFrame((s, d) => {
        if (mesh.current) {
            mesh.current.rotation.x -= d * 0.08;
            mesh.current.rotation.z += d * 0.1;
            mesh.current.position.x = Math.sin(s.clock.elapsedTime * 0.4) * 2.6;
            mesh.current.position.y = Math.cos(s.clock.elapsedTime * 0.5) * 1.2;
        }
        if (mat.current) mat.current.color.lerp(target.current, 0.05);
    });
    return (
        <mesh ref={mesh} scale={0.55}>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial ref={mat} wireframe transparent opacity={0.55} />
        </mesh>
    );
}

function Dust({ color }) {
    const ref = useRef();
    const mat = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            const r = 4.5 + Math.random() * 4;
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(p) * Math.cos(t);
            arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
            arr[i * 3 + 2] = r * Math.cos(p);
        }
        return arr;
    }, []);
    const target = useRef(new THREE.Color(color));
    target.current.set(color);
    useFrame((s) => {
        if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.03;
        if (mat.current) mat.current.color.lerp(target.current, 0.05);
    });
    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial ref={mat} size={0.025} transparent opacity={0.5} sizeAttenuation />
        </points>
    );
}

function Rig() {
    useFrame((s) => {
        s.camera.position.x += (s.pointer.x * 0.9 - s.camera.position.x) * 0.04;
        s.camera.position.y += (s.pointer.y * 0.6 - s.camera.position.y) * 0.04;
        s.camera.lookAt(0, 0, 0);
    });
    return null;
}

export const ThreeScene = ({ color = '#B82346' }) => (
    <div className="absolute inset-0 pointer-events-none opacity-25 sm:opacity-100 transition-opacity duration-700" data-testid="webgl-hero-canvas">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
            <Rig />
            <Knot color={color} />
            <Ico color={color} />
            <Dust color={color} />
        </Canvas>
    </div>
);
