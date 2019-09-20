import React from "react"
import styled, {keyframes} from 'styled-components'

const HeaderWrapper = styled.header`
    display: inline-flex;
    position: absolute;
    flex-direction: row;
    width: calc(100% - 20px);
    padding: 10px;
    justify-content: space-between;
`

const Header = React.memo(({stories, storyIndex, isPlaying, intervalPerStory}) => (
    <HeaderWrapper>
        { stories.map( (val,index) => {
            const currentIndex = storyIndex
            const key = `bar-${index}`
                switch (true) {
                    case index < currentIndex:
                        return <Bar type={1} key={key} intervalPerStory={intervalPerStory}/>
                    case index === currentIndex && isPlaying:
                        return <Bar type={2} key={key} intervalPerStory={intervalPerStory}/>
                    case index === currentIndex && !isPlaying:
                        return <Bar type={3} key={key} intervalPerStory={intervalPerStory}/>
                    case index > currentIndex:
                        return <Bar type={0} key={key} intervalPerStory={intervalPerStory}/>
                }
        })}
    </HeaderWrapper>
))
export default Header


const progressAnimation = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`

const BarWrapper = styled.div`
    display: inline-flex;
    height: 2px;
    background-color: rgba(255,255,255,.3);
    justify-content: flex-start;
    margin: 0 5px;
    flex-grow: 1;
`

const ProgressBar = styled.div`
    display: flex;
    animation: ${props=> props.type === 2 || props.type === 3? progressAnimation : null} ${props=>props.intervalPerStory}s linear;
    animation-play-state: ${props=>props.type === 3 ? 'paused': 'none'};
    width: ${ props => {
        switch(props.type) {
            case 0:
                return '0%'
            case 1:
                return '100%'
            case 2:
                return '100%'
            default:
                return '100%'
            // case 3:
            //     return `${props.percentage}%`
        }
    }};
    height: 100%;
    background-color: white;
`

const Bar = ({type, percentage, intervalPerStory}) => {
    return (
        <BarWrapper>
            <ProgressBar type={type} percentage={percentage} intervalPerStory={intervalPerStory}/>
        </BarWrapper>
    )
}