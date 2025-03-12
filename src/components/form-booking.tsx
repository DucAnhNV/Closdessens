import { Divider } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FormBooking = () => {
    return (
        <>
            <div className="h-[40%] w-[40%] bg-green-700 rounded-[7px] p-3">
                <div className="relative flex h-[16%] w-full">
                    <h3 className="text-white font-medium flex justify-center w-full h-full">
                        LE CLOS DES SENS
                    </h3>
                    <div className="absolute top-0 right-0 w-[30px] h-[30px] text-white  bg-transparent hover:bg-green-600 rounded-[3px] p-2">
                        <span className="relative top-[-6px] right-[2px] font-medium">FR</span>
                    </div>
                </div>
                <div className="h-[16%] flex items-center justify-between p-2 hover:bg-green-600 rounded-[7px]">
                    <div className="text-white font-medium">
                        <RestaurantMenuIcon /> couverts
                    </div>
                    <div className="text-white font-medium">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <Divider sx={{ marginTop: '4px', backgroundColor: '#fff', width: '100%', marginBottom: '4px' }} />
                <div className="h-[16%] flex items-center justify-between p-2 hover:bg-green-600 rounded-[7px]">
                    <div className="text-white font-medium">
                        <CalendarTodayIcon /> Aujourd'hui
                    </div>
                    <div className="text-white font-medium">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <Divider sx={{ marginTop: '4px', backgroundColor: '#fff', width: '100%', marginBottom: '4px' }} />
                <div className="h-[16%] flex items-center justify-between p-2 hover:bg-green-600 rounded-[7px]">
                    <div className="text-white font-medium">
                        <AccessTimeIcon />  Horaire
                    </div>
                    <div className="text-white font-medium">
                        <KeyboardArrowDownIcon />
                    </div>
                </div>

                <div className="h-[16%] w-full bg-white hover:bg-gray-200 flex justify-center items-center rounded-[5px] mb-3 mt-[4px]">
                    <span className="font-bold">Réverser</span>
                </div>
                <Divider sx={{ backgroundColor: '#fff', width: '100%' }} />
                <div className="flex justify-center items-center">
                    <span className="text-white text-[12px] mt-2">endu possible par Zenchef</span>
                </div>
            </div>
        </>
    )
}

export default FormBooking;