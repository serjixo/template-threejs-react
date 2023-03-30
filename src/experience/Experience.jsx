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
            <directionalLight position={[1, 2, 3]} intensity={1.5}/>
            <ambientLight position={[2, 2, 3]} intensity={0.5}/>
            <mesh position-x={-2}>
                <sphereGeometry/>
                <meshStandardMaterial color={'#bada55'}/>
            </mesh>
            <mesh ref={boxRef} position-x={2}>
                <boxGeometry/>
                <meshStandardMaterial color={'#bafd66'}/>
            </mesh>
            <Floor/>
        </>
    )
}