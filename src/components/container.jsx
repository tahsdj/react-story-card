import React, {useState} from "react"
import styled from 'styled-components'
import Story from "./story"
import Header from './header'

const ContainerWrapper = styled.div`
    display: inline-flex;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const Container = ({
    stories, 
    storyIndex,
    duration,
    isPlaying,
    durationPerStory
}) => {
    const currentStory = stories[storyIndex]
    // console.log('redenr container')
    return (
        <ContainerWrapper>
            <Header 
                stories={stories} 
                duration={duration}
                storyIndex={storyIndex}
                isPlaying={isPlaying}
                durationPerStory={durationPerStory}
                />
            <Story {...currentStory} />
        </ContainerWrapper>
    )
}

export default Container


