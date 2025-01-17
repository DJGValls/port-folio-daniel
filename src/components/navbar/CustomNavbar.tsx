"use client";

import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction, MenuItem, Select } from "@mui/material";
import { Email, Home, Person, Work } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Language } from "@mui/icons-material";

interface CustomNavbarProps {
    lang: string;
}

function CustomNavbar(props: CustomNavbarProps) {
    const { lang } = props;
    const [value, setValue] = React.useState(0);

    const router = useRouter();

    const handleLanguageChange = (event: any) => {
        const newLang = event.target.value;
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${lang}/`, `/${newLang}/`);
        router.push(newPath);
    };

    return (
        <div className="fixed top-0 w-full z-30">
            <div className="w-full">
                <Box sx={{ width: "100%" }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{
                            width: "100%",
                            height: "100px",
                            backgroundColor: "var(--background)", // Fondo negro con transparencia
                            backdropFilter: "blur(8px)", // Efecto de difuminado
                            display: "flex",
                            justifyContent: "center", // Centrar horizontalmente
                            alignItems: "center", // Centrar verticalmente
                            "& .MuiBottomNavigationAction-root": {
                                flex: "0 1 auto", // Evita que los elementos se estiren
                                minWidth: "120px", // Ancho mínimo para cada elemento
                                color: "#CBD5E1",
                                "&:hover": {
                                    color: "var(--primary)",
                                },
                                "&.Mui-selected": {
                                    color: "var(--primary)",
                                },
                                "& .MuiBottomNavigationAction-label": {
                                    fontSize: "1rem",
                                    "&.Mui-selected": {
                                        // Ocultamos el texto cuando está seleccionado
                                        opacity: 0,
                                        fontSize: 0,
                                    },
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: "1.5rem",
                                    transition: "all 0.3s",
                                },
                                "&.Mui-selected .MuiSvgIcon-root": {
                                    // Aumentamos el tamaño del icono cuando está seleccionado
                                    fontSize: "3rem",
                                },
                            },
                        }}>
                        <BottomNavigationAction
                            label="Inicio"
                            icon={<Home />}
                            component={Link}
                            href={`/${lang}/home`}
                        />
                        <BottomNavigationAction
                            label="Sobre mi"
                            icon={<Person />}
                            component={Link}
                            href={`/${lang}/aboutMe`}
                        />
                        <BottomNavigationAction
                            label="Proyectos"
                            icon={<Work />}
                            component={Link}
                            href={`/${lang}/projects`}
                        />
                        <BottomNavigationAction
                            label="Contacto"
                            icon={<Email />}
                            component={Link}
                            href={`/${lang}/contact`}
                        />
                        <BottomNavigationAction
                            label="Idioma"
                            icon={<Language />}
                            component={() => (
                                <Select
                                    value={lang}
                                    onChange={handleLanguageChange}
                                    sx={{
                                        color: "#CBD5E1",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "& .MuiSelect-select": {
                                            paddingTop: "40px", // Espacio para el icono
                                            textAlign: "center",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "#CBD5E1",
                                            position: "absolute",
                                            top: "10px", // Ajusta la posición del icono
                                            // left: "50%",
                                            transform: "translateX(-50%)",
                                        },
                                        "&:hover": {
                                            color: "var(--primary)",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                    }}
                                    IconComponent={Language}>
                                    <MenuItem value="es">ES</MenuItem>
                                    <MenuItem value="cat">CAT</MenuItem>
                                    <MenuItem value="en">EN</MenuItem>
                                </Select>
                            )}
                        />
                    </BottomNavigation>
                </Box>
            </div>
        </div>
    );
}

export default CustomNavbar;
