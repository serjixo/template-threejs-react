import React, {useRef} from "react";
import {extend, useFrame, useThree} from "@react-three/fiber";
import Floor from "./world/Floor.jsx";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

extend({OrbitControls})

export default function Experience() {
    let three = useThree();
    const boxRef = useRef();

    useFrame((state, delta) =>
        boxRef.current.rotation.y += delta
    )

    return (
        <>
            <orbitControls args={[three.camera, three.gl.domElement]}/>
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