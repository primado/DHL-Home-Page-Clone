import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import OneSolution from './components/OneSolution'
import CardCarol from "./components/CardCarol"

import "./CSS/style.css"

function App() {

  // const cards = data.map(item => {
    
  //   return (
  //     <CardCarol
  //       key={item.id}
  //       {...item}
  //     />
  //   )
  // })

  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <OneSolution />
      <section id='main-cardCarol'>
        <CardCarol />
      </section>
      
      
    </div>
  )
}

export default App
