import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Canvas
        dpr={[1, 2]}
    >
        <Experience/>
    </Canvas>
)
