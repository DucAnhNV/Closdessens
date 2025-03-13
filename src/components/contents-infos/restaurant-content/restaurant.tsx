import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';


interface RestaurantProps {
    contents: { name: string; color: string; image: string }[];
    activeIndex: number;
    handleCloseRestaurant: () => void;
    openRestaurant: boolean;
}

const lists = ["Réserver une table", "La carte", "Les vins", "Infos & Accès", "Contact"];

const popupMapping: Record<string, string> = {
    "Réserver une table": "reservation",
    "La carte": "menu",
    "Les vins": "wine",
    "Infos & Accès": "access",
    "Contact": "contact",
};

const dish_list = [
    { name: 'Pour voir', quanity: '4', price: '158.00', description: 'Disponible les déjeuners de semaine toute l"année, hors Juillet-août et jours fériés.' },
    { name: 'Plein d"Envies', quanity: '7', price: '238.00', description: 'Disponible les déjeuners et dîners toute l"année, hors vendredi soir, samedi soir et soirées spéciales.' },
    { name: 'Grande Fete', quanity: '9', price: '288.00', description: 'Disponible toute l"année à chaque service,hors soirées spéciales' },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '100vh',
    bgcolor: 'background.paper',
};

const RestaurantContents: React.FC<RestaurantProps> = ({
    handleCloseRestaurant,
    contents,
    activeIndex,
    openRestaurant,
}) => {
    const [activePopup, setActivePopup] = useState<string | null>(null);

    const handleOpenPopup = (content: string) => {
        const mappedContent = popupMapping[content] || null;
        setActivePopup(mappedContent);
    };

    const handleBackPopup = () => {
        setActivePopup(null);
    };

    const handleClosePopup = () => {
        setActivePopup(null);
        handleCloseRestaurant();
    };

    return (
        <>
            {/* Modal chính */}
            <Modal
                open={openRestaurant}
                onClose={handleCloseRestaurant}
                aria-labelledby="modal-modal-reverser"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, bgcolor: contents[activeIndex].color }}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        {lists.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleOpenPopup(item)}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                className="uppercase h-[15%] cursor-pointer w-3/4 flex items-center justify-center text-4xl text-white"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div
                        onClick={handleCloseRestaurant}
                        className="text-4xl absolute top-0 left-0 p-5 cursor-pointer"
                    >
                        <span className="flex gap-5 justify-center items-center">
                            <KeyboardBackspaceIcon sx={{ fontSize: "40px", color: "white" }} />
                            <div className="flex justify-center items-center gap-2">
                                <CircleSharpIcon sx={{ fontSize: "5px", color: "white" }} />
                                <CircleSharpIcon sx={{ fontSize: "10px", color: "white" }} />
                            </div>
                        </span>
                    </div>
                </Box>
            </Modal>

            {/* Modal Popup */}
            <Modal open={activePopup !== null} onClose={handleClosePopup}>
                <Box sx={{ ...style, bgcolor: contents[activeIndex].color }}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-4xl text-white"
                        >
                            {activePopup === "reservation" && (
                                <>
                                    <div className='flex flex-col pl-20 pr-20 gap-10 mt-0 pt-0'>
                                        {dish_list.map((dishs, index) => (
                                            <div key={index} className='flex flex-col text-center '>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <h2 className='text-4xl uppercase'>{dishs.name}</h2>
                                                    <h3 className='uppercase text-2xl'>{dishs.quanity} saveurs</h3>
                                                </div>
                                                <div className='flex gap-1.5 flex-col'>
                                                    <span className='text-[20px]'>{dishs.price}$</span>
                                                    <h4 className='text-[12px] uppercase'>par persone</h4>
                                                    <p className='text-[15px]'>{dishs.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='flex justify-center items-center'>
                                            <span
                                                className="uppercase text-[16px] text-white bg-transparent border w-fit px-4 py-1 cursor-pointer">
                                                Réverser
                                            </span>
                                        </div>
                                        <div
                                            onClick={handleClosePopup}
                                            className="text-4xl absolute top-0 right-0 p-5 cursor-pointer">
                                            <ClearIcon sx={{ fontSize: '40px', color: 'white' }} />
                                        </div>
                                    </div>

                                </>
                            )}
                            {activePopup === "menu" && "La Carte"}
                            {activePopup === "wine" && "Les Vins"}
                            {activePopup === "access" && "Infos & Accès"}
                            {activePopup === "contact" && "Contact"}
                        </div>
                    </div>

                    <div
                        onClick={handleBackPopup}
                        className="text-4xl absolute top-0 left-0 p-5 cursor-pointer"
                    >
                        <span className="flex gap-5 justify-center items-center">
                            <KeyboardBackspaceIcon sx={{ fontSize: "40px", color: "white" }} />
                            <div className="flex justify-center items-center gap-2">
                                <CircleSharpIcon sx={{ fontSize: "5px", color: "white" }} />
                                <CircleSharpIcon sx={{ fontSize: "5px", color: "white" }} />
                                <CircleSharpIcon sx={{ fontSize: "10px", color: "white" }} />
                            </div>
                        </span>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default RestaurantContents;