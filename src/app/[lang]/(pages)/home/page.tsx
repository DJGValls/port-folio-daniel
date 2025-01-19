import CustomHome from "@/components/home/CustomHome";
import TransitionLayout from "@/components/transitions/TransitionLayout";

export default function HomePage() {
    return (
        <TransitionLayout>
            <CustomHome />
        </TransitionLayout>
    );
}
