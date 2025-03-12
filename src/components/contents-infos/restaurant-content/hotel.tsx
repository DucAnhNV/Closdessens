import ClearIcon from '@mui/icons-material/Clear';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface HotelContentProps {
    handleCloseHotel: () => void;
    openHotel: boolean;
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
    boxShadow: 24,
    p: 4,
};

const HotelContents: React.FC<HotelContentProps> = ({ handleCloseHotel, openHotel, contents, activeIndex }) => {
    return (
        <Modal
            open={openHotel}
            onClose={handleCloseHotel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, bgcolor: contents[activeIndex].color }}>
                <div className="text-center text-3xl font-bold text-gray-800">
                    {contents[activeIndex].name}
                </div>
                <img src={contents[activeIndex].image} alt={contents[activeIndex].name} className="w-full h-auto mt-4" />
                <p className="mt-4 text-gray-600 text-lg">Thông tin chi tiết về khách sạn...</p>
                <div
                    onClick={handleCloseHotel}
                    className="absolute top-4 right-4 cursor-pointer text-gray-700 hover:text-gray-900"
                >
                    <ClearIcon sx={{ fontSize: '30px' }} />
                </div>
            </Box>
        </Modal>
    );
};

export default HotelContents;