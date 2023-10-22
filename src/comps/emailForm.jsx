import React from 'react'

const EmailForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send data to the server.
  }

  return (
    <>
      <div className='bg-[#eeecec8c] h-[790px] p-10'> 
        <p className='text-center font-semibold modal-font-header text-xl tracking-widest mb-[4rem] '>LET'S GET THIS PARTY STARTED</p>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='FIRST & LAST NAME'/>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='MOBILE NUMBER'/>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='EMAIL ADRESS'/>
       <div className='date-container'>
        <input 
        type="date" 
        className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans '
         required />
         <label className='z-10 w-[150px] bg-white text-black tracking-widest opensans  '>EVENT DATE</label>
        </div>
        <select  className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  opensans  text-black tracking-widest '>
         <option value=""  disabled selected> EVENT TYPE </option>
         <option value="">Wedding</option>
         <option value="">Quinceanera</option>
         <option value="">Filming</option>
         <option value=''>Auction</option>
        <option value="">Baby Shower</option>
        <option value="">Birthday</option>
        <option value="">Corporate Event</option>
        <option value="">Holiday Party</option>
        <option value="">Fundraiser</option>
        <option value="">Luncheon</option>
        <option value="">Prom</option>  
        <option value="">Bar Mitzvah</option>
        <option value="">Christening</option>
        <option value="">Fashion Show</option>
        <option value="">Fundraiser</option>
    
        <option value=''>Auction</option>
        <option value="">Concert</option>
        </select> 
        <select  className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  opensans  text-black tracking-widest '>
         <option value=""  disabled selected> LOCATION </option>
         <option value="">Bombay Ballroom</option>
         <option value="">Aashina Hall</option>
         <option value=''>UpTownSocials901</option>
        <option value="">Bartlett Banquet Hall</option>
        <option value="">Rondevu</option>
        <option value="">All Occasion</option>
        <option value="">Undecided</option>
        </select> 
        <input type="number" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='GUEST COUNT (ESTIMATED)'/>
          <button type="submit" className="border-2 mt-6 border-[#BC9C6F] w-[330px] py-[.90rem] text-sm tracking-widest font-bold">SUBMIT</button> {/* Add this if you want a submit button */}
        </form>
      </div>
    </>
  )
}

export default EmailForm;