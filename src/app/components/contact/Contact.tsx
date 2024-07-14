
import { AiOutlineMessage } from 'react-icons/ai'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div id="contact" className="container mx-auto mt-96 px-4">
    <p className="text-xl mb-2">¿Necesitas un programador?</p>
    <h3 className="text-5xl font-bold text-red-300">Ponte En Contacto</h3>

    <div className="bg-bunker-950/50 px-10 py-16 rounded-md ring-1 ring-bunker-500/20 p-8 mt-20 flex">
      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
      <div className="w-1/2 grow items-center justify-center hidden lg:flex">
        <AiOutlineMessage className="text-9xl text-red-300" />
      </div>
    </div>
  </div>
  )
}

export default Contact