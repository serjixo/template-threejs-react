import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import Floor from "./world/Floor.jsx";

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
            <Floor/>
        </>
    )
}