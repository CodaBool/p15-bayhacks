import React  from "react"
import { useFrame } from "@react-three/fiber"
import { ScrollControls, useScroll, Sky, Plane, useDetectGPU, PerformanceMonitor } from "@react-three/drei"
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f"
import { getGPUTier } from 'detect-gpu'
import { Stats } from "@react-three/drei"
import { getProject, val } from "@theatre/core"
import Ships from "./Ships"
import Water from "./Water"
import SkyCustom from "./Sky"
import Text from './Text'
import state from "./fly.json"
import wavesAudio from '/assets/waves.mp3'
import Audio from './Audio.jsx'
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export const sheet = getProject("Fly Through", { state }).sheet("Scene")

export default function App() {
  const GPUTier = useDetectGPU()
  const ref = useRef(null)
  const [fps, setFPS] = useState()
  const [safari, setSafari] = useState(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))

  useEffect(() => {
    console.log('gpu', GPUTier)
    console.log('reported browser & machine =', navigator?.userAgent)
    if (navigator?.hardwareConcurrency) console.log('processors cores for threading =', navigator?.hardwareConcurrency)
    if (navigator?.deviceMemory) console.log('memory =', navigator?.deviceMemory)
    if (navigator?.gpu) console.log('additional gpu data =', navigator?.gpu)
    if (navigator?.userAgentData) console.log('reported browser & machine =', navigator?.userAgentData)
  }, [])

  useEffect(() => {
    if (fps) console.log('FPS', fps)
  }, [fps])

  return (
    <>
      <ScrollControls pages={5} distance={0.9036}>
        <SheetProvider sheet={sheet}>
          <Camera />
        </SheetProvider>
        <Ships />
        <ambientLight intensity={.5} />
        {
          (safari || GPUTier < 3)
          ? <>
              <Plane rotation={[-Math.PI/2,0,0]} args={[1000,1000]} position={[0,-.7,0]}>
                <meshLambertMaterial color="#4183ff" />
              </Plane>
              <Sky />
            </>
          : <>
              <Water />
              <SkyCustom />
            </>
        }
      </ScrollControls>
      <Text setSafari={setSafari} safari={safari} />
      <Stats showPanel={0} ref={ref} />
      <PerformanceMonitor lipflops={3} onChange={({averages}) => setFPS(averages.reduce((total, num) => total + num, 0)/averages.length)} onIncline={() => console.log('high fps detected')} onDecline={() => console.log('low fps detected')} ></PerformanceMonitor>
      <Audio file={wavesAudio} />
    </>
  )
}

function Camera() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    sheet.sequence.position = scroll.offset * sequenceLength
  })

  return (
    <PerspectiveCamera
      theatreKey="Camera"
      makeDefault
      position={[0, 0, 0]}
      fov={90}
      near={0.1}
      far={70}
    />
  )
}