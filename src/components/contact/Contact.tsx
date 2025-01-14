import { AiOutlineMessage } from "react-icons/ai";
import ContactForm from "./ContactForm";
import { CustomCard } from "../cards/CustomCard";

function Contact() {
    return (
        <CustomCard title="CONTACTO" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
            <div className="w-full">
                <ContactForm />
            </div>
            <div className="flex flex-col items-center justify-center">
    <AiOutlineMessage className="text-9xl text-yellow-300 mb-4" />
    <p className="text-center text-bunker-200 max-w-md">
        ¿Te ha gustado este Port-Folio, Tienes alguna pregunta o propuesta? No dudes en contactarme. 
        Rellena el formulario y me pondré en contacto contigo lo antes posible.
    </p>
</div>
        </div>
    </CustomCard>
    );
}

export default Contact;
