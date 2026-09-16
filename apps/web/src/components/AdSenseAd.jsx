import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable, responsive Google AdSense ad component for HGROISH.
 * 
 * Features:
 * - Prevents duplicate ad initialization on route changes or component re-renders
 * - Reserves responsive space to prevent Cumulative Layout Shift (CLS)
 * - Compliant with Google AdSense disclosure policies (clear "Advertisement" badge)
 * - Graceful fallback handling for unfilled ads or blocked scripts
 * - Seamlessly integrates with HGROISH light and dark page aesthetics
 */
const AdSenseAd = ({
  client = 'ca-pub-8267296728655232',
  slot,
  format = 'auto',
  responsive = 'true',
  layout,
  layoutKey,
  className = '',
  style = {},
  variant = 'default',
  label = 'Advertisement',
  showLabel = true,
  minHeight,
  align = 'center',
}) => {
  const adRef = useRef(null);
  const isPushedRef = useRef(false);
  const [adStatus, setAdStatus] = useState('pending'); // 'pending' | 'loaded' | 'unfilled' | 'error'
  const location = useLocation();

  // Determine default reserved minimum height based on variant & format to prevent CLS
  const getDefaultMinHeight = () => {
    if (minHeight) return minHeight;
    switch (variant) {
      case 'banner':
        return '90px';
      case 'card':
      case 'sidebar':
      case 'rectangle':
        return '250px';
      case 'in-article':
      case 'in-feed':
        return '120px';
      case 'minimal':
        return '60px';
      default:
        return format === 'rectangle' ? '250px' : '90px';
    }
  };

  const computedMinHeight = getDefaultMinHeight();

  useEffect(() => {
    isPushedRef.current = false;
    setAdStatus('pending');

    const initializeAd = () => {
      if (!adRef.current) return;

      // Check if ad element already initialized or processed
      const statusAttr = adRef.current.getAttribute('data-adsbygoogle-status');
      if (statusAttr === 'done' || isPushedRef.current) {
        return;
      }

      try {
        if (typeof window !== 'undefined') {
          // Initialize adsbygoogle array if not already present
          window.adsbygoogle = window.adsbygoogle || [];
          
          // Push ad request
          window.adsbygoogle.push({});
          isPushedRef.current = true;
          setAdStatus('loaded');
        }
      } catch (err) {
        // TagError or duplicate push protection
        if (process.env.NODE_ENV === 'development') {
          console.debug('[AdSenseAd] Safe push notice:', err.message);
        }
        setAdStatus('error');
      }
    };

    // Use small delay to ensure DOM layout is calculated and avoid race conditions during transitions
    const timeoutId = setTimeout(initializeAd, 150);

    // Watch for AdSense unfilled status if applied by Google script
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-ad-status') {
          const status = adRef.current?.getAttribute('data-ad-status');
          if (status === 'unfilled') {
            setAdStatus('unfilled');
          }
        }
      });
    });

    if (adRef.current) {
      observer.observe(adRef.current, { attributes: true });
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname, slot]);

  // Variant classes for clean aesthetic integration
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return 'bg-slate-900/60 border-slate-800/80 text-slate-400';
      case 'banner':
        return 'bg-slate-100/70 border-slate-200/80 text-slate-500';
      case 'sidebar':
        return 'bg-white border-slate-200/90 text-slate-500 shadow-sm';
      case 'card':
        return 'bg-white border-slate-200 text-slate-500 shadow-sm';
      case 'minimal':
        return 'bg-transparent border-transparent text-slate-400';
      default:
        return 'bg-slate-50/80 border-slate-200/70 text-slate-500';
    }
  };

  const containerClasses = [
    'groish-ad-container',
    'relative',
    'w-full',
    'overflow-hidden',
    'rounded-2xl',
    'border',
    'transition-all',
    'duration-300',
    getVariantStyles(),
    align === 'center' ? 'mx-auto' : '',
    className,
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'block',
    'text-[10px]',
    'font-bold',
    'uppercase',
    'tracking-[0.24em]',
    'mb-1.5',
    'text-center',
    'opacity-60',
    'select-none',
  ].join(' ');

  return (
    <div
      className={containerClasses}
      style={{
        minHeight: computedMinHeight,
        ...style,
      }}
      aria-label="Sponsored Advertisement"
    >
      <div className="p-3 sm:p-4">
        {showLabel && (
          <span className={labelClasses} aria-hidden="true">
            {label}
          </span>
        )}

        <div className="flex w-full items-center justify-center overflow-hidden">
          <ins
            ref={adRef}
            key={`${location.pathname}-${slot || 'auto'}`}
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              minHeight: computedMinHeight,
              textAlign: 'center',
            }}
            data-ad-client={client}
            {...(slot ? { 'data-ad-slot': slot } : {})}
            {...(format ? { 'data-ad-format': format } : {})}
            {...(responsive ? { 'data-full-width-responsive': responsive } : {})}
            {...(layout ? { 'data-ad-layout': layout } : {})}
            {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdSenseAd);
