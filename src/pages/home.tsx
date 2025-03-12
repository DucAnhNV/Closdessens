import { useState } from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [textAnimationDone, setTextAnimationDone] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false); // Chỉ true khi video bắt đầu chạy


    return (
        <>
            <div className="relative h-screen w-full">
                {/* Ảnh nền giữ lại cho đến khi video tải xong */}
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoPlaying ? "opacity-0" : "opacity-100"
                        }`}
                    style={{
                        backgroundImage:
                            "url('https://images.prismic.io/clos-des-sens/Zwj-q4F3NbkBXQgZ_Chemine%CC%81e.00_00_00_00.Still001.jpg?auto=format%2Ccompress&rect=0%2C0%2C1920%2C1080&w=1920&h=1080&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>

                {/* Lớp overlay đen để tránh bị giật trắng */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                {/* Video Background */}
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                        onLoadedData={() => setVideoLoaded(true)}
                        onPlay={() => setVideoPlaying(true)} // Chỉ khi video bắt đầu phát mới ẩn ảnh nền
                    >
                        <source
                            src="https://player.vimeo.com/progressive_redirect/playback/1018627095/rendition/1080p/file.mp4?loc=external&signature=8e4100936e043065878490a43322e388ad86365b3ed458c7c967a784ed7517a7"
                            type="video/mp4"
                        />
                    </video>
                </div>

                {/* Nội dung trang với hiệu ứng Float Up */}
                <motion.div
                    className="relative h-screen w-full flex justify-center items-center z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    onAnimationComplete={() => setTextAnimationDone(true)} // Kích hoạt video sau hiệu ứng chữ
                >
                    <div className="h-[380px] w-[865px] flex bg-transparent bg-opacity-60 p-8">
                        <div className="grid grid-rows-3 h-full w-full">
                            <h1
                                className="relative top-[-40px] text-[110px] uppercase text-white font-[50]"
                                style={{ fontFamily: "'Poppins', serif" }}
                            >
                                Clos des<span className="font-[500]"> sens</span>
                            </h1>

                            <p
                                className="text-white pl-[100px] pt-[20px] text-[37px] uppercase tracking-[.6px]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Hotel 5 étoiles relais & chateaux <br />
                                Restaurant gastronomique <br />
                                3 étoiles Michelin
                            </p>
                            <div
                                onClick={() => navigate("/home")}
                                className="h-full w-full flex justify-end items-center pr-12 mt-16 cursor-pointer"
                            >
                                <div className="uppercase text-white border border-white bg-transparent px-12 py-1 inline-block hover:border-white hover:bg-white hover:text-black">
                                    Découvrir
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Social Icons */}
                <div className="absolute bottom-12 left-0 h-fit w-full flex justify-center gap-x-30 gap-y-40">
                    {data.map((items) => (
                        <div key={items.id} className="group h-[70px] w-[70px] flex items-center">
                            <a href={items.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={items.image}
                                    className="relative z-10 grayscale group-hover:opacity-100 transition duration-300 opacity-50 cursor-pointer"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
