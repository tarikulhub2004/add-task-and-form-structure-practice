"use client"

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    // onClick={() => setTheme(theme === "dark" ? "light" : "dark"

    return (
        <div>
            <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Enable notifications">
                <Switch.Content>
                    <Switch.Control>
                        <Switch.Thumb>
                            <Switch.Icon>
                                {theme === "dark" ? <Sun></Sun> : <Moon></Moon>}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </Switch.Content>
            </Switch>
        </div>
    );
};

export default ThemeToggle;