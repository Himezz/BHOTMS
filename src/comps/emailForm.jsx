import React from 'react'
import Select from "react-select"
const EmailForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send data to the server.
  }
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '330px',
      padding: '.60rem',
      borderColor: 'gray', // Adjust this based on your `outline-[gray]` custom style
      color: 'black',
      letterSpacing: '0.1em', // Replace with actual pixel value from Tailwind config if necessary
      fontFamily: 'Open Sans, sans-serif',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: 'black',
        letterSpacing: 'widest', 
        fontFamily: 'Open Sans, sans-serif',
      }),
    // You can extend to other parts of the component as needed...
  };
  const locationOptions = [
    { value: 'Bombay Ballroom', label: 'Bombay Ballroom' },
    { value: 'Aashina Hall', label: 'Aashina Hall' },
    { value: 'UpTownSocials901', label: 'UpTownSocials901' },
    { value: 'Bartlett Banquet Hall', label: 'Bartlett Banquet Hall' },
    { value: 'Rondevu', label: 'Rondevu' },
    { value: 'All Occasion', label: 'All Occasion' },
    { value: 'Undecided', label: 'Undecided' }
  ];
  const eventOptions = [
    { value: 'eventType', label: 'EVENT TYPE', isDisabled: true }, // This mirrors the "disabled" property 
    { value: 'wedding', label: 'Wedding' },
    { value: 'quinceanera', label: 'Quinceanera' },
    { value: 'filming', label: 'Filming' },
    { value: 'auction', label: 'Auction' },
    { value: 'babyShower', label: 'Baby Shower' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'corporateEvent', label: 'Corporate Event' },
    { value: 'holidayParty', label: 'Holiday Party' },
    { value: 'fundraiser', label: 'Fundraiser' }, 
    { value: 'luncheon', label: 'Luncheon' },
    { value: 'prom', label: 'Prom' },
    { value: 'barMitzvah', label: 'Bar Mitzvah' },
    { value: 'christening', label: 'Christening' },
    { value: 'fashionShow', label: 'Fashion Show' },
    { value: 'concert', label: 'Concert' },
  ];
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
        <Select  styles={customStyles} className=' ' options={eventOptions} placeholder={"EVENT TYPE"} />
        <Select options={locationOptions} styles={customStyles} placeholder={'EVENT LOCATION'}/>
   
        
        <input type="number" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='GUEST COUNT (ESTIMATED)'/>
          <button type="submit" className="border-2 mt-6 border-[#BC9C6F] w-[330px] py-[.90rem] text-sm tracking-widest font-bold">SUBMIT</button> {/* Add this if you want a submit button */}
        </form>
      </div>
    </>
  )
}

export default EmailForm;