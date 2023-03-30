import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export default function Experience() {
    const boxRef = useRef();

    useFrame(() =>
        boxRef.current.rotation.y += 0.01
    )
    return (
        <>
            <mesh position-x={-2}>
                <sphereGeometry/>
                <meshNormalMaterial/>
            </mesh>
            <mesh ref={boxRef} position-x={2}>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>
            <mesh position={-1} scale={10} rotation-x={-Math.PI * 0.5}>
                <planeGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </>
    )
}