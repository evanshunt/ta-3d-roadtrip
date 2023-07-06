import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

import Canmore from './models/Canmore.jsx'

createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <OrbitControls autoRotate={true} makeDefault={true} />
    <Stage adjustCamera={true}>
      <Canmore />
    </Stage>
  </Canvas>,
)
