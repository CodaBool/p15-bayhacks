import React, { useEffect } from 'react'
import M from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useStore } from './Main.jsx'
import { box3Title, box3Body, btn1, btn2, btn3, modal1, modal2, modal3 } from './text/index.jsx'

export default function Modals() {
  return (
    <>
      <Modal id="box3" title={box3Title} content={box3Body} pauseWhenOpen />
      <Modal id="modal1" title={btn1} content={modal1} />
      <Modal id="modal2" title={btn2} content={modal2} />
      <Modal id="modal3" title={btn3} content={modal3} />
    </>
  )
}

function Modal({ title, content, id, pauseWhenOpen }) {
  const showScreen = useStore(state => state.showScreen)
  const setShowScreen = useStore(state => state.setShowScreen)
  const setPlayingAudio = useStore(state => state.setPlayingAudio)
  const muted = useStore(state => state.muted)

  function onHide() {
    setShowScreen('3d')
    if (pauseWhenOpen && !muted) {
      setPlayingAudio(true)
    }
  }
  
  useEffect(() => {
    if (showScreen === id && pauseWhenOpen) {
      setPlayingAudio(false)
    }
  }, [showScreen])
  

  // TODO: find out a way to make modal wider
  return (
    <M show={showScreen === id} onHide={onHide} dialogClassName="modal-90w">
      <M.Header closeButton>
        <M.Title>{title}</M.Title>
      </M.Header>
      <M.Body className="w-100">
        {content}
      </M.Body>
      <M.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </M.Footer>
    </M>
  )
}