"use client";
import { motion } from "framer-motion";
import TransitionLayout from "../transitions/TransitionLayout";

export default function LoadingScreen() {
    return (
        <TransitionLayout>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <motion.div
                    className="h-32 w-32 rounded-full border-4 border-yellow-300/80"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </TransitionLayout>
    );
}
