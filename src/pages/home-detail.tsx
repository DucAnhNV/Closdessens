import { useEffect, useRef, useState } from "react";
import InfosHotel from "../components/infos-hotel";
import ReverserMenu from "../components/reverser-menu";


const contents = [
    { name: "le corth", color: '#C1780A', image: "https://images.prismic.io/clos-des-sens/4bb2ede9-e957-4421-ac09-6f7ea3b5273e_Visual.png?auto=compress%2Cformat&rect=0%2C1%2C639%2C1078&h=1080&q=80&width=1920" },
    { name: "episode", color: '#272727', image: "https://images.prismic.io/clos-des-sens/844be73a-1842-45ac-9aa1-45f756356e3e_Cover_Episodes.jpg?auto=compress%2Cformat&rect=1747%2C0%2C1280%2C2160&h=1080&q=80&width=1920" },
    { name: "la table", color: '#343A45', image: "https://images.prismic.io/clos-des-sens/06d5f1f3-49a3-439c-a6a9-58d75489e021_CLOS-DES-SENS-MATTHIEU-CELLARD-SALLE-38.jpg?auto=format%2Ccompress&rect=104%2C0%2C2100%2C3543&h=1080&q=80&width=1920" },
    { name: "rever", color: '#774922', image: "https://images.prismic.io/clos-des-sens/9040ebcf-7e35-430e-a718-937dad029ba7_clos-des-sens-juillet-2023-personnage-50.jpg?auto=format%2Ccompress&rect=175%2C0%2C2799%2C4724&h=1080&q=80&width=1920" },
    { name: "la jardin", color: '#273D1C', image: "https://images.prismic.io/clos-des-sens/be844b16-75e6-4f3e-bc40-3cd854a02c56_le-clos-des-sens-juin-2022-cortil-jardin-69.jpg?auto=compress%2Cformat&rect=1150%2C0%2C1633%2C2756&h=1080&q=80&width=1920" },
    { name: "l'âme", color: '#2F2F2F', image: "https://images.prismic.io/clos-des-sens/53c6c28d-7be5-45a7-bde1-b1d9e83c1ba6_le-clos-des-sens-juin-2022-portrait-31.jpg?auto=compress%2Cformat&rect=2166%2C997%2C3205%2C5409&h=1080&q=80&width=1920" },
];

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

    const handleOpenChambre = () => {
        handleCloseReverser();
        setTimeout(() => {
            setOpenChambre(true);
        }, 100);
    };


    const handleCloseChambre = () => setOpenChambre(false);

    useEffect(() => {
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
                        contents.map((content, i) => (
                            <li
                                key={`${index}-${i}`}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                className={`text-[10rem] whitespace-nowrap uppercase transition-opacity duration-500 ${activeIndexes.includes(i) ? "opacity-100" : "opacity-50"
                                    }`}
                            >
                                {content.name}
                            </li>
                        ))
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
                            backgroundColor: `${contents[activeIndex].color}FF`, // FF = none opacity
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
                            backgroundColor: `${contents[activeIndex].color}FF`,
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

