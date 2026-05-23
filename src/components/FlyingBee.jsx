import React, { useEffect, useRef } from 'react';

const FlyingBee = () => {
  const beeRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    // Start slightly off-screen top left
    let targetX = -50; 
    let targetY = 100;
    let currentX = -50;
    let currentY = 100;
    let rotation = 0;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight
      );
      const maxScroll = docHeight - window.innerHeight;
      
      // Calculate progress and prevent division by zero or NaN issues
      let progress = 0;
      if (maxScroll > 0) {
        progress = Math.min(Math.max(scrolled / maxScroll, 0), 1); // 0 to 1
      }

      // 1. Calculate X Pos (moving across the screen back and forth)
      // We'll make it swoop horizontally twice (sin wave based on progress)
      const swoopX = Math.sin(progress * Math.PI * 3); 
      // Base X moves linearly from 10% to 90%
      const baseX = window.innerWidth * 0.1 + (progress * window.innerWidth * 0.8);
      targetX = baseX + (swoopX * 50);

      // 2. Calculate Y Pos
      // Base Y moves linearly down the screen viewport, but we add a bounding box
      const baseY = window.innerHeight * 0.4; 
      // Add a higher frequency wave for the "flying/bobbing" motion
      const waveY = Math.sin(progress * Math.PI * 15) * 40;
      // Bee moves down slightly within the viewport as you scroll
      targetY = baseY + (progress * (window.innerHeight * 0.3)) + waveY;

      // 3. Landing on Footer Logic
      if (progress > 0.98) {
         // Force targeting near the center bottom
         targetX = window.innerWidth / 2;
         // Adjust this absolute value based on your footer height so it "sits" nicely
         targetY = window.innerHeight - 90; 
      }
    };

    const animate = () => {
      // Linear Interpolation for smooth follow
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      currentX += dx * 0.08;
      currentY += dy * 0.08;
      
      // Calculate rotation. Flips horiz. based on movement 'dx'. Bobbing adds tilt.
      const isMovingRight = dx > 0;
      // Apple's bee faces left by default. 
      // If moving right, we want scaleX(-1) to flip it.
      const scaleX = isMovingRight ? -1 : 1; 
      
      // Tilt it down slightly when dropping, up when rising
      const targetRotation = dy * 0.5; 
      rotation += (targetRotation - rotation) * 0.1;
      
      // Clamp rotation to prevent crazy spinning
      const clampedRotation = Math.max(-30, Math.min(rotation, 30));

      if (beeRef.current) {
         beeRef.current.style.transform = `translate(${currentX}px, ${currentY}px) scaleX(${scaleX}) rotate(${clampedRotation}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Force initial calculation
    setTimeout(() => {
      handleScroll();
      animate();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={beeRef} 
      style={{ 
        position: 'fixed', 
        top: 0, // Base position mapped by translate
        left: 0,
        zIndex: 9999, 
        pointerEvents: 'none',
        fontSize: '48px',
        filter: 'drop-shadow(0px 8px 10px rgba(92, 64, 51, 0.4))',
        willChange: 'transform'
      }}
    >
      🐝
    </div>
  );
};

export default FlyingBee;
