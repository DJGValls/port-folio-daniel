import CustomHome from "@/components/header/CustomHome";
import TransitionLayout from "@/components/transitions/TransitionLayout";

export default function HomePage() {
    return (
        <TransitionLayout>
            <CustomHome />
        </TransitionLayout>
    );
}
