import React, {useState} from "react"
import styled from 'styled-components'

const StroyWrapper = styled.div`
    display: inline-flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,1);
`

const ProfileWrapper = styled.div`
    display: inline-flex;
    position: absolute;
    flex-direction: row;
    top: 30px;
    left: 0;
    width: calc(100% - 20px);
    padding: 5px 10px;
    align-items: center;
    justify-content: flex-start;
`

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,.9);
`
const Name = styled.span`
    padding: 0 0 0 10px;
    color: rgba(255,255,255,.9);
`
const StoryContent = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 100%;
    margin: auto  
`

const Story = React.memo(({
    author,
    imgUrl
}) => {
    const {name, profileImg} = author ? author : {name: null, profileImg: null}
    console.log('story render')
    return (
        <StroyWrapper>
            <ProfileWrapper>
                <ProfileImg src={profileImg} />
                <Name>{name}</Name>
            </ProfileWrapper>
            <StoryContent src={imgUrl} />
        </StroyWrapper>
    )
})

export default Story