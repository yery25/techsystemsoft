'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  specialization: string;
  phone: string;
  email: string;
  initials: string;
  gradient: string;
  badges: React.ReactNode[];
}

export default function TeamCard({
  name,
  role,
  specialization,
  phone,
  email,
  initials,
  gradient,
  badges,
}: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Motion values for tracking mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth out the motion values using a spring config
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map normalized mouse coordinates to rotation values
  const rotateX = useTransform(smoothY, [0, 1], [15, -15]); // rotate around horizontal axis
  const rotateY = useTransform(smoothX, [0, 1], [-15, 15]); // rotate around vertical axis

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="team-card-container">
      <motion.div
        ref={cardRef}
        className="team-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow behind the card */}
        <div className="team-card-glow" />

        {/* Glare effect */}
        <div className="team-card-glare" />

        {/* Content Wrapper */}
        <div className="team-card-content" style={{ transformStyle: 'preserve-3d' }}>
          {/* Avatar Monogram */}
          <div 
            className="team-avatar" 
            style={{ 
              background: gradient,
              transform: 'translateZ(50px)'
            }}
          >
            <span className="team-avatar-text">{initials}</span>
          </div>

          {/* Member Info */}
          <div className="team-info" style={{ transform: 'translateZ(30px)' }}>
            <h3 className="team-name">{name}</h3>
            <p className="team-role">{role}</p>
            <div className="team-divider" />
            <p className="team-specialization">{specialization}</p>
          </div>

          {/* Contact Actions */}
          <div className="team-contacts" style={{ transform: 'translateZ(40px)' }}>
            {/* Email contact */}
            <div className="team-contact-item">
              <a href={`mailto:${email}`} className="team-contact-link">
                <Mail size={16} />
                <span className="team-contact-text">{email}</span>
              </a>
              <button 
                onClick={() => copyToClipboard(email, 'email')}
                className="team-copy-btn"
                title="Copiar Email"
              >
                {copiedEmail ? <Check size={14} className="text-success" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone contact */}
            <div className="team-contact-item">
              <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="team-contact-link">
                <Phone size={16} />
                <span className="team-contact-text">{phone}</span>
              </a>
              <button 
                onClick={() => copyToClipboard(phone, 'phone')}
                className="team-copy-btn"
                title="Copiar Teléfono"
              >
                {copiedPhone ? <Check size={14} className="text-success" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Floating badges (break bounds, pop out at high Z-depth) */}
        <div className="team-badge team-badge-1" style={{ transform: 'translateZ(75px)' }}>
          <div className="team-badge-inner">
            {badges[0]}
          </div>
        </div>

        <div className="team-badge team-badge-2" style={{ transform: 'translateZ(75px)' }}>
          <div className="team-badge-inner">
            {badges[1]}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
