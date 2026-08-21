import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const supportsCursor = !window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (!supportsCursor) return;

    const cursor = cursorRef.current;
    const glow = glowRef.current;
    const label = labelRef.current;
    if (!cursor || !glow || !label) return;

    let posX = 0;
    let posY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = null;

    const updateFrame = () => {
      posX += (targetX - posX) * 0.18;
      posY += (targetY - posY) * 0.18;
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      glow.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      raf = requestAnimationFrame(updateFrame);
    };

    const setCursorText = (text) => {
      label.textContent = text || '';
      label.style.opacity = text ? '1' : '0';
    };

    const setCursorState = (active) => {
      cursor.classList.toggle('cursor-active', active);
      glow.classList.toggle('cursor-active', active);
    };

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!cursor.classList.contains('cursor-visible')) {
        cursor.classList.add('cursor-visible');
        glow.classList.add('cursor-visible');
        document.body.classList.add('custom-cursor-enabled');
      }

      const magneticEl = event.target.closest('.magnetic');
      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
        const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
        magneticEl.style.setProperty('--pointer-x', `${x}%`);
        magneticEl.style.setProperty('--pointer-y', `${y}%`);
      }
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest('[data-cursor], .interactive-card');
      if (!target) return;
      const attr = target.getAttribute('data-cursor');
      setCursorText(attr || 'EXPLORE');
      setCursorState(true);
    };

    const handleMouseOut = (event) => {
      const related = event.relatedTarget;
      if (related && (related.closest('[data-cursor]') || related.closest('.interactive-card'))) return;
      setCursorText('');
      setCursorState(false);
    };

    const handleMouseLeave = () => {
      setCursorText('');
      setCursorState(false);
      cursor.classList.remove('cursor-visible');
      glow.classList.remove('cursor-visible');
      document.body.classList.remove('custom-cursor-enabled');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);

    raf = requestAnimationFrame(updateFrame);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (raf) cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="custom-cursor-glow" />
      <div ref={cursorRef} className="custom-cursor">
        <div className="custom-cursor-dot" />
        <div ref={labelRef} className="custom-cursor-label" aria-hidden="true" />
      </div>
    </>
  );
};

export default CustomCursor;
