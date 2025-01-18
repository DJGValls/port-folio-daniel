"use client";
import { useEffect, useRef, useState } from "react";

export const DeserParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        // Limpieza del listener
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Función para redimensionar el canvas
        const resizeCanvas = () => {
            canvas.width = windowSize.width;
            canvas.height = windowSize.height;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5;
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x > canvasWidth) this.x = 0;
                if (this.x < 0) this.x = canvasWidth;
                if (this.y > canvasHeight) this.y = 0;
                if (this.y < 0) this.y = canvasHeight;
            }

            draw() {
                ctx!.beginPath();
                ctx!.fillStyle = "rgba(253, 224, 71, 0.3)"; // Menor opacidad
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        // Crear nuevo array de partículas
        const particles: Particle[] = [];
        for (let i = 0; i < 150; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }

        // Función de animación
        let animationFrameId: number;
        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            particles.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw();
            });
    
            animationFrameId = requestAnimationFrame(animate);
        };
    
        animate();

        return () => {
            // reset canvas
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [windowSize]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};
