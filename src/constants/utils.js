export const eventOptions = [
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

  export const locationOptions = [
    { value: 'Bombay Ballroom', label: 'Bombay Ballroom' },
    { value: 'Aashina Hall', label: 'Aashina Hall' },
    { value: 'UpTownSocials901', label: 'UpTownSocials901' },
    { value: 'Bartlett Banquet Hall', label: 'Bartlett Banquet Hall' },
    { value: 'Rondevu', label: 'Rondevu' }, 
    { value: 'All Occasion', label: 'All Occasion' }, 
     { value: 'Undecided', label: 'Undecided' },

  ];
  export const customStyles = {
    control: (provided) => ({
      ...provided,
   
      padding: '.48rem',
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
  export const errorCustomStyles = {
    control: (provided) => ({
      ...provided,
    
    padding: '.60rem',
      borderColor: 'red', 
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
 