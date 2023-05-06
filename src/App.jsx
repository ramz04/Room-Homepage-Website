import img_mobile1 from './assets/images/mobile-image-hero-1.jpg'
// import img_mobile2 from './assets/images/mobile-image-hero-2.jpg'
// import img_mobile3 from './assets/images/mobile-image-hero-3.jpg'
import img_desktop1 from './assets/images/desktop-image-hero-1.jpg'
// import img_desktop2 from './assets/images/desktop-image-hero-2.jpg'
// import img_desktop3 from './assets/images/desktop-image-hero-3.jpg'
import dark from './assets/images/image-about-dark.jpg'
// import data from './data.json'
import {useState} from 'react'
import logo from './assets/images/logo.svg'
import light from './assets/images/image-about-light.jpg'
import arrow from './assets/images/icon-arrow.svg'
// import angle_left from './assets/images/icon-angle-left.svg'
// import angle_right from './assets/images/icon-angle-right.svg'

function App() {

  // const [jsondata, setJsonData] = useState(data)
  // const [index, setIndex] = useState(0)
  const [drawer, setDrawer] = useState(false)

  // const imgDesktop = [img_desktop1 , img_desktop2, img_desktop3]
  // const imgMobile = [img_mobile1, img_mobile2, img_mobile3]

  return (
    <div className="App">
        <section className="hero">
          <div className="hero--main-page">
            <picture>
              <source media="(min-width:1024px)" srcSet={img_desktop1}/>
              <img src={img_mobile1} alt="" className='hero--main-page--img'/>
            </picture>
            <div className='hero--nav'>
              <div className='hero--nav-menu'>
                <button
                className="relative w-10 h-10 text-gray-500 bg-gray rounded-sm focus:outline-none"
                onClick={() => setDrawer(!drawer)}>
                <span className="sr-only">Open main menu</span>
                <div className="absolute  block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5  transform transition duration-500 ease-in-out ${
                      drawer ? "rotate-45 bg-gray-500" : "-translate-y-1.5 bg-white"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-white   transform transition duration-500 ease-in-out ${
                      drawer && "opacity-0"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5  transform  transition duration-500 ease-in-out ${
                      drawer ? "-rotate-45 bg-gray-500" : "translate-y-1.5 bg-white"
                    }`}></span>
                </div>
                </button>
              </div>
              <img src={logo} alt='Logo' className='' />
            </div>
            <div aria-checked={!drawer} className="fixed aria-checked:-translate-y-[100%] inset-0 bg-black bg-opacity-50 ease-in-out transition-transform duration-400">
              <div aria-checked={!drawer} className="absolute top-0 md:hidden right-0  left-0 transition-transform duration-500 z-50 ease-in-out bg-white aria-checked:-translate-y-[100%] flex flex-col gap-y-7">
                <ul className='flex w-full justify-end py-[25px] px-6 text-Dark font-bold text-lg gap-6'>
                    <li className='nav--items'><a href="#">home</a></li>
                    <li className='nav--items'><a href="#">shop</a></li>
                    <li className='nav--items'><a href="#">about</a></li>
                    <li className='nav--items'><a href="#">contact</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="hero--discover">
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.
            </p>
            <div>
              Shop now
              <img src={arrow} alt='Arrow' />
            </div>

          </div>
        </section>
        <section className="about">
          <img className='about--img' src={dark} alt='About Dark' />
          <div className='about--text'>
            <h3>About our furniture</h3>
            <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
            </p>

          </div>
          <img className='about--img' src={light} alt='About Light' />
        </section>
    </div>
  )
}

export default App
