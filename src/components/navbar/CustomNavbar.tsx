"use client";

import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Email, Home, Person, Work } from "@mui/icons-material";

function CustomNavbar() {
    const [value, setValue] = React.useState(0);
    // const lang = params.lang || 'en';
    const lang = "en";

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
                            backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo negro con transparencia
                            backdropFilter: "blur(8px)", // Efecto de difuminado
                            "& .MuiBottomNavigationAction-root": {
                                color: "#CBD5E1",
                                "&:hover": {
                                    color: "rgba(253, 224, 71, 0.8)",
                                },
                                "&.Mui-selected": {
                                    color: "rgba(253, 224, 71, 0.8)",
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
                    </BottomNavigation>
                </Box>
            </div>
        </div>
    );
}

export default CustomNavbar;
