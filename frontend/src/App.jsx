import { useEffect, useState } from 'react'
import './App.css'
import axios  from 'axios';

function App() {
  const [jokes, setjokes] =  useState([]) // array to store jokes

  useEffect(()=>{                         //  this hook is used for fetching data when the component mounts

    axios.get('/api/jokes')     //  making a get request to '/api/jokes' endpoint of our server
    .then(response => {
    setjokes(response.data) //  setting the response data in our state variable "jokes"
  })
  .catch((err )=>{
   console.log(err)} // 
   )
  })

  return (
    <>
     <h1>Full Stack with React </h1>
     <p>JOKES:{jokes.length}</p> 
     {
      jokes.map((joke,index) => ( //  mapping through each joke and returning JSX
      <div key={joke.id}>
        <h4>{joke.joke}</h4>
        <h3>{joke.title}</h3>
        <h2>{joke.content}</h2>
        <h1>{joke.author}</h1>
        
      </div>
      ))
     }

    </>
  )
}

export default App
