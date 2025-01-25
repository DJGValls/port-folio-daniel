import { AiOutlineMessage } from "react-icons/ai";
import ContactForm from "./ContactForm";
import { CustomCard } from "../cards/CustomCard";
import { useTranslations } from "next-intl";

function Contact() {
    const t = useTranslations("contact");
    return (
        <CustomCard title={t("title")} id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
                <div className="w-full">
                    <ContactForm />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <AiOutlineMessage className="text-9xl text-yellow-300 mb-4" />
                    <p className="text-center text-white max-w-md">{t("text1")}</p>
                    <p className="text-center text-white max-w-md">{t("text2")}</p>
                </div>
            </div>
        </CustomCard>
    );
}

export default Contact;
