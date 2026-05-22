import React from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  showText?: boolean;
  className?: string;
  light?: boolean;
}

export default function Logo({
  width = 40,
  height = 40,
  showText = true,
  className = '',
  light = false,
}: LogoProps) {
  return (
    <div 
      className={`flex items-center gap-3 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.75rem' 
      }}
    >
      {/* Authentic TP Monogram Emblem */}
      <img
        src="/logo-emblem.png"
        alt="Techsystem Soft Emblem"
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          objectFit: 'contain',
          display: 'block',
        }}
      />

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            className="header-logo-name"
            style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: 'var(--fg)', // Adaptive dark slate text to fix black rectangle rendering bug
              fontFamily: 'var(--font-heading)',
            }}
          >
            TECHSYSTEM
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 800,
              letterSpacing: '0.35em',
              color: 'var(--accent)', // Accent cyan-blue
              textTransform: 'uppercase',
              marginTop: '0.1rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            SOFT
          </span>
        </div>
      )}
    </div>
  );
}
