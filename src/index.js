import React from 'react'
import ReactDOM from 'react-dom'
import StoryCard from './index.jsx'
import './index.css'

const stories = [
  {
    user: {
      name: 'paul',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1515975325863-a4ceb4b7d6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'
  },
  {
    user: {
      name: 'abc',
      profileImg: 'https://picsum.photos/id/208/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80'
  },
  {
    user: {
      name: 'abeeeeec',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1550192886-22672d31d192?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    user: {
      name: 'tc',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1568146605150-aabfdb80d95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    user: {
      name: 'naruto',
      profileImg: 'https://picsum.photos/id/208/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1568130012379-66fbf6500040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
  },
  {
    user: {
      name: 'edc',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1556173272-c17a5a0a4d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
]

ReactDOM.render(
  <StoryCard 
    stories={stories}
    interval={2000} // miliseconds
    onChange={(e)=>{console.log('onChange event: ', e)}}
    width={300}
    height={500}
    />,
  document.getElementById('root')
)
