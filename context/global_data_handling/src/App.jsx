// eslint-disable-next-line no-unused-vars
import { useState, useContext } from 'react'
import './App.css'
import List from './Components/List';
import { ListContext } from './Components/context';

function App() {

  const first = useContext(ListContext)

  console.log(first);

  return (
    <>
     <List list={first.stories} />
    </>
  )
}

export default App