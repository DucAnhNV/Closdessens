import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
import RestaurantContents from './contents-infos/restaurant-content/restaurant';
import HotelContents from './contents-infos/restaurant-content/hotel';
import '../styles/style.css'
// import HotelContents from './contents-infos/hotel-content/hotel';
// import OffirContents from './contents-infos/offir-content/offir';
// import PresseContents from './contents-infos/presse-content/presse';
// import RecruitmentContents from './contents-infos/recruitment-content/recruitment';

interface InfosHotelProps {
    handleCloseInfos: () => void;
    openInfos: boolean;
    contents: { name: string; color: string; image: string }[];
    activeIndex: number;
}

const lists_content = [
    { name: "Restaurant", type: "restaurant" },
    { name: "L'hotel", type: "hotel" },
    { name: "Offir", type: "offir" },
    { name: "Presse", type: "presse" },
    { name: "Recrutement", type: "recruitment" },
];

const InfosHotel: React.FC<InfosHotelProps> = ({ handleCloseInfos, openInfos, contents, activeIndex }) => {
    const [openPopup, setOpenPopup] = useState<string | null>(null);

    const handleOpenPopup = (type: string) => {
        setOpenPopup(type);
    };

    const handleClosePopup = () => setOpenPopup(null);

    return (
        <>
            <Modal
                open={openInfos}
                onClose={handleCloseInfos}
                aria-labelledby="modal-modal-infos"
                aria-describedby="modal-modal-description"
            >
                <Box
                    className="modal-style"
                    sx={{
                        bgcolor: contents[activeIndex].color,
                    }}>
                    <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                        {lists_content.map((items, index) => (
                            <div
                                key={index}
                                onClick={() => handleOpenPopup(items.type)}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                className="uppercase h-[10%] w-3/4 flex items-center justify-center text-4xl text-white leading-none"
                            >
                                {items.name}
                            </div>
                        ))}
                    </div>
                    <div
                        onClick={handleCloseInfos}
                        className="text-4xl absolute top-0 right-0 p-15 cursor-pointer">
                        <ClearIcon sx={{ fontSize: '40px', color: 'white' }} />
                    </div>
                </Box>
            </Modal>

            {/* Hiển thị popup tương ứng */}
            {openPopup === "restaurant" && (
                <RestaurantContents handleCloseRestaurant={handleClosePopup} openRestaurant={true} contents={contents} activeIndex={activeIndex} />
            )}
            {openPopup === "hotel" && (
                <HotelContents handleCloseHotel={handleClosePopup} openHotel={true} contents={contents} activeIndex={activeIndex} />
            )}
            {/* {openPopup === "offir" && (
                <OffirContents handleCloseOffir={handleClosePopup} openOffir={true} />
            )}
            {openPopup === "presse" && (
                <PresseContents handleClosePresse={handleClosePopup} openPresse={true} />
            )}
            {openPopup === "recruitment" && (
                <RecruitmentContents handleCloseRecruitment={handleClosePopup} openRecruitment={true} />
            )} */}
        </>
    );
};

export default InfosHotel;