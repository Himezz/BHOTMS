import React from 'react'
import Select from "react-select"
import DatePicker from "react-datepicker";
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar } from 'react-icons/fi'
const CustomInput = ({ value, onClick,placeholder,isUndecided, setOpen }) => (
  <div className="w-[330px] outline-1 outline outline-gray-500 bg-white p-[.90rem] opensans " value={value} onClick={() => {setOpen(true); onClick();}} readOnly>
   <div className='flex justify-between'>
   { isUndecided ? 'UNDECIDED' : value || placeholder}
    <FiCalendar className="text-black" />
    </div>
  </div>
);

const CustomHeader = props => {
  const { date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, setSelectingDate, setIsUndecided, setOpen} = props;

  return (
      <div className="react-datepicker__header">
          <button onClick={() => {setIsUndecided(true); setOpen(false);  console.log(setIsUndecided) } } className="bg-black text-white p-1 rounded-md">Undecided</button> {/* The Undecided button */}
          <div className="react-datepicker__current-month">
              {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
          </div>
          <div className="react-datepicker__navigation-container">
              <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}></button>
              <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}></button>
          </div>
      </div>
  ); }

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
      borderColor: 'gray', 
      color: 'black',
      letterSpacing: '0.1em', 
      fontFamily: 'Open Sans, sans-serif',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: 'black',
        letterSpacing: 'widest', 
        fontFamily: 'Open Sans, sans-serif',
      }),
   
  };
  const locationOptions = [
    { value: 'Bombay Ballroom', label: 'Bombay Ballroom' },
    { value: 'Aashina Hall', label: 'Aashina Hall' },
    { value: 'UpTownSocials901', label: 'UpTownSocials901' },
    { value: 'Bartlett Banquet Hall', label: 'Bartlett Banquet Hall' },
    { value: 'Rondevu', label: 'Rondevu' }, 
    { value: 'All Occasion', label: 'All Occasion' }, 
     { value: 'Undecided', label: 'Undecided' },

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
  const today = new Date();
today.setHours(0, 0, 0, 0);
  const [selectedDate,setDate] = useState(null)
  const [open, setOpen] =useState(false)
  const [isUndecided,setIsUndecided] = useState(false)
  return (
    <>
      <div className='bg-[#eeecec8c] h-[790px] p-10'> 
        <p className='text-center font-semibold modal-font-header text-xl tracking-widest mb-[4rem] '>LET'S GET THIS PARTY STARTED</p>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4'>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='FIRST & LAST NAME'/>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='MOBILE NUMBER'/>
        <input type="text" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='EMAIL ADRESS'/>
          <DatePicker selected={selectedDate} open={open} minDate={today}   onCalendarOpen={() => setOpen(true)} onCalendarClose={() => setOpen(false)} onChange={date => {setIsUndecided(false); setDate(date);}} placeholderText='EVENT DATE'  className=' opensans placeholder:text-black' renderCustomHeader={(props) => <CustomHeader {...props} setIsUndecided={setIsUndecided} setOpen={setOpen}/> } customInput={<CustomInput  setOpen={setOpen} isUndecided={isUndecided} placeholder='EVENT DATE'/>} />
        <Select  styles={customStyles} className=' ' options={eventOptions} placeholder={"EVENT TYPE"}  />
        <Select options={locationOptions} styles={customStyles} placeholder={'EVENT LOCATION'}/>
   
        
        <input type="number" className='w-[330px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans ' placeholder='GUEST COUNT (ESTIMATED)'/>
          <button type="submit" className="border-2 mt-6 border-[#BC9C6F] w-[330px] py-[.90rem] text-sm tracking-widest font-bold">SUBMIT</button> {/* Add this if you want a submit button */}
        </form>
      </div>
    </>
  )
}

export default EmailForm;