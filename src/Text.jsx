import React, { useState } from 'react'
import { Float, Text3D, useTexture, useVideoTexture, Text, RoundedBox, Center, useDetectGPU } from "@react-three/drei"
import * as THREE from "three"
import { useStore } from './Main.jsx'
import { box1Title, box2Body, box2Title, box3Title, box4Body, box4Title, box5Title, box5Body, btn1, btn2, btn3 } from './text/index.jsx'

export default function AllText({setSafari, safari}) {
  const showScreen = useStore(state => state.showScreen)
  const setShowScreen = useStore(state => state.setShowScreen)

  return (
    <>
      <Box1 setSafari={setSafari} safari={safari} />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Button position={[-0.9, 9.59, 40.26]} rotation={[-3.04,0.51, -3.09]} scale={1} text={btn1} onClick={() => setShowScreen('modal1')} />
      <Button position={[-0.788, 9.207, 39.975]} rotation={[-3.04,0.509, -3.095]} scale={.9} text={btn2} onClick={() => setShowScreen('modal2')} />
      <Button position={[-0.698, 8.94, 39.77]} rotation={[-3.04,0.509, -3.095]} scale={.8} text={btn3} onClick={() => setShowScreen('modal3')} />
    </>
  )
}

function Button({scale, rotation, position, text, onClick}) {
  const [hovered, setHovered] = useState()
  const [down, setDown] = useState()

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={onClick} 
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setDown(true)}
      onPointerUp={() => setDown(false)}
    >
      <Center position={[.1,.5,.4]}>
        <RoundedBox args={[1,.2, .0001]} radius={.05} onClick={onClick}>
          <meshBasicMaterial color={hovered ? new THREE.Color(0x2e2e2e) : new THREE.Color(0x000000)}
        />
        </RoundedBox>
        <Text position={[0,0,.01]} maxWidth={18} fontSize={.1} onClick={onClick}>
          <meshBasicMaterial color={hovered ? new THREE.Color(0xc4d3ff) : new THREE.Color(0xffffff)} />
          {text}
        </Text> 
      </Center>
    </group>  
  )
}

// TUTORIAL
function Box1({setSafari, safari}) {
  const GPUTier = useDetectGPU()
  const texture = useVideoTexture(GPUTier.isMobile ? '/assets/scroll.mp4' : '/assets/scroll-desktop.mp4')
  return (
    <group scale={.1} position={[-6,1.5,4]} rotation={[0,-.75,0]} onClick={() => setSafari(!safari)}>
      <RoundedBox args={[20, 20, .0001]} radius={1}>
        <meshBasicMaterial
          color={GPUTier.isMobile ? new THREE.Color( 'rgb(45,45,45)'  ) : new THREE.Color(0x000000)}
        />
      </RoundedBox>
      <Center position={[0,9,1]}>
        <Text3D font="/assets/font-3d.json" size={1.8} height={.08} position={[-1.2,1,0]} >
          {box1Title}
        </Text3D>
      </Center>
      <Center position={[0,0,1]}>
        <mesh position={[0,0,0]} scale={3.5}>
          <meshBasicMaterial map={texture} toneMapped={false} />
          <planeGeometry args={[5, 5]} />
        </mesh>
      </Center>
    </group>
  )
}

// WELCOME
function Box2() {
  return (
    <group scale={.1} position={[-0.1,13,0.26]}>
      <RoundedBox args={[20, 20, .0001]} radius={.5}>
        <meshBasicMaterial color="black" transparent opacity={.9} />
      </RoundedBox>
      <Float floatIntensity={2} speed={2} rotationIntensity={.1}>
        <Center position={[0,9,1]}>
          <Text3D font="/assets/font-3d.json" height={.1}>
            {box2Title}
            <meshBasicMaterial color={new THREE.Color(0x8effa1)} />
          </Text3D>
        </Center>
      </Float>
      <Text position={[0,0,1]} maxWidth={18}>
        <meshBasicMaterial />
        {box2Body}
      </Text> 
    </group>
  )
}

// VIDEO
function Box3() {
  const texture = useTexture('/assets/video-thumb.jpg')
  const setShowScreen = useStore(state => state.setShowScreen)

  return (
    <group onClick={() => setShowScreen('box3')}>
      <mesh position={[4.269,4.213,0.6746]} rotation={[-1.566, -0.4, -1.579]} scale={[0.2268,0.1458, 1]} onClick={() => setShowScreen('box3')}>
        <meshBasicMaterial map={texture} toneMapped={false} />
        <planeGeometry args={[5, 5]} />
      </mesh>
      <group position={[4.35, 4.22,0.68]} rotation={[-1.56, -0.40, -1.57]} scale={.1}>
        <RoundedBox args={[12.4, 12.4, .000001]} radius={.4}>
          <meshBasicMaterial color="black" transparent opacity={.9} />
        </RoundedBox>
        <Center position={[0,5,.1]}>
          <Text3D font="/assets/font-3d.json" height={.01} size={.8}>
            {box3Title}
            <meshBasicMaterial color={new THREE.Color(0xff9465)} />
          </Text3D>
        </Center>
      </group>
    </group>
  )
}

// FAQ
function Box4() {
  return (
    <group scale={.06} position={[6.776, 2.84,-15.876]} rotation={[0.11, -0.08, 0.03]} >
      <RoundedBox args={[20, 20, .0001]} radius={.5}>
        <meshBasicMaterial color="black" transparent opacity={.9} />
      </RoundedBox>
      <Float floatIntensity={2} speed={2} rotationIntensity={.1}>
        <Center position={[0,8,1]}>
          <Text3D font="/assets/font-3d.json" height={.1}>
            {box4Title}
            <meshBasicMaterial color={new THREE.Color(0xb2c0ff)} />
          </Text3D>
        </Center>
      </Float>
      <Text position={[0,0,1]} maxWidth={18} fontSize={.8}>
        <meshBasicMaterial />
        {box4Body}
      </Text> 
    </group>
  )
}

// SCHEDULE
function Box5() {
  return (
    <group scale={.1} position={[-0.83, 11.85, 41.19]} rotation={[2.67, 0.43, -2.86]}>
      <RoundedBox args={[20, 20, .0001]} radius={.5}>
        <meshBasicMaterial color="black" transparent opacity={.9} />
      </RoundedBox>
      <Float floatIntensity={2} speed={2} rotationIntensity={.1}>
        <Center position={[0,8,1]}>
          <Text3D font="/assets/font-3d.json" height={.1}>
            {box5Title}
            <meshBasicMaterial color={new THREE.Color(0xffccb2)} />
          </Text3D>
        </Center>
      </Float>
      <Text position={[0,0,1]} maxWidth={18} fontSize={1}>
        <meshBasicMaterial />
        {box5Body}
      </Text> 
    </group>
  )
}