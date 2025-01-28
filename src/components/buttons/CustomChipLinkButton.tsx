"use client";
import { Chip, CircularProgress, SvgIconProps } from "@mui/material";
import React, { useState } from "react";
import { IconType } from "react-icons";

type CustomChipLinkButtonProps = {
    label: string;
    href?: string;
    icon?: IconType | React.ComponentType<SvgIconProps>;
} & React.HTMLProps<HTMLAnchorElement>;

function CustomChipLinkButton(props: CustomChipLinkButtonProps) {
    const { href, label, icon: Icon } = props;
    const IconComponent = Icon ? <Icon /> : undefined;

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (event: React.MouseEvent) => {
        if (href?.includes(".pdf")) {
            // Para archivos PDF en Cloudinary
            setIsLoading(true);
            try {
                const response = await fetch(href);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "CV-Daniel-Jimenez-Gallego-2024.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error("Error downloading PDF:", error);
            } finally {
                setIsLoading(false);
            }
        } else {
            // Para links externos
            setTimeout(() => {
                window.open(href, "_blank", "noopener,noreferrer");
            }, 600);
        }
    };

    return (
        <Chip
            href={href && !href.includes(".pdf") ? href : "#"}
            component="a"
            label={label}
            disabled={isLoading}
            // icon={IconComponent ?? undefined}
            icon={isLoading ? <CircularProgress size={20} color="inherit" /> : IconComponent ?? undefined}
            clickable
            onClick={handleClick}
            target={href && !href.includes(".pdf") ? "_blank" : undefined}
            rel="noopener noreferrer"
            sx={{
                border: "1px solid rgba(253, 224, 71, 0.5)",
                color: "white",
                padding: "20px", // Añade más padding horizontal
                "& .MuiChip-icon": {
                    fontSize: "1.8rem", // Aumenta el tamaño del icono
                    marginRight: "5px", // Ajusta el margen del icono
                    color: "var(--primary)",
                },
                "& .MuiChip-label": {
                    padding: "0 12px", // Aumenta el padding del texto
                    fontSize: "1.1rem",
                },
                "&:hover": {
                    backgroundColor: "rgba(161, 98, 7, 0.6)",
                    color: "var(--primary)",
                    borderColor: "var(--primary)",
                },
            }}
        />
    );
}

export default CustomChipLinkButton;
