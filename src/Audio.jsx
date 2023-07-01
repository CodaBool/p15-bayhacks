import React, {useState, useEffect} from 'react'
import { useStore } from './Main.jsx'

let turnedOnce = false
export default function AudioPlayer({file})  {
  const showScreen = useStore(state => state.showScreen)
  const playingAudio = useStore(state => state.playingAudio)
  const setPlayingAudio = useStore(state => state.setPlayingAudio)
  const muted = useStore(state => state.muted)
  const setMuted = useStore(state => state.setMuted)

  const [audio] = useState(new Audio(file))

  audio.volume = 0.1
  audio.loop = true

  function handleFirstClick() {
    if (!playingAudio && !turnedOnce) {
      turnedOnce = true
      if (!localStorage.getItem('mute')) {
        setPlayingAudio(true)
      }
    }
  }

  useEffect(() => {
    // normally there is a skip on turning the audio on for box3
    // but the first page click audio goes around that
    if (playingAudio && showScreen === 'box3') {
      return
    }

    if (muted) {
      audio.pause()
    } else {
      playingAudio ? audio.play() : audio.pause()
    }

  }, [playingAudio, showScreen, muted])

  useEffect(() => {
    // check if mute has been stored
    const muteStorage = localStorage.getItem('mute')
    if (muteStorage) {
      setMuted(true)
    }
  }, [])

  useEffect(() => {
    if (muted) {
      localStorage.setItem('mute', true)
      setPlayingAudio(false)
    } else {
      if (turnedOnce) {
        localStorage.removeItem('mute')
        setPlayingAudio(true)
      }
    }
    window.addEventListener("click", handleFirstClick)
    return () => window.removeEventListener("click", handleFirstClick)
  }, [muted])

  return (
    <></>
  )
}