// import React, { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import { useDispatch } from "react-redux";
// import { changePickUpDate } from "../../redux/useFullSlice";
// const CalendarComp = () => {
//   const dispatch = useDispatch();
//   const [calDate, setCalDate] = useState(new Date());
//   useEffect(() => {
//     dispatch(changePickUpDate(calDate.toString()));
//   }, [calDate]);

//   const onChange = (calDate) => {
//     // change results based on calendar date click
//     setCalDate(calDate);
//   };

//   return <Calendar onChange={onChange} value={calDate} />;
// };

// export default CalendarComp;
