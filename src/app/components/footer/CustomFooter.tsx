import { HiOutlineMail } from "react-icons/hi"
import FooterButton from "../buttons/FooterButton"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


function CustomFooter() {
  return (
    <footer className="bg-bunker-950/50 mt-96 border-t-bunker-500/20 border-t">
    <div className="container mx-auto flex flex-wrap justify-between items-center p-8">
      <p className="w-full lg:w-fit text-sm text-center lg:text-left">© 2023 Todos los derechos reservados</p>

      <div className="w-full lg:w-fit justify-center mt-8 lg:mt-0 flex space-x-6 group/list">
        <FooterButton href="https://github.com/DJGValls" icon={AiFillGithub} />
        <FooterButton href="https://www.linkedin.com/in/daniel-j-g" icon={AiFillLinkedin} />
        <FooterButton href="mailto:jiga1980@gmail.com" icon={HiOutlineMail} />
      </div>
    </div>
  </footer>
  )
}

export default CustomFooter