import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import Container from './components/container'

const StoryCardWrapper = styled.div`
    display: inline-flex;
    width: 400px;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border: 1px solid gray;
`

// const useDurationState = (initialState) => {
//     const [storyIndex, setStoryIndex] = useState(initialState.storyIndex)
//     const [duration, setDuration] = useState(initialState.duration)
//     const setState = () => {

//     }
//     return 
// }

const StoryCard = ({stories}) => {

    // const [storyIndex, setStoryIndex] = useState(-1)
    // const [duration, setDuration] = useState(-1)
    const [isPlaying, setPlaying] = useState(true)
    const [durationState, setDurationState] = useState({
        storyIndex: -1,
        duration: -1
    })
    const {storyIndex, duration} = durationState
    useEffect(()=>{
        
        // when component mount, start timer
        const delay = 100
        const timer = setInterval(()=>timerHandler(delay),delay)

        // clear timer when component unmount
        return () => {
            if (timer) clearInterval(timer)
        }
    },[])
    // console.log('=================== render ====================')
    // console.log('duration: ', duration)
    // console.log('index: ', storyIndex)
    // console.log('=================== ====== ====================')

    const timerHandler = (delay) => {
        setDurationState( prev => {
            const {duration, storyIndex} = prev
            const durationPerStory = 3
            const increasement = delay / 1000

            // initial condition
            if ( duration < 0 && storyIndex < 0 ) return { storyIndex: 0, duration: 0}

            // if in one cycle, keep counting on timer
            if ( (duration + increasement) < stories.length*durationPerStory) {
                // if it will change to next story
                if ( Math.floor((duration + increasement) / durationPerStory) > Math.floor(duration / durationPerStory) ){
                    return { storyIndex: storyIndex+1, duration: duration + increasement}
                } else {
                    // default, increase the timer
                    return {...prev, duration: duration + increasement}
                }
            } else {
                // back to first story
                return {storyIndex: 0, duration: 0}
            }
        })
    }
    
    return (
        <StoryCardWrapper>
            <Container
                stories={stories}
                storyIndex={storyIndex}
                duration={duration}
            />
        </StoryCardWrapper>
    )
}

export default StoryCard