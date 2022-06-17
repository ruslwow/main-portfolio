import React from 'react'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from "./components/header/Header"
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/footer/Foooter'
// import "./my-app/src/index.css"

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </>
  )
}

export default App
