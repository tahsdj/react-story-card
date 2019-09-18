import React, {useState} from "react"
import styled from 'styled-components'
import { setInterval } from "timers";

const ScreenContainer = styled.div`
    position: absolute;
    display: inline-flex;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const LeftButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const RightButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const Screen = ({next,back,pause,play}) => {

    const [isPaused, setPause] = useState(false)
    const [timer, setTimer] = useState(null)
    const pressDownHandler = e => {
        // avoid trigger the click of turn back and turn next
        
        const t = setTimeout(()=>{
            setPause(true)
            pause()
        },200)
        setTimer(t)
    }
    const pressUpHandler = e => {
        if (timer) {
            clearTimeout(timer)
            setTimer(null)
        }
        if (isPaused) play()
    }
    const clickHandler = (action) => {
        if ( !isPaused ) {
            if (action === 'next') next()
            if (action === 'back') back()
        }
        setPause(false)
    }
    return (
        <ScreenContainer
            onMouseDown={pressDownHandler}
            onMouseUp={pressUpHandler}
            >
            <LeftButton onClick={()=>clickHandler('back')}/>
            <RightButton onClick={()=>clickHandler('next')}/>
        </ScreenContainer>
    )
}

export default Screen