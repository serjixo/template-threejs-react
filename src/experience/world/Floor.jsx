import React from "react";

export default function Floor() {
    return (
        <mesh position={-1} scale={10} rotation-x={-Math.PI * 0.5}>
            <planeGeometry/>
            <meshStandardMaterial/>
        </mesh>
    )
}