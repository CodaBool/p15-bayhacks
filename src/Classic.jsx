import React, { useEffect, useState } from 'react'
import style from './style/classic.module.css'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useStore } from './Main.jsx'
import Container from 'react-bootstrap/Container'
import { box2Body, box2Title, box3Title, box4Body, box4Title, box5Title, box5Body, btn1, btn2, btn3, modal1, modal2, modal3, credit } from './text/index.jsx'

const tradPopover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Want a traditional website view?</Popover.Header>
    <Popover.Body>
      All the same info from this page can be viewed in a text only format. Just click on this button below.
    </Popover.Body>
  </Popover>
)

const otherPopover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Switch back to a 3D environment</Popover.Header>
    <Popover.Body>
      All the same info from this page can be viewed in a 3D environment. Just click on this button below.
    </Popover.Body>
  </Popover>
)

export default function Classic() {
  const showScreen = useStore(state => state.showScreen)
  const setShowScreen = useStore(state => state.setShowScreen)
  const playingAudio = useStore(state => state.playingAudio)
  const setPlayingAudio = useStore(state => state.setPlayingAudio)
  const muted = useStore(state => state.muted)
  const setMuted = useStore(state => state.setMuted)

  function toggle() {
    if (showScreen === '3d') {
      setShowScreen('2d')
      setPlayingAudio(false)
    } else if (showScreen === '2d') {
      setShowScreen('3d')
      if (!muted) {
        setPlayingAudio(true)
      }
    }
  }
  
  return (
    <>
      {showScreen === '2d' && <Website />}
      {showScreen === '3d' ?
        playingAudio
          ?
            <div className={style.mute} onClick={() => setMuted(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto'}} width="2em" height="2em" fill="white" viewBox="0 0 16 16">
                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
          :
            <div className={style.mute} onClick={() => setMuted(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto'}} width="2em" height="2em" fill="white" viewBox="0 0 16 16">
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
              </svg>
            </div>
        : null
      }

      <OverlayTrigger placement="top" overlay={showScreen === '2d' ? otherPopover : tradPopover}>
        <div className={style.show} onClick={toggle}>
          {showScreen === '2d'
            ?
              <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto'}} width="2em" height="2em" fill="white" viewBox="0 0 576 512">
                <path d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5V336c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z"/>
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" style={{margin: 'auto'}} width="2em" height="2em" fill="white" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
          }
        </div>
      </OverlayTrigger>
    </>
  )
}


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c3.4 4.9 3.8 11.3 1.1 16.6s-8.2 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zM212.1 96.5c7 1.9 11.9 8.2 11.9 15.5V336c0 8.8-7.2 16-16 16H80c-5.7 0-11-3-13.8-8s-2.9-11-.1-16l128-224c3.6-6.3 11-9.4 18-7.5zM5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z"/></svg> */}

function Website() {
  return (
    <div className={style.website}>
      <Container className="mt-5">
        <h1 className="display-4 my-4">{box2Title}</h1>
        <p>{box2Body}</p>
        <h1 className="display-4 my-4">{box3Title}</h1>
        <div style={{display: 'flex'}}>
          <iframe style={{marginRight: 'auto', marginLeft: 'auto'}} width="480px" height="320px" src="https://www.youtube-nocookie.com/embed/fEXdLheZW6k" title="Hackathon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <h1 className="display-4 my-4">{box4Title}</h1>
        <p>{box4Body}</p>
        <h1 className="display-4 my-4">{box5Title}</h1>
        <p>{box5Body}</p>
        <h1 className="display-4 my-4">{btn1}</h1>
        {modal1}
        <h1 className="display-4 my-4">{btn2}</h1>
        {modal2}
        <h1 className="display-4 my-4">{btn3}</h1>
        {modal3}
        {credit}
      </Container>
    </div>
  )
}