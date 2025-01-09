import { HiOutlineMail } from "react-icons/hi";
import FooterButton from "../buttons/FooterButton";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function CustomFooter() {
    return (
        <footer className="fixed bottom-0 w-full bg-bunker-950/50 border-t-bunker-500/20 border-t z-30">
            <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
                <p className="w-full lg:w-fit text-sm text-center lg:text-left">© 2025 Todos los derechos reservados</p>

                <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6 group/list">
                    <FooterButton href="https://github.com/DJGValls" icon={AiFillGithub} />
                    <FooterButton href="https://www.linkedin.com/in/daniel-j-g" icon={AiFillLinkedin} />
                    <FooterButton href="mailto:jiga1980@gmail.com" icon={HiOutlineMail} />
                </div>
            </div>
        </footer>
    );
}

export default CustomFooter;
