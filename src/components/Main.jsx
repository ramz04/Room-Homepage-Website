import Proptypes from 'prop-types'

function Main(props) {
  return (
        <div className="hero--main-page md:basis-3/5">
            <picture>
              <source media="(min-width:1024px)" srcSet={props.imgDesktop[props.index]}/>
              <img src={props.imgMobile[props.index]} alt="" className='hero--main-page--img md:h-[450px] lg:h-full'/>
            </picture>
            <div className='hero--nav'>
              <div className='hero--nav-menu md:hidden'>
                <button
                className="relative w-10 h-10 text-gray-500 bg-gray rounded-sm focus:outline-none"
                onClick={props.openDrawer}>
                <span className="sr-only">Open main menu</span>
                <div className="absolute  block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5  transform transition duration-500 ease-in-out ${
                      props.drawer ? "rotate-45 bg-gray-500" : "-translate-y-1.5 bg-white"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-white   transform transition duration-500 ease-in-out ${
                      props.drawer && "opacity-0"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5  transform  transition duration-500 ease-in-out ${
                      props.drawer ? "-rotate-45 bg-gray-500" : "translate-y-1.5 bg-white"
                    }`}></span>
                </div>
                </button>
              </div>
              <img src={props.logo} alt='Logo' className='' />
              <div>
              <ul className='hidden md:flex w-full justify-end py-[25px] px-6 text-white font-bold md:font-normal text-lg md:gap-12 gap-6'>
                  <li className='nav--item relative'><a href="#">home</a></li>
                  <li className='nav--item relative'><a href="#">shop</a></li>
                  <li className='nav--item relative'><a href="#">about</a></li>
                  <li className='nav--item relative'><a href="#">contact</a></li>
              </ul>
              </div>
            </div>
            <div aria-checked={!props.drawer} className="fixed aria-checked:-translate-y-[100%] inset-0 bg-black bg-opacity-75 ease-in-out transition-transform duration-400">
              <div aria-checked={!props.drawer} className="absolute top-0 md:hidden right-0  left-0 transition-transform duration-500 z-50 ease-in-out bg-white aria-checked:-translate-y-[100%] flex flex-col gap-y-7">
                <ul className='flex w-full justify-end py-[25px] px-6 text-Dark font-bold text-lg gap-6'>
                    <li className='nav--items'><a href="#">home</a></li>
                    <li className='nav--items'><a href="#">shop</a></li>
                    <li className='nav--items'><a href="#">about</a></li>
                    <li className='nav--items'><a href="#">contact</a></li>
                </ul>
              </div>
            </div>
            <div className='hero--slide md:hidden'>
                <button onClick={props.prevSlide}><img src={props.angle_left} alt="Slider Left" className='hero--slide-item' /></button>
                <button onClick={props.nextSlide}><img src={props.angle_right} alt="Slider Right" className='hero--slide-item'/></button>
            </div>
        </div>
  )
}

export default Main

Main.propTypes = {
    index: Proptypes.number,
    prevSlide: Proptypes.func,
    nextSlide: Proptypes.func,
    logo: Proptypes.string,
    drawer: Proptypes.bool,
    setDrawer: Proptypes.func,
    angle_left: Proptypes.string,
    angle_right: Proptypes.string,
    imgDesktop: Proptypes.array,
    imgMobile: Proptypes.array,
    openDrawer: Proptypes.func,
}