import React, { useEffect, useRef, useState } from 'react';
import { Flower2 } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color: string;
  type: 'rose' | 'jasmine' | 'marigold';
}

export const FallingFlowers: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsEnabled(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle, optimized particle counts (fewer on mobile to prevent any battery/CPU drain)
    const isMobile = width < 768;
    const petalCount = isMobile ? 18 : 32;

    const colors = {
      rose: ['#EAA4A6', '#F3BFC1', '#DA888B', '#F9D8D9'],
      marigold: ['#F7D270', '#E5B74E', '#FCE39E'],
      jasmine: ['#FFFDF7', '#FBF4E6', '#FAF2DE']
    };

    const types: ('rose' | 'jasmine' | 'marigold')[] = ['rose', 'rose', 'marigold', 'jasmine'];

    const createPetal = (initialY = -20): Petal => {
      const type = types[Math.floor(Math.random() * types.length)];
      const typeColors = colors[type];
      const color = typeColors[Math.floor(Math.random() * typeColors.length)];

      return {
        x: Math.random() * width,
        y: initialY,
        size: Math.random() * 8 + (type === 'jasmine' ? 6 : 9),
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() * 1.5 - 0.75) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
        opacity: Math.random() * 0.45 + 0.45,
        color,
        type
      };
    };

    // Pre-populate particles across screen
    const petals: Petal[] = Array.from({ length: petalCount }, () =>
      createPetal(Math.random() * height)
    );

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(Math.cos(p.flip), 1);
      ctx.globalAlpha = p.opacity;

      ctx.fillStyle = p.color;
      ctx.beginPath();

      if (p.type === 'rose') {
        // Heart/Drop shaped rose petal
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
      } else if (p.type === 'jasmine') {
        // Delicate oval jasmine blossom petal
        ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.8, 0, 0, Math.PI * 2);
      } else {
        // Marigold ruffled petal
        ctx.moveTo(0, -p.size * 0.3);
        ctx.bezierCurveTo(-p.size * 0.4, 0, -p.size * 0.5, p.size * 0.7, 0, p.size);
        ctx.bezierCurveTo(p.size * 0.5, p.size * 0.7, p.size * 0.4, 0, 0, -p.size * 0.3);
      }

      ctx.fill();
      ctx.restore();
    };

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      // Delta time smoothing
      const delta = Math.min((currentTime - lastTime) / 16.6, 2.5);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY * delta;
        p.x += (p.speedX + Math.sin(p.y * 0.008) * 0.4) * delta;
        p.rotation += p.rotationSpeed * delta;
        p.flip += p.flipSpeed * delta;

        // Reset if off bottom or sides
        if (p.y > height + 20) {
          petals[i] = createPetal(-20);
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="falling-flowers-canvas"
          aria-hidden="true"
        />
      )}

      {/* Discreet floating toggle to turn falling petals on or off */}
      <button
        type="button"
        className={`petals-toggle-btn ${isEnabled ? 'is-active' : ''}`}
        onClick={() => setIsEnabled(!isEnabled)}
        aria-label={isEnabled ? 'Pause falling flower animation' : 'Enable falling flower animation'}
        title={isEnabled ? 'Flower Petals: On (Click to pause)' : 'Flower Petals: Paused (Click to resume)'}
      >
        <Flower2 size={16} />
      </button>

      <style>{`
        .falling-flowers-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 99;
          filter: drop-shadow(0 2px 4px rgba(92, 18, 37, 0.08));
        }
        .petals-toggle-btn {
          position: fixed;
          bottom: 1.8rem;
          left: 1.8rem;
          z-index: 100;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--gold-dark);
          border: 1.5px solid var(--hairline-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(92, 18, 37, 0.12);
          transition: all 0.2s ease;
        }
        .petals-toggle-btn:hover {
          transform: scale(1.1);
          border-color: var(--gold-metallic);
          color: var(--royal-wine);
          background: #fff;
        }
        .petals-toggle-btn.is-active {
          color: var(--royal-wine);
        }
        @media (max-width: 768px) {
          .petals-toggle-btn {
            bottom: 1.2rem;
            left: 1.2rem;
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </>
  );
};
