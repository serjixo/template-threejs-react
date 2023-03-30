import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Canvas>
            <mesh>
                <torusKnotGeometry/>
                <meshNormalMaterial/>
            </mesh>
        </Canvas>
    </>
)
