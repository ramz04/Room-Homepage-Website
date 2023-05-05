import img_mobile1 from './assets/images/mobile-image-hero-1.jpg'
import img_desktop1 from './assets/images/desktop-image-hero-1.jpg'
import dark from './assets/images/image-about-dark.jpg'
import light from './assets/images/image-about-light.jpg'
//import hamburger from './assets/images/icon-hamburger.svg'
//import close from './assets/images/icon-close.svg'
import arrow from './assets/images/icon-arrow.svg'
// import angle_left from './assets/images/icon-angle-left.svg'
// import angle_right from './assets/images/icon-angle-right.svg'

function App() {

  return (
    <div className="App">
        <section className="hero">
          <div className="hero--main-page relative">
            <picture>
              <source media="(min-width:1024px)" srcSet={img_desktop1}/>
              <img src={img_mobile1} alt="" className='hero--main-page--img'/>
            </picture>
            <div>

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
