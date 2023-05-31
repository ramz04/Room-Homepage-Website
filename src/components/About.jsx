import light from '../assets/images/image-about-light.jpg'
import dark from '../assets/images/image-about-dark.jpg'


function About() {
  return (
    <div>
        <section className="about md:basis-2/5">
          <img src={dark} alt='About Dark'className='about--img md:w-full' />
          <div className='about--text md:px-[4rem]'>
            <h3 className=''>About our furniture</h3>
            <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
            </p>

          </div>
          <img className='about--img md:w-full' src={light} alt='About Light ' />
        </section>
    </div>
  )
}

export default About