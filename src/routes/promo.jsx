import { useEffect, useRef } from "react";
import "../css/promo.css";

export function Promo() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const hue = 217;
        const maxStars = 1400;
        let animationFrameId;
        let w = 0;
        let h = 0;
        let stars = [];

        const canvas2 = document.createElement("canvas");
        const ctx2 = canvas2.getContext("2d");
        canvas2.width = 100;
        canvas2.height = 100;
        const half = canvas2.width / 2;
        const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, "#fff");
        gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
        gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
        gradient2.addColorStop(1, "transparent");

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

        const random = (min, max) => {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        if (min > max) [min, max] = [max, min];
        return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const maxOrbit = (x, y) => {
        const max = Math.max(x, y);
        const diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        };

        class Star {
        constructor() {
            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 50000;
            this.alpha = random(2, 10) / 10;
        }

        draw() {
            const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
            const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
            const twinkle = random(10);

            if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
            }

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(
            canvas2,
            x - this.radius / 2,
            y - this.radius / 2,
            this.radius,
            this.radius
            );
            this.timePassed += this.speed;
        }
        }

        const initCanvas = () => {
        w = canvas.width = canvas.offsetWidth || window.innerWidth;
        h = canvas.height = canvas.offsetHeight || window.innerHeight;
        stars = Array.from({ length: maxStars }, () => new Star());
        };

        const animate = () => {
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }

        animationFrameId = window.requestAnimationFrame(animate);
        };

        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);

        return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", initCanvas);
        };
    }, [])

    return (
        <section className="promo-section">
            <canvas ref={canvasRef} className="promo-canvas" />
            <div className="promo-content">
                <div className="promo-img-container">
                    <img src="https://i.postimg.cc/9XvKhSNc/69-sin-titulo-20250129061922.png" alt="imagen del protagonista"/>
                </div>
                <h3>Santiago Maya</h3>
                <p>Fullstack Programmer and Video Game Developer</p>
                <div className="promo-details">
                    <h4>Contáctame</h4>
                    <p>¿Te interesa esta página? Contáctame para más información</p>
                    <a href="https://portafolioreactsantimy.pages.dev/">Portafolio</a>
                </div>
            </div>
        </section>
    )
}