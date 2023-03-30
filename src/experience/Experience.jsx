import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import Floor from "./world/Floor.jsx";
import CustomObjectTemplate from "../CustomObjectTemplate.jsx";
import {OrbitControls} from "@react-three/drei";


export default function Experience() {
    const boxRef = useRef();

    useFrame((state, delta) =>
        boxRef.current.rotation.y += delta
    )

    return (
        <>
            <OrbitControls/>
            <directionalLight position={[1, 2, 3]} intensity={1.5}/>
            <ambientLight position={[2, 2, 3]} intensity={0.5}/>
            <CustomObjectTemplate/>
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