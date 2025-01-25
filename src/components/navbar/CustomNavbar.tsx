"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction, MenuItem, Select } from "@mui/material";
import { Email, Home, Person, Work } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { Language } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface CustomNavbarProps {
    lang: string;
}

function CustomNavbar(props: CustomNavbarProps) {
    const { lang } = props;
    const pathname = usePathname();
    const t = useTranslations("navbar");

    const [value, setValue] = useState(() => {
        // Determinar el valor inicial basado en el pathname
        if (pathname.includes("/home")) return 0;
        if (pathname.includes("/aboutMe")) return 1;
        if (pathname.includes("/projects")) return 2;
        if (pathname.includes("/contact")) return 3;
        return 0;
    });
    const [animateIcon, setAnimateIcon] = useState<boolean>(false);
    const router = useRouter();

    const handleLanguageChange = (event: any) => {
        const newLang = event.target.value;
        const currentPath = window.location.pathname;
        localStorage.setItem("animateIcon", "true"); // Guardar el estado en localStorage
        const newPath = currentPath.replace(`/${lang}/`, `/${newLang}/`);
        router.push(newPath);
    };

    useEffect(() => {
        // Recuperar el estado de localStorage al cargar el componente
        const shouldAnimate = localStorage.getItem("animateIcon") === "true";
        if (shouldAnimate) {
            setAnimateIcon(true);
            setTimeout(() => {
                setAnimateIcon(false);
                localStorage.removeItem("animateIcon");
            }, 1000);
        }
    }, [animateIcon]);

    useEffect(() => {
        // Actualizar el valor cuando cambie el pathname
        if (pathname.includes("/home")) setValue(0);
        if (pathname.includes("/aboutMe")) setValue(1);
        if (pathname.includes("/projects")) setValue(2);
        if (pathname.includes("/contact")) setValue(3);
    }, [pathname]);

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
                            height: {
                                xs: "70px",    // móviles
                                sm: "80px",    // tablets pequeñas
                                md: "90px",   // tablets
                                lg: "100px",   // desktop
                            },
                            borderBottom: "1px solid rgba(253, 224, 71, 0.2)",
                            backgroundColor: "var(--background)", // Fondo negro con transparencia
                            backdropFilter: "blur(8px)", // Efecto de difuminado
                            display: "flex",
                            justifyContent: "center", // Centrar horizontalmente
                            alignItems: "center", // Centrar verticalmente
                            "& .MuiBottomNavigationAction-root": {
                                flex: "0 1 auto", // Evita que los elementos se estiren
                                minWidth: {
                                    xs: "80px", // móviles
                                    sm: "100px", // tablets pequeñas
                                    md: "130px", // tablets
                                    lg: "150px", // desktop
                                    xl: "170px", // pantallas grandes
                                },
                                color: "#CBD5E1",
                                "&:hover": {
                                    color: "var(--primary)",
                                },
                                "&.Mui-selected": {
                                    color: "var(--primary)",
                                },
                                "& .MuiBottomNavigationAction-label": {
                                    fontSize: {
                                        xs: "0.8rem",
                                        sm: "0.9rem",
                                        md: "1rem",
                                    },
                                    "&.Mui-selected": {
                                        // Ocultamos el texto cuando está seleccionado
                                        opacity: 0,
                                        fontSize: 0,
                                    },
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: {
                                        xs: "1.2rem",
                                        sm: "1.3rem",
                                        md: "1.5rem",
                                    },
                                    transition: "all 0.3s",
                                },
                                "&.Mui-selected .MuiSvgIcon-root": {
                                    // Aumentamos el tamaño del icono cuando está seleccionado
                                    fontSize: "3rem",
                                },
                            },
                        }}>
                        <BottomNavigationAction
                            key={"home"}
                            label={t("home")}
                            icon={<Home />}
                            component={Link}
                            href={`/${lang}/home`}
                        />
                        <BottomNavigationAction
                            key={"aboutMe"}
                            label={t("about")}
                            icon={<Person />}
                            component={Link}
                            href={`/${lang}/aboutMe`}
                        />
                        <BottomNavigationAction
                            key={"projects"}
                            label={t("projects")}
                            icon={<Work />}
                            component={Link}
                            href={`/${lang}/projects`}
                        />
                        <BottomNavigationAction
                            key={"contact"}
                            label={t("contact")}
                            icon={<Email />}
                            component={Link}
                            href={`/${lang}/contact`}
                        />
                        <BottomNavigationAction
                            sx={{
                                // Anular los estilos heredados
                                "& .MuiBottomNavigationAction-label": {
                                    opacity: "1 !important",
                                    fontSize: "inherit !important",
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: "1.5rem !important",
                                },
                            }}
                            key={"language"}
                            label={
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={animateIcon ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <Select
                                        value={lang}
                                        onChange={handleLanguageChange}
                                        sx={{
                                            color: "#CBD5E1",
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            "& .MuiSelect-select": {
                                                paddingY: "0",
                                                textAlign: "center",
                                                marginLeft: "0.7rem",
                                                fontSize: {
                                                    xs: "0.8rem",
                                                    sm: "0.9rem",
                                                    md: "1rem",
                                                },
                                            },
                                            "&:hover": {
                                                color: "var(--primary)",
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "none",
                                            },
                                        }}>
                                        <MenuItem value="es">Español</MenuItem>
                                        <MenuItem value="cat">Català</MenuItem>
                                        <MenuItem value="en">English</MenuItem>
                                    </Select>
                                </motion.div>
                            }
                            icon={
                                <motion.div
                                    animate={animateIcon ? { scale: 2.5, rotate: 360 } : { scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5 }}>
                                    <Language />
                                </motion.div>
                            }
                        />
                    </BottomNavigation>
                </Box>
            </div>
        </div>
    );
}

export default CustomNavbar;
