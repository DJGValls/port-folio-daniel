import { Box, IconButton } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTranslations } from "next-intl";

function CustomFooter() {
    const t = useTranslations("footer");
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: "var(--background)",
                backdropFilter: "blur(8px)",
                borderTop: "1px solid rgba(253, 224, 71, 0.2)",
                zIndex: 30,
            }}>
            <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
                <p className="w-full lg:w-fit text-sm text-center lg:text-left text-bunker-200">
                    {t("footerText")}
                </p>
                <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6">
                    {[
                        { icon: AiFillGithub, href: "https://github.com/DJGValls" },
                        { icon: AiFillLinkedin, href: "https://www.linkedin.com/in/daniel-j-g" },
                        { icon: HiOutlineMail, href: "mailto:jiga1980@gmail.com" },
                    ].map((item, index) => (
                        <IconButton
                            key={index}
                            href={item.href}
                            target="_blank"
                            sx={{
                                color: "#CBD5E1",
                                "&:hover": {
                                    color: "var(--primary)",
                                    backgroundColor: "transparent",
                                },
                            }}>
                            <item.icon size={24} />
                        </IconButton>
                    ))}
                </div>
            </div>
        </Box>
    );
}

export default CustomFooter;
