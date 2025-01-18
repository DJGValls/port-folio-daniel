"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionHeader({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{
                    y: -100, // Inicia desde arriba para el navbar
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                exit={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
