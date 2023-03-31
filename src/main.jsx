import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Canvas>
            <Experience/>
        </Canvas>
    </StrictMode>
)
