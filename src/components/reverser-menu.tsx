import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import CalendarBooking from "../components/calendar-booking";
import { useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';


interface ReverserMenuProps {
    handleCloseReverser: () => void;
    handleOpenChambre: () => void;
    handleCloseChambre: () => void;
    openChambre: boolean;
    openReverser: boolean;
    contents: { name: string; color: string; image: string }[];
    activeIndex: number;
}



const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '100vh',
    bgcolor: 'background.paper',
};

const ReverserMenu: React.FC<ReverserMenuProps> = ({
    contents,
    activeIndex,
    handleCloseReverser,
    openReverser,
    handleOpenChambre,
    handleCloseChambre,
    openChambre,
}) => {

    const Navigate = useNavigate();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (

        <>
            <Modal
                open={openReverser}
                onClose={handleCloseReverser}
                aria-labelledby="modal-modal-reverser"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    ...style,
                    bgcolor: contents[activeIndex].color,
                }}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div

                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="uppercase h-[20%] cursor-pointer w-3/4 flex items-center justify-center text-4xl text-white">
                            <a target="_blank" rel="noopener noreferrer" href='/booking'> Reverse une table</a>
                        </div>
                        <div
                            onClick={handleOpenChambre}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="uppercase h-[20%] cursor-pointer w-3/4 flex items-center justify-center text-4xl text-white">
                            Reverse une chambre
                        </div>

                    </div>
                    <div
                        onClick={handleCloseReverser}
                        className="text-4xl absolute top-0 right-0 p-15 cursor-pointer">
                        <ClearIcon sx={{ fontSize: '40px', color: 'white' }} />
                    </div>
                </Box>
            </Modal>

            <Modal
                open={openChambre}
                onClose={handleCloseChambre}
                aria-labelledby="modal-modal-chambre"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '70%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '100vh',
                    bgcolor: 'background.paper',
                }}>
                    <div className="flex flex-col h-full w-f">
                        <div className="relative left-8 flex basis-1/4 h-full w-full p-2">
                            <div className="h-full w-1/3 flex items-start justify-center flex-col">
                                <h4>Nombre d'adultes</h4>
                                <FormControl sx={{ minWidth: 180 }} size="small">
                                    <InputLabel id="demo-select-small-label"></InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="h-full w-1/3 flex items-start justify-center flex-col">
                                <h4>Nombre d'enfants</h4>
                                <FormControl sx={{ minWidth: 180 }} size="small">
                                    <InputLabel id="demo-select-small-label"></InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={age}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>2</MenuItem>
                                        <MenuItem value={2}>1</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="h-full w-1/3 flex items-start justify-center flex-col">
                                <h4>Code promo</h4>
                                <TextField size="small" id="outlined-basic" variant="outlined" />
                            </div>
                        </div>
                        <div className=" flex gap-30 px-10">
                            <span className="text-[#E8C17F]">Arrivée</span>
                            <span>Départ</span>
                        </div>
                        <div className=" h-full w-full">
                            <CalendarBooking />

                        </div>
                        <div className="flex justify-between items-center pb-10 px-10">
                            <div className="flex gap-10">
                                <span className="text-green-600 text-[12px] flex items-center gap-1"><ArrowDropUpIcon sx={{ rotate: '45deg' }} />Meilleur prix</span>
                                <span className="text-red-600 text-[12px] flex items-center gap-1"><CircleSharpIcon sx={{ fontSize: '12px' }} />Dernière(s) chambre(s)</span>
                                <span className="text-black text-[12px] flex items-center gap-1"><BorderClearIcon sx={{ fontSize: '13px' }} />Séjour min.</span>
                            </div>
                            <div className="uppercase bg-[#B7A879] px-3 py-2 hover:bg-[#c1b07e]">
                                Réverser
                            </div>
                        </div>
                    </div>



                    <div
                        onClick={handleCloseChambre}
                        className="text-4xl absolute top-0 right-0 p-5 cursor-pointer">
                        <ClearIcon sx={{ fontSize: '40px', color: '#B3A371' }} />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ReverserMenu;