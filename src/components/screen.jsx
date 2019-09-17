import React, {useState} from "react"
import styled from 'styled-components'

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

const Screen = ({onNext,onBack}) => {
    return (
        <ScreenContainer>
            <LeftButton onClick={()=>onBack()}/>
            <RightButton onClick={()=>onNext()}/>
        </ScreenContainer>
    )
}

export default Screen