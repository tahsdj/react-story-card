import React from 'react';
import ReactDOM from 'react-dom';
import StoryCard from './index.jsx';
import './index.css';

const stories = [
  {
    author: {
      name: 'abcLoveTravle',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN'
  },
  {
    author: {
      name: 'abc',
      profileImg: 'https://picsum.photos/id/208/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1568130012379-66fbf6500040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
  },
  {
    author: {
      name: 'abeeeeec',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1550192886-22672d31d192?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    author: {
      name: 'abc',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1568146605150-aabfdb80d95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    author: {
      name: 'abc',
      profileImg: 'https://picsum.photos/id/208/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1568130012379-66fbf6500040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
  },
  {
    author: {
      name: 'abeeeeec',
      profileImg: 'https://picsum.photos/id/308/1000/1000'
    },
    imgUrl: 'https://images.unsplash.com/photo-1550192886-22672d31d192?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
]

ReactDOM.render(
  <StoryCard stories={stories} />,
  document.getElementById('root')
)
