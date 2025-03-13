import { useEffect, useRef, useState } from "react";
import InfosHotel from "../components/infos-hotel";
import ReverserMenu from "../components/reverser-menu";
import data from "../data/dta.json";


type ContentType = {
    name: string;
    color: string;
    image: string;
};

export default function InfiniteScrollList() {

    const listRef = useRef<HTMLDivElement | null>(null);
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const [openReverser, setOpenReverser] = useState(false);
    const [openInfos, setOpenInfos] = useState(false);
    const [openChambre, setOpenChambre] = useState(false);

    const handleOpenReverser = () => setOpenReverser(true);
    const handleCloseReverser = () => setOpenReverser(false);

    const handleOpenInfos = () => setOpenInfos(true);
    const handleCloseInfos = () => setOpenInfos(false);

    const [contents, setContents] = useState<ContentType[]>(data.contents || []);

    const handleOpenChambre = () => {
        handleCloseReverser();
        setTimeout(() => {
            setOpenChambre(true);
        }, 100);
    };


    const handleCloseChambre = () => setOpenChambre(false);

    useEffect(() => {
        setContents(data.contents);
        const listElement = listRef.current;
        if (!listElement) return;

        const fullHeight = listElement.scrollHeight / 3;

        const handleScroll = () => {
            if (!listElement) return;

            const scrollPosition = listElement.scrollTop;
            const containerHeight = listElement.clientHeight;

            const newActiveIndexes: number[] = [];
            const items = listElement.querySelectorAll("li");

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemCenter = rect.top + rect.height / 2;

                if (itemCenter >= containerHeight * 0.4 && itemCenter <= containerHeight * 0.6) {
                    newActiveIndexes.push(index % contents.length);
                }
            });

            setActiveIndexes(newActiveIndexes);
            if (newActiveIndexes.length > 0) {
                setActiveIndex(newActiveIndexes[0]);
            }

            if (scrollPosition >= fullHeight * 2) {
                listElement.scrollTop = fullHeight;
            } else if (scrollPosition <= fullHeight * 0.5) {
                listElement.scrollTop = fullHeight;
            }
        };

        listElement.addEventListener("scroll", handleScroll);
        listElement.scrollTop = fullHeight;

        return () => {
            listElement.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <div className="flex flex-row relative">
            <div
                ref={listRef}
                className="h-screen overflow-y-scroll transition-all duration-700 no-scrollbar basis-2/3 relative bg-[url(https://closdessens.com/img/grain.png)]"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    backgroundColor: contents[activeIndex].color,
                    opacity: '30',
                }}
            >
                <ul className="absolute top-0 left-50 w-full h-full flex flex-col gap-70 uppercase z-30 pointer-events-none text-white">
                    {Array.from({ length: 3 }).flatMap((_, index) =>
                        contents.map((content, i) => {
                            const formattedName = content.name.toLowerCase().replace(/\s+/g, "-");

                            return (
                                // <li
                                //     key={`${index}-${i}`}
                                //     style={{ fontFamily: "'Playfair Display', serif" }}
                                //     className={`text-[10rem] whitespace-nowrap uppercase transition-opacity duration-500 ${activeIndexes.includes(i) ? "opacity-100" : "opacity-50"
                                //         }`}
                                // >
                                //     <a href={`/${formattedName}`} className="pointer-events-auto">
                                //         {content.name}
                                //     </a>
                                // </li>
                                <li
                                    key={`${index}-${i}`}
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                    className={`text-[10rem] whitespace-nowrap uppercase transition-opacity duration-500 ${activeIndexes.includes(i) ? "opacity-100" : "opacity-50"
                                        }`}
                                >
                                    <a
                                        href={`/${formattedName}`} // Dùng thẻ `<a>` để điều hướng
                                        className="pointer-events-auto"
                                    >
                                        {content.name}
                                    </a>
                                </li>

                            );
                        })
                    )}
                </ul>

            </div>
            <div
                className="h-screen w-full basis-1/3 transition-all duration-700 relative z-10 flex flex-col justify-end"
                style={{
                    backgroundImage: `url(${contents[activeIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="pl-50 mb-5 text-[25px] uppercase text-white font-[50]" style={{ fontFamily: "'Poppins', serif" }}>
                    Clos des<span className="font-[500]"> sens</span>
                </h1>

                <div className="absolute top-[43%] right-[18px] flex flex-col gap-25 -translate-y-1/2">
                    <button
                        className="duration-300 text-white px-6 py-1.5 transition-all cursor-pointer uppercase -rotate-90 origin-right"
                        style={{
                            backgroundColor: `${contents[activeIndex].color}CC`, // FF = none opacity
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

        </div>
    );
}

