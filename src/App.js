
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Work from './components/Work'
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import { useState } from 'react';
import AuthorCard from './components/AuthorCard';

export default function App() {

  const [isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })

  return (
    <>
    {/* {/* insert the main navbar component /} */}
   
   <Navbar />

    {/* {/ insert the personal details component */} 
    <AuthorCard isActive={isActive} setIsActive={setIsActive}/>

    {
      isActive.active && isActive.name === "education" ? (<Education /> ): isActive.active && isActive.name === "work" ? (<Work /> ) : (<Hobbies />)
    }


    </>
  )
}

// export default App;
