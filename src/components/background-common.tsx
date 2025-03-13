import { useEffect, useRef, useState } from "react";
import InfosHotel from "../components/infos-hotel";
import ReverserMenu from "../components/reverser-menu";
import data from "../data/dta.json";

type ContentType = {
    name: string;
    color: string;
    image: string;
};

export default function BgCommon() {
    const listRef = useRef(null);
    const [contents, setContents] = useState<ContentType[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openReverser, setOpenReverser] = useState(false);
    const [openInfos, setOpenInfos] = useState(false);
    const [openChambre, setOpenChambre] = useState(false);

    // Load dữ liệu từ JSON vào state
    useEffect(() => {
        setContents(data.contents);
    }, []);

    // Nếu dữ liệu chưa load xong, tránh lỗi khi truy cập mảng rỗng
    if (contents.length === 0) {
        return <div>Loading...</div>;
    }

    const handleOpenReverser = () => setOpenReverser(true);
    const handleCloseReverser = () => setOpenReverser(false);
    const handleOpenInfos = () => setOpenInfos(true);
    const handleCloseInfos = () => setOpenInfos(false);
    const handleOpenChambre = () => {
        handleCloseReverser();
        setTimeout(() => {
            setOpenChambre(true);
        }, 100);
    };
    const handleCloseChambre = () => setOpenChambre(false);

    return (
        <div ref={listRef} className="h-screen w-full relative overflow-hidden transition-all duration-700 no-scrollbar">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 opacity-70"
                style={{
                    backgroundImage: `url(https://images.prismic.io/clos-des-sens/40895f18-df77-4790-93db-a73ffc10c902_cortil-septembre-2021-reportage-27.jpg?auto=compress%2Cformat&rect=0%2C219%2C5906%2C3322&h=1080&q=80&width=1920)`,
                    filter: 'brightness(100%)',
                    zIndex: 1,
                }}
            ></div>

            <div
                className="absolute inset-0 bg-repeat opacity-85"
                style={{
                    backgroundImage: `url(https://closdessens.com/img/grain.png)`,
                    backgroundSize: 'auto',
                    backgroundColor: contents[activeIndex].color,
                    zIndex: 2,
                }}
            ></div>


            {/* Nội dung */}
            <div className="absolute top-[43%] right-[18px] flex flex-col gap-25 -translate-y-1/2 z-10">
                <button
                    className="duration-300 text-white px-6 py-1.5 transition-all cursor-pointer uppercase -rotate-90 origin-right"
                    style={{
                        backgroundColor: `${contents[activeIndex].color}CC`,
                    }}
                    onClick={handleOpenReverser}
                >
                    Réverser
                </button>
                <ReverserMenu
                    contents={contents}
                    activeIndex={activeIndex}
                    handleCloseChambre={handleCloseChambre}
                    handleOpenChambre={handleOpenChambre}
                    handleCloseReverser={handleCloseReverser}
                    openReverser={openReverser}
                    openChambre={openChambre}
                />
                <button
                    className="duration-300 text-white cursor-pointer px-6 py-1.5 transition-all uppercase -rotate-90 origin-right"
                    style={{
                        backgroundColor: `${contents[activeIndex].color}CC`,
                    }}
                    onClick={handleOpenInfos}
                >
                    Infos
                </button>
                <InfosHotel
                    handleCloseInfos={handleCloseInfos}
                    openInfos={openInfos}
                    contents={contents}
                    activeIndex={activeIndex}
                />
            </div>
        </div>

    );
}
