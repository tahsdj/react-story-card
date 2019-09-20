import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import Container from './components/container'
import Screen from './components/screen'

const StoryCardWrapper = styled.div`
    display: inline-flex;
    position: relative;
    width: ${props => props.width ? `${isNaN(parseInt((props.width + '').split('')[(props.width + '').split('').length - 1])) ? props.width:`${parseInt(props.width)}px`}` : '400px'};
    height: ${props => props.height ? `${isNaN(parseInt((props.height + '').split('')[(props.height + '').split('').length - 1]))? props.height:`${parseInt(props.height)}px`}` : '650px'};
    min-height: 500px;
    max-width: 500px;
    max-height: 100vh;
    box-shadow: 3px 3px 5px rgba(0,0,0,.26)
`

const StoryCard = ({
    stories = [],
    interval = 3000,
    width = 300,
    height = 500,
    onChange=null}) => {

    const [durationState, setDurationState] = useState({
        storyIndex: -1,
        duration: -1,
        isPlaying: true
    })

    const {storyIndex, isPlaying} = durationState
    const intervalPerStory = interval / 1000

    useEffect(()=>{
        
        // when component mount, start timer
        const delay = 100
        const timer = setInterval(()=>timerHandler(delay),delay)

        // clear timer when component unmount
        return () => {
            if (timer) clearInterval(timer)
        }
    },[])
    
    const useCallBack = (func, event) => {
        if (func && typeof func === 'function') func(event)
    }
    const timerHandler = (delay) => {
        setDurationState( prev => {
            const {duration, storyIndex} = prev
            const increasement = delay / 1000

            // initial condition
            if ( duration < 0 && storyIndex < 0 ) return { ...prev, storyIndex: 0, duration: 0}

            if ( prev.isPlaying ) {
                // if in one cycle, keep counting on timer
                if ( (duration + increasement) < stories.length*intervalPerStory) {
                    // if it will change to next story
                    if ( Math.floor((duration + increasement) / intervalPerStory) > Math.floor(duration / intervalPerStory) ){
                        
                        // call the function when the story is changed
                        const event = { event: 'changed'}
                        useCallBack(onChange, event)
                        return { ...prev, storyIndex: storyIndex+1, duration: duration + increasement}
                    } else {
                        // default, increase the timer
                        return {...prev, duration: duration + increasement}
                    }
                } else {
                    // back to first story
                    return {...prev, storyIndex: 0, duration: 0}
                }
            } else return {...prev}
        })
    }

    const next = () => setDurationState(prev=>{
        const newDuration = (prev.storyIndex+1)*intervalPerStory
        return prev.storyIndex === stories.length - 1 ? 
            {...prev, duration: 0, storyIndex: 0} : {...prev, duration: newDuration, storyIndex: prev.storyIndex+1}
    })
    const back = () => setDurationState(prev=>{
        const newDuration = (prev.storyIndex-1)*intervalPerStory
        return prev.storyIndex === 0 ? 
            {...prev} : {...prev, duration: newDuration, storyIndex: prev.storyIndex-1}
    })

    const pause = () => setDurationState( prev => {
        const event = {
            event: 'pause'
        }
        useCallBack(onChange, event)
        return {...prev, isPlaying: false} 
    })
    const play = () => setDurationState( prev => {
        const event = {
            event: 'play'
        }
        useCallBack(onChange, event)
        return {...prev, isPlaying: true} 
    })

    return (
        <StoryCardWrapper 
            width={width}
            height={height}
            >
            <Container
                stories={stories}
                storyIndex={storyIndex}
                isPlaying={isPlaying}
                intervalPerStory={intervalPerStory}
            />
            <Screen
                next={next}
                back={back}
                pause={pause}
                play={play}
            />
        </StoryCardWrapper>
    )
}

export default StoryCard