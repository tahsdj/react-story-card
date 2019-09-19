import React, {useState, useRef} from "react"
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

const Screen = React.memo(({next,back,pause,play}) => {

    const [isPaused, setPause] = useState(false)
    const timer = useRef(null)

    const pressDownHandler = e => {
        timer.current = setTimeout(()=>{
                setPause(true)
                pause()
            },300)
    }
    const pressUpHandler = e => {
        if (timer.current) {
            clearTimeout(timer.current)
            timer.current = null
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
})

export default Screen