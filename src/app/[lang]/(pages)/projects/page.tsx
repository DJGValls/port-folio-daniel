import Projects from "@/components/projects/Projects";
import TransitionLayout from "@/components/transitions/TransitionLayout";

export default function HomePage() {
    return (
        <TransitionLayout>
            <Projects />
        </TransitionLayout>
    );
}
