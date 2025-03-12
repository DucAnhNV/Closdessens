// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


// const CalendarMenu = () => {
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
//         </LocalizationProvider>
//     )
// }

// export default CalendarMenu;

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const CalendarBooking = () => {

    return (
        <div className="flex flex-col items-center w-full h-full justify-center">
            <div className='w-full absolute top-[170px] flex justify-between p-10 text-[#B3A371] cursor-pointer'>
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
            </div>
            <div className="flex gap-10 ">
                {<div className="w-[400px] mx-auto">
                    <h3 className="text-xl text-[#B3A371] mb-4 flex justify-center">
                        MARS 2025
                    </h3>
                    <div className="grid grid-cols-7 gap-2 border-t-2 border-b-2 border-gray-400 py-3">
                        {["lu", "ma", "me", "je", "ve", "sa", "di"].map((day, index) => (
                            <div key={index} className="text-center text-gray-700">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 mt-4">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full h-16 border border-gray-100 flex items-center justify-center text-gray-700  hover:bg-[#B3A371] hover:text-white cursor-pointer transition-all"
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
                }


                <div className="w-[400px] mx-auto">
                    <h3 className="text-xl text-[#B3A371] mb-4 flex justify-center">
                        AVRIL 2025
                    </h3>

                    <div className="grid grid-cols-7 gap-2 border-t-2 border-b-2 border-gray-400 py-3">
                        {["lu", "ma", "me", "je", "ve", "sa", "di"].map((day, index) => (
                            <div key={index} className="text-center text-gray-700">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 mt-4">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full h-16 border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#B3A371] hover:text-white cursor-pointer transition-all"
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarBooking;

