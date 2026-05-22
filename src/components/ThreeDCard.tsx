'use client';

import React from 'react';
import { Code, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function ThreeDCard() {
  return (
    <div className="card-3d-container">
      <div className="card-3d constant-spin">
        {/* Glow behind the card */}
        <div className="card-3d-bg-glow" />

        {/* Glass Reflection / Glare layer */}
        <div className="card-3d-glare" />

        {/* Content Container (holds layout elements) */}
        <div className="card-3d-content-wrapper">
          {/* Central Terminal Icon Box (pops out) */}
          <div className="card-3d-icon-box">
            <Logo showText={false} width={80} height={80} />
          </div>

          {/* Code Text Box (pops out) */}
          <div className="card-3d-text-box">
            <h3 className="card-3d-title" style={{ letterSpacing: '0.08em', fontSize: '1.6rem' }}>TECHSYSTEM</h3>
            <p className="card-3d-sub" style={{ color: 'var(--accent)', fontWeight: 800 }}>SOFT</p>
          </div>
        </div>

        {/* Floating badges (break bounds, pop out at a high Z-depth) */}
        <div className="card-3d-badge card-3d-badge-1">
          <div className="card-3d-badge-inner">
            <Code size={22} style={{ color: 'var(--accent)' }} />
          </div>
        </div>

        <div className="card-3d-badge card-3d-badge-2">
          <div className="card-3d-badge-inner">
            <Sparkles size={22} style={{ color: 'var(--primary)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
