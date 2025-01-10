"use client"
import { Chip, SvgIconProps } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { FaAccessibleIcon } from "react-icons/fa";

type CustomChipLinkButtonProps = {
    label: string;
    href?: string;
    icon?: IconType | React.ComponentType<SvgIconProps>;
} & React.HTMLProps<HTMLAnchorElement>;

function CustomChipLinkButton(props: CustomChipLinkButtonProps) {
    const { href, label, icon: Icon } = props;
    const IconComponent = Icon ? <Icon /> : undefined;

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setTimeout(() => {
            window.open(href, '_blank', 'noopener,noreferrer');
        }, 600);
    };

    return (
        <Chip
            href={href ? href : "#"}
            component="a"
            label={label}
            icon={IconComponent ?? undefined}
            clickable
            onClick={handleClick}
            sx={{
                border: "1px solid rgba(253, 224, 71, 0.5)",
                color: "white",
                padding: "20px", // Añade más padding horizontal
                "& .MuiChip-icon": {
                    fontSize: "1.8rem", // Aumenta el tamaño del icono
                    marginRight: "5px", // Ajusta el margen del icono
                    color: "var(--primary)"
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
