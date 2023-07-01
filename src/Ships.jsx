import React, { useRef } from 'react'
import { Cloud, Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

function Sword() {
  const { nodes, materials } = useGLTF('/assets/sword.glb')
  return (
    <group dispose={null} scale={.01} position={[3.49, 4.13, 0.039]} rotation={[2, -.5, -.5]}>
      <mesh geometry={nodes['Box002_Material_#26_0'].geometry} material={materials.Material_26} position={[1.21, 0, -0.7]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

function Map() {
  const { nodes, materials } = useGLTF('/assets/map.glb')
  return (
    <group rotation={[-Math.PI/2, 0, -Math.PI/2]} dispose={null} position={[3.17, 3.85, 0.3]} scale={1}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default function Ships() {  
  const { nodes, materials } = useGLTF('/assets/ship.glb')
  const cloudMid = useRef(null)
  const cloudTop = useRef(null)
  const cloudBot = useRef(null)
  const splashRef = useRef(null)
  const splashRef2 = useRef(null)

  useFrame((state, delta) => {
    cloudMid.current.rotation.z += delta * -.1
    cloudTop.current.rotation.z += delta * .1
    cloudBot.current.rotation.z += delta * .1
  })

  return (
    <>
      
      <SunkenShip nodes={nodes} materials={materials} />
      <Float rotationIntensity={0} speed={2}>
        <Sword />
        <Map />
        <group dispose={null} position={[0,-2,0]} scale={.07} rotation={[0, -Math.PI/2, 0]}>
          <group>
            <mesh ref={cloudTop} geometry={nodes.Circle_Cloud_0.geometry} material={materials.Cloud} position={[-1.38, 250.33, 0.76]} rotation={[-Math.PI / 2, 0, 0]} scale={130.6} />
            <mesh ref={cloudMid} geometry={nodes.Circle001_Cloud_0.geometry} material={materials.Cloud} position={[-1.38, 223.46, 0.76]} rotation={[-Math.PI / 2, 0, -0.67]} scale={148.79} />
            <mesh ref={cloudBot} geometry={nodes.Circle002_Cloud_0.geometry} material={materials.Cloud} position={[-1.33, 66.25, 0.69]} rotation={[-Math.PI / 2, 0, 0]} scale={178.18} />
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder007_Bird_0.geometry} material={materials.Bird} position={[-140.24, 152.37, 35.99]} rotation={[-0.79, 0, 0]} scale={4.14} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder008_Bird_0.geometry} material={materials.Bird} position={[120,150,1]} rotation={[-0.28, 0.15, 0.33]} scale={4.14} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder009_Bird_0.geometry} material={materials.Bird} position={[53, 85.16, 77.94]} rotation={[-0.32, 0.27, -0.34]} scale={3.22} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder010_Bird_0.geometry} material={materials.Bird} position={[73.15, 115.7, -2.21]} rotation={[0.32, 0.36, 0.07]} scale={3.22} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder011_Bird_0.geometry} material={materials.Bird} position={[-60.37, 210.67, 12.07]} rotation={[0.11, 0.28, -0.28]} scale={4.14} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder012_Bird_0.geometry} material={materials.Bird} position={[-67, 136.5, -2.21]} rotation={[0.32, 0.36, 0.07]} scale={3.22} />
            </Float>
            <Float floatIntensity={2} speed={2}>
              <mesh geometry={nodes.Cylinder013_Bird_0.geometry} material={materials.Bird} position={[-97, 48.12, -30.01]} rotation={[0.32, 0.36, 0.07]} scale={3.22} />
            </Float>
          </group>
          <mesh rotation={[-Math.PI /2,0,0]} position={[0,46, -7]}>
            <meshLambertMaterial color={new THREE.Color(0x975807)} />
            <planeGeometry args={[50, 50]} />
          </mesh>
          <group rotation={[0,0,0]}>
            <group position={[0.37, 25.52, -8.21]} rotation={[-Math.PI / 2, 0, 0]} scale={67.17}>
              <mesh geometry={nodes.BezierCircle_Boat_0.geometry} material={materials.Boat} isShip />
              <mesh geometry={nodes.BezierCircle_GreenWarp_0.geometry} material={materials.GreenWarp} isShip />
            </group>
            <group position={[0, 73, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={11.39}>
              <mesh geometry={nodes.Cylinder001_Boat_0.geometry} material={materials.Boat} isShip />
              <mesh geometry={nodes.Cylinder001_Green001_0.geometry} material={materials['Green.001']} isShip />
            </group>
            <mesh geometry={nodes.Cube_Boat_0.geometry} material={materials.Boat} position={[0, 53.12, -40.63]} rotation={[-Math.PI / 2, 0, 0]} scale={15.64} isShip />
            <mesh geometry={nodes.Cylinder002_GreenWarp_0.geometry} material={materials.GreenWarp} position={[0, 120.33, 0]} rotation={[1.57, -1.57, -3.14]} scale={1.68} isShip />
            <mesh geometry={nodes.Cylinder003_Boat_0.geometry} material={materials.Boat} position={[0, 133.81, 55.88]} rotation={[-2.22, 0, 0]} scale={0.76} isShip />
            <mesh geometry={nodes.Cylinder004_Boat_0.geometry} material={materials.Boat} position={[0, 118.43, -39.99]} rotation={[-0.73, 0, 0]} scale={0.76} isShip />
            <mesh geometry={nodes.Cylinder005_Boat_0.geometry} material={materials.Boat} position={[-23.44, 116.05, 0.99]} rotation={[-1.32, 0.32, -0.08]} scale={0.65} isShip />
            <mesh geometry={nodes.Cylinder006_Boat_0.geometry} material={materials.Boat} position={[23.03, 118.43, 0.99]} rotation={[-1.32, -0.34, 0.09]} scale={0.65} />
            <mesh geometry={nodes.Plane_FlagBig_0.geometry} material={materials.FlagBig} position={[1.77, 132.88, 34.81]} rotation={[-0.81, 0, 0]} scale={46.88} isShip />
            <Float speed={10} rotationIntensity={0} >
              <mesh geometry={nodes.Plane001_PirateFlag_0.geometry} material={materials.PirateFlag} position={[-1.38, 226.68, -17.78]} rotation={[-0.04, -1.52, 3.11]} scale={16.91} isShip />
            </Float>
            <mesh geometry={nodes.Plane002_SplashA_0.geometry} material={materials.SplashA} position={[-10.78, 37.51, 69.6]} rotation={[0.31, -0.87, 0.24]} scale={16.49} />
            <mesh ref={splashRef2} geometry={nodes.Plane003_SplashA_0.geometry} material={materials.SplashA} position={[18.02, 46.73, 67.4]} rotation={[-2.71, -0.94, -2.82]} scale={15.07} />
            <mesh ref={splashRef} geometry={nodes.Plane004_SplashA_0.geometry} material={materials.SplashA} position={[33.53, 34.08, 47.61]} rotation={[-2.71, -0.94, -2.82]} scale={9.98} />
            <mesh geometry={nodes.Plane005_SplashA_0.geometry} material={materials.SplashA} position={[-24.36, 53.59, 69.6]} rotation={[0.44, -0.79, 0.41]} scale={11.25} />
            <mesh geometry={nodes.Plane006_SplashA_0.geometry} material={materials.SplashA} position={[-41.61, 39.19, 48.27]} rotation={[0.31, -0.87, 0.24]} scale={18.45} />
            <mesh geometry={nodes.Plane007_SplashA_0.geometry} material={materials.SplashA} position={[45.95, 34.85, 21.96]} rotation={[-2.71, -0.94, -2.82]} scale={10.04} />
            <mesh geometry={nodes.Plane008_SplashB_0.geometry} material={materials.SplashB} position={[21.77, 38.26, -76.99]} rotation={[0.85, -1.51, -0.63]} scale={17.45} />
            <mesh geometry={nodes.Plane009_SplashB_0.geometry} material={materials.SplashB} position={[-18.81, 38.26, -76.99]} rotation={[0.85, -1.51, -0.63]} scale={17.45} />
            <mesh geometry={nodes.Plane010_SplashA_0.geometry} material={materials.SplashA} position={[57.61, 56.88, -39.23]} rotation={[-2.71, -0.94, -2.82]} scale={10.04} />
            <mesh geometry={nodes.Plane011_SplashA_0.geometry} material={materials.SplashA} position={[-60.98, 37.41, -24.09]} rotation={[0.31, -0.87, 0.24]} scale={8.43} />
            <mesh geometry={nodes.Torus_Boat_0.geometry} material={materials.Boat} position={[0, 176.62, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={5.87} />
            <mesh geometry={nodes.Torus001_Boat_0.geometry} material={materials.Boat} position={[0, 173.95, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={4.68} />
            <mesh geometry={nodes.Torus002_Boat_0.geometry} material={materials.Boat} position={[0, 91.35, 112.42]} rotation={[-0.55, 0, 0]} scale={6.79} />
            <mesh geometry={nodes.Torus003_Boat_0.geometry} material={materials.Boat} position={[0, 88.82, 110.52]} rotation={[-0.55, 0, 0]} scale={6.79} />
          </group>
        </group>
      </Float>
    </>
  )
}

function SunkenShip({nodes, materials}) {
  return (
    <>
      <Cloud position={[0,3.5,35]} args={[3, 2]} depth={.7} opacity={.6} speed={.2} />
      <group dispose={null} position={[0,-9,28]} scale={.10} rotation={[Math.PI/5, Math.PI/4, 0]}>
        <group rotation={[0,0,0]}>
          <group position={[0, 73, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={11.39}>
            <mesh geometry={nodes.Cylinder001_Boat_0.geometry} material={materials.Boat} />
          </group>
          <mesh geometry={nodes.Cylinder002_GreenWarp_0.geometry} material={materials.GreenWarp} position={[0, 120.33, 0]} rotation={[1.57, -1.57, -3.14]} scale={1.68} />
          <mesh geometry={nodes.Cylinder003_Boat_0.geometry} material={materials.Boat} position={[0, 133.81, 55.88]} rotation={[-2.22, 0, 0]} scale={0.76} isShip />
          <mesh geometry={nodes.Cylinder004_Boat_0.geometry} material={materials.Boat} position={[0, 118.43, -39.99]} rotation={[-0.73, 0, 0]} scale={0.76} isShip />
          <mesh geometry={nodes.Cylinder005_Boat_0.geometry} material={materials.Boat} position={[-23.44, 116.05, 0.99]} rotation={[-1.32, 0.32, -0.08]} scale={0.65} isShip />
          <mesh geometry={nodes.Cylinder006_Boat_0.geometry} material={materials.Boat} position={[23.03, 118.43, 0.99]} rotation={[-1.32, -0.34, 0.09]} scale={0.65} />
          <mesh geometry={nodes.Plane001_PirateFlag_0.geometry} position={[-1.38, 226.68, -17.78]} rotation={[-0.04, -1.52, 3.11]} scale={16.91} />
          <mesh geometry={nodes.Plane001_PirateFlag_0.geometry} position={[-1.38, 232, -20]} rotation={[0.04, 1.52, -3.11]} scale={16.91} />
        </group>
      </group>
    </>
  )
}
