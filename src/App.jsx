import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import OneSolution from './components/OneSolution'
import CardCarol from "./components/CardCarol"
import ExpressDelivery from './components/ExpressDelivery'
import Footer from './components/footer'
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

      <ExpressDelivery />
      <Footer />
      
      
    </div>
  )
}

export default App
