# React story card

An Instagram like story component made by React Hooks. 

![](https://i.imgur.com/adzm3j1.png)


## Installation

```
git clone https://github.com/tahsdj/react-story-card.git
```
```
yarn start
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import StoryCard from './index.jsx'
import './index.css'

const stories = [{
    user: {
      name: 'paul',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1515975325863-a4ceb4b7d6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'
}] // story list

ReactDOM.render(
  <StoryCard 
    stories={stories}
    interval={2000}
    onChange={(e)=>{console.log('onChange event: ', e)}}
    width={300}
    height={500}
    />,
  document.getElementById('root')
)
```

## Props



| Property | Type | Default | Description|
| -------- | -------- | -------- | ------- |
| stories     | [Object]     | []     | Array of your story cards.|
|interval| Number | 3000 | Millisecond of duration per story card.|
| width | String/Number | 300 | The width of story card. You can set the width with number in pixel unit or a string in percentage.|
| height | String/Number | 500 | The height of story card. You can set the height with number in pixel unit or a string in percentage.|
| onChange     | Function    | null     | Callback function when the states or events trigger|

## Functions

|  Function | Description |
| -------- | -------- |
| Click    | Turn next or turn back.  |
| Long press | Pause the story. |

