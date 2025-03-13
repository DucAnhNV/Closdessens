import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
    bgColor: string;
    bgImage: string;
    setTheme: (color: string, image: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [bgColor, setBgColor] = useState("#ffffff"); // Màu nền mặc định
    const [bgImage, setBgImage] = useState(""); // Ảnh nền mặc định

    const setTheme = (color: string, image: string) => {
        setBgColor(color);
        setBgImage(image);
    };

    return (
        <ThemeContext.Provider value={{ bgColor, bgImage, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
