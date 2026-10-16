"use client";

import { ThemeProvider } from "next-themes";
import {Switch} from "@heroui/react";

const NextThemesProvider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children} 
        </ThemeProvider>
    );
};

export default NextThemesProvider;