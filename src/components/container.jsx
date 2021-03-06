import React from "react"
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

const Container = React.memo(({
    stories, 
    storyIndex,
    isPlaying,
    intervalPerStory
}) => {
    const currentStory = stories[storyIndex]
    console.log('render container')
    return (
        <ContainerWrapper>
            <Header 
                stories={stories}
                storyIndex={storyIndex}
                isPlaying={isPlaying}
                intervalPerStory={intervalPerStory}
                />
            <Story {...currentStory} />
        </ContainerWrapper>
    )
})

export default Container


