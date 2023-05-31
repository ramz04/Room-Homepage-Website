import img_mobile1 from './assets/images/mobile-image-hero-1.jpg'
import img_mobile2 from './assets/images/mobile-image-hero-2.jpg'
import img_mobile3 from './assets/images/mobile-image-hero-3.jpg'
import img_desktop1 from './assets/images/desktop-image-hero-1.jpg'
import img_desktop2 from './assets/images/desktop-image-hero-2.jpg'
import img_desktop3 from './assets/images/desktop-image-hero-3.jpg'
import data from './data.json'
import {useState} from 'react'
import logo from './assets/images/logo.svg'
import arrow from './assets/images/icon-arrow.svg'
import angle_left from './assets/images/icon-angle-left.svg'
import angle_right from './assets/images/icon-angle-right.svg'
import Main from './components/Main'
import Discover from './components/Discover'
import About from './components/About'

function App() {

  console.log(data[0].header)

  const [index, setIndex] = useState(0)
  const [drawer, setDrawer] = useState(false)

  const imgDesktop = [img_desktop1 , img_desktop2, img_desktop3]
  const imgMobile = [img_mobile1, img_mobile2, img_mobile3]

  const prevSlide = () => {
    const currentSlide = index === 0
    const newSlide = currentSlide ? data.length - 1 : index - 1
    setIndex(newSlide)
  }

  const nextSlide = () => {
    const currentSlide = index === data.length - 1
    const newSlide = currentSlide ? 0 : index + 1
    setIndex(newSlide)
  }

  const openDrawer = () => setDrawer(!drawer)



  return (
    <div className="App md:h-screen md:flex md:flex-col">
        <section className="hero md:flex md:basis-3/5">
          <Main 
            imgDesktop={imgDesktop}
            imgMobile={imgMobile}
            logo={logo}
            drawer = {drawer}
            openDrawer = {openDrawer}
            angle_left = {angle_left}
            angle_right = {angle_right}
            index = {index}
          />
          <Discover 
            index={index}
            arrow={arrow}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </section>
        <About />
    </div>
  )
}

export default App
