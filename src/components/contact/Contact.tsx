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
            <div className="flex items-center justify-center">
                <AiOutlineMessage className="text-9xl text-red-300" />
            </div>
        </div>
    </CustomCard>
    );
}

export default Contact;
