import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Modal from './Modal'
import Loading from './Loading'
import Classic from './Classic'
import { Canvas } from '@react-three/fiber'
import { Stats } from "@react-three/drei"
import { create } from 'zustand'
import './global.css'
// Theatre can be used to map camera keyframes 😎
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
// studio.extend(extension)
// studio.initialize()

export const useStore = create(set => ({
  showScreen: '3d',
  setShowScreen: id => set(() => ({ showScreen: id })),
  playingAudio: false,
  setPlayingAudio: bool => set(() => ({ playingAudio: bool })),
  muted: false,
  setMuted: bool => set(() => ({ muted: bool })),
}))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{height: '100vh', backgroundColor: '#171717'}}></div>}>
      <Canvas style={{height: '100vh', overflow: 'hidden'}} camera={{position: [-5,2,5], fov: 175}}>
        <App />
      </Canvas>
    </Suspense>
    
    <Modal />
    <Classic />
    <Loading />
  </React.StrictMode>
)