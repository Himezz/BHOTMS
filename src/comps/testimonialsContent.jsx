import React from 'react'
import { AiFillStar, AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

 
const TestimonialsContent = ({name, testimonial, stars, leftButton, rightButton,animate }) => {
    const slideInClass = animate ? ' translate-x-0 opacity-100' : 'translate-x-full opacity-0';
    const slideOutLeft = animate ? ' translate-x-0 opacity-100' : 'translate-x-[-200%]  ';
  return (
    <div className={`h-[30rem] flex-col justify-center   items-center flex `}>
   <p className='text-3xl w-full tracking-wide text-center goldtext modal-font-header'>Testimonials</p>

 <div className={`min-w-[1000px] max-w-[1400px] mx-8 h-[25rem] tra bg-white flex items-center justify-center shadow-inner shadow-[#807f7e] `}>
    
    <div> <AiOutlineArrowLeft onClick={leftButton} size={30}/> </div> 
    <div className={`flex flex-col rounded-lg bg-white h-[20rem] w-[80%]   shadow-xl duration-700 gap-8 shadow-[#807f7e] z-40  p-7 ${slideOutLeft} ` } >
      <p className='text-black text-center font-bold modal-font-header text-2xl'>{name}</p>
      <p className='font-bold text-center'> "{testimonial}"</p>
      <div className='flex w-full justify-center items-center'>
      {[...Array(stars)].map(star => {return <AiFillStar  color='#BC9C6F'  size={40} />})}
      </div>
    </div>

     <div >  <AiOutlineArrowRight size={30} onClick={rightButton}/> </div>
</div>

    </div>
  )
}

export default TestimonialsContent