import Contact from "@/components/contact/Contact";
import TransitionLayout from "@/components/transitions/TransitionLayout";

export default function HomePage() {
    return (
        <TransitionLayout>
            <Contact />
        </TransitionLayout>
    );
}
