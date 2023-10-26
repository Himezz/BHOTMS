import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { userSchema } from "./validations/UserValidations";
import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

//components and utilities
import {
  customStyles,
  locationOptions,
  eventOptions,
  errorCustomStyles,
} from "../constants/utils";

const CustomInput = ({ value, onClick, placeholder, isUndecided, setOpen, setFieldValue, }) => (
  <div
    className={  "w-[330px]  sm:w-[590px] lg:w-[430px] outline-1 outline outline-gray-500 bg-white p-[.90rem] opensans "}
    value={value}
    onClick={() => {
      setOpen(true);
      onClick();
    }}
    readOnly
  >
    <div className="flex justify-between">
      {isUndecided ? "UNDECIDED" : value || placeholder}
      <FiCalendar className="text-black" />
    </div>
  </div>
);

const CustomHeader = (props) => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    setIsUndecided,
    setOpen,
  } = props;

  return (
    <div className="react-datepicker__header">
      <button
        onClick={() => {
          setIsUndecided(true);
          setOpen(false);
          console.log(setIsUndecided);
        }}
        className="bg-black text-white p-1 rounded-md"
      >
        Undecided
      </button>{" "}
      {/* The Undecided button */}
      <div className="react-datepicker__current-month">
        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
      </div>
      <div className="react-datepicker__navigation-container">
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        ></button>
        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        ></button>
      </div>
    </div>
  );
};
const EmailForm = () => {
  const {values,handleBlur, errors, touched, handleChange,handleSubmit,setFieldValue, setFieldTouched} = useFormik({
    initialValues: {
      name: "",
      mobile_number: "",
      email: "",
      event_date: null,
      event_type: "",
      event_location: "",
      guest_count: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        from_number: values.mobile_number,
        event_date: values.event_date,
        event_type: values.event_type,
        event_location: values.event_location,
        guest_count: values.guest_count,
      };
      
      emailjs.send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_USER_ID>')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
    },
  });
  console.log(errors)
 
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [open, setOpen] = useState(false);
  const [isUndecided, setIsUndecided] = useState(false);



  return (
    <>
      <div className="bg-[#eeecec8c] h-full p-10">
        <p className="text-center font-semibold modal-font-header text-xl tracking-widest mb-[4rem] ">
          LET'S GET THIS PARTY STARTED
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-center items-center lg:justify-center lg:items-center  gap-4"
        >
        <div className=" flex flex-col lg:flex-row lg:gap-9 gap-4">
          <div className="flex flex-col gap-4">
          <div>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            className={  errors.name && touched.name ? "w-[330px] sm:w-[590px] lg:w-[430px]  outline-1 outline outline-[#ff0000] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" :  "w-[330px] sm:w-[590px] lg:w-[430px]  outline-1 outline outline-[gray] p-[.90rem]   placeholder:text-black placeholder:tracking-widest opensans" }
            placeholder="FIRST & LAST NAME"
            onBlur={handleBlur}
          />
            { errors.name && touched.name ?   <p className="text-red-500">{errors.name}</p> : ""}
           </div>
           <div>
          <input
            name="mobile_number"
            type="text"
            onChange={handleChange}
            value={values.mobile_number}
            className={  errors.mobile_number && touched.mobile_number ? "w-[330px] sm:w-[590px] lg:w-[430px] outline-1 outline outline-[#ff0000] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" :  "w-[330px] sm:w-[590px] lg:w-[430px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" }
            placeholder="MOBILE NUMBER"
            onBlur={handleBlur}
          />
               { errors.mobile_number && touched.mobile_number ?   <p className="text-red-500">{errors.mobile_number}</p> : ""}
          </div>
          <div>
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={values.email}
            className={  errors.email && touched.email ? "w-[330px] sm:w-[590px] lg:w-[430px]  outline-1 outline outline-[#ff0000] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" :  "w-[330px] sm:w-[590px] lg:w-[430px]  outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" }
            placeholder="EMAIL ADDRESS"
            onBlur={handleBlur}
          />
               { errors.email && touched.email ?   <p className="text-red-500">{errors.email}</p> : ""}
          </div>
       <div className="w-[330px] sm:w-[590px] lg:w-[430px]">
          <DatePicker
            name="event_date"
            selected={values.event_date}
            onChange={(date) => setFieldValue("event_date", date)}
            open={open}
            minDate={today}
            onCalendarOpen={() => setOpen(true)}
            onCalendarClose={() => setOpen(false)}
            placeholderText="EVENT DATE"
            onBlur={() => setFieldTouched("event_date", true)}
            renderCustomHeader={(props) => (
              <CustomHeader
                {...props}
                setIsUndecided={setIsUndecided}
                setOpen={setOpen} 
              />
            )}
            customInput={
              <CustomInput
                setOpen={setOpen}
                isUndecided={isUndecided}
                placeholder="EVENT DATE"
           
           
              />
            }
          />
          </div>
          </div>

          <div className="flex flex-col gap-4">
          <div  className="w-[330px] sm:w-[590px] lg:w-[430px]">
          <Select
            name="event_type"
            styles={ errors.event_type && touched.event_type ? errorCustomStyles : customStyles }
            value={eventOptions.find(
              (option) => option.value === values.event_type
            )}
            onChange={(option) =>
              setFieldValue("event_type", option ? option.value : "")
            }
            options={eventOptions}
            placeholder={"EVENT TYPE"}
            onBlur={() => setFieldTouched("event_type", true)}
            className="border-red"
          />
          { errors.event_type && touched.event_type ?   <p className="text-red-500">{errors.event_type}</p> : ""}
          </div>
          <div className="w-[330px] sm:w-[590px] lg:w-[430px]">
            
          <Select
            name="event_location"
            styles={ errors.event_location && touched.event_location ? errorCustomStyles : customStyles}
            options={locationOptions}
            value={locationOptions.find(
              (option) => option.value === values.event_location
            )}
            placeholder={"EVENT LOCATION"}
            onBlur={() => setFieldTouched("event_location", true)}
            className="w-full "
            onChange={(option) => {
              setFieldValue(
                "event_location",
                option ? option.value : ""
              );
              setSelectedLocation(option ? option.value : null); // Assuming `setSelectedLocation` is correct, but you wrote `setSelecteLocation` which might be a typo
            }}
            isClearable={true} // Allows clearing the value
          />
           { errors.event_location && touched.event_location ?   <p className="text-red-500">{errors.event_location}</p> : ""}
           </div>
           <div>
          <input
            name="guest_count"
            type="number"
            value={values.guest_count}
            onChange={handleChange}
            className={  errors.guest_count && touched.guest_count ? "w-[330px] sm:w-[590px] lg:w-[430px]  outline-1 outline outline-[#ff0000] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" :  "w-[330px] sm:w-[590px]  lg:w-[430px] outline-1 outline outline-[gray] p-[.90rem]  placeholder:text-black placeholder:tracking-widest opensans" }
            placeholder="GUEST COUNT (ESTIMATED)"
            onBlur={handleBlur}
          />
           { errors.guest_count && touched.guest_count ?   <p className="text-red-500">{errors.guest_count}</p> : ""}
          </div> 
       </div>
       </div>
       
          <button
            type="submit"
            className="border-2 mt-6 border-[#BC9C6F] w-[330px] py-[.90rem] text-sm tracking-widest font-bold"
          >
            SUBMIT
          </button>{" "}
          {/* Add this if you want a submit button */}
        </form>
      </div>
    </>
  );
};

export default EmailForm;
