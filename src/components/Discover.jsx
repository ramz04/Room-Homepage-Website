import data from '../data.json'
import Proptypes from 'prop-types'

function Discover(props) {
  return (
        <div className="hero--discover md:basis-2/5 md:p-[6rem]">
            <h1>{data[props.index].header}</h1>
            <p>
              {data[props.index].content}
            </p>
            <div className='hover:text-gray-500 hero--shop group'>
              Shop now
              <img src={props.arrow} alt='Arrow' className='group-hover:invert-[.50] group-hover:ml-[15px] transition-all duration-500 ease-in-out' />
            </div>
            <div className='hero--slide-desktop'>
                <button  className='slider--btn' onClick={props.prevSlide}><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none"fillRule="evenodd"/></svg></button>
                <button className='slider--btn'  onClick={props.nextSlide}><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></button>
            </div>
        </div>
  )
}

export default Discover

Discover.propTypes = {
    index: Proptypes.number,
    nextSlide: Proptypes.func,
    prevSlide: Proptypes.func,
    arrow: Proptypes.string,
}