import React, { useState } from "react";
import DatePicker from "react-datepicker";



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateElement = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  console.log("date chooesed ")
  console.log(selectedDate)
  return (
    <DatePicker 
      selected={selectedDate} 
      onChange={date => setselectedDate(date)}
      
      
    />
  );
};

export default DateElement