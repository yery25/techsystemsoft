'use client';

import React from 'react';
import { Code, Brain, Shield, Terminal, Users } from 'lucide-react';
import TeamCard from './TeamCard';

export default function Team() {
  const teamMembers = [
    {
      name: 'Ing. Yery Pérez',
      role: 'Co-Founder & Ingeniero Programador Senior',
      specialization: 'Especialista en Desarrollo Full-Stack & Inteligencia Artificial',
      phone: '+1 (849) 654-0294',
      email: 'yeriantonio52@gmail.com',
      initials: 'YP',
      gradient: 'linear-gradient(135deg, var(--primary), var(--accent))',
      badges: [
        <Code key="code" size={20} style={{ color: 'var(--accent)' }} />,
        <Brain key="brain" size={20} style={{ color: 'var(--primary)' }} />
      ]
    },
    {
      name: 'Ing. Thevenin',
      role: 'Co-Founder & Ingeniero Programador Senior',
      specialization: 'Especialista en Ciberseguridad & Infraestructura Segura',
      phone: '+1 (829) 571-4555',
      email: 'Thevenin.negocios@gmail.com',
      initials: 'TH',
      gradient: 'linear-gradient(135deg, #7F00FF, #E100FF)',
      badges: [
        <Shield key="shield" size={20} style={{ color: '#E100FF' }} />,
        <Terminal key="terminal" size={20} style={{ color: '#7F00FF' }} />
      ]
    }

  ];

  return (
    <section id="team" className="team">
      {/* Background glow effects */}
      <div className="team-bg">
        <div className="team-glow-1" />
        <div className="team-glow-2" />
      </div>

      <div className="container">
        <div className="team-header">
          <div className="section-label">
            <Users size={12} style={{ marginRight: '0.5rem', display: 'inline' }} />
            <span>NUESTRO EQUIPO</span>
          </div>
          <h2 className="team-title">
            Innovación respaldada por{' '}
            <span className="text-gradient">expertos.</span>
          </h2>
          <p className="team-subtitle">
            Diseñamos soluciones seguras, escalables y a la medida de tu negocio, con experiencia avanzada en desarrollo de software y seguridad digital.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              specialization={member.specialization}
              phone={member.phone}
              email={member.email}
              initials={member.initials}
              gradient={member.gradient}
              badges={member.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
