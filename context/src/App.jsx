// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import List from './Components/List';
// eslint-disable-next-line no-unused-vars
const stories = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
  
function App() {

  return (
    <>
     <List list={stories} />
    </>
  )
}

export default App