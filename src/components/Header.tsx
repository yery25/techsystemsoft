'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="header"
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <a href="#" className="header-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <Logo width={36} height={36} showText={true} />
            </a>

            {/* Desktop Nav */}
            <nav className="header-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="header-nav-link">
                  {link.name}
                </a>
              ))}
              <div className="header-divider" />
              <a
                href="https://github.com/yery25"
                target="_blank"
                rel="noopener noreferrer"
                className="header-github"
                aria-label="GitHub Repository"
              >
                <Terminal size={17} />
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="header-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <span className="mobile-menu-label">Navigation</span>
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-menu-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-menu-footer-links">
              <a href="https://github.com/yery25" target="_blank" rel="noopener noreferrer" className="mobile-menu-footer-link">
                GitHub
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mobile-menu-footer-link">
                Contact
              </a>
            </div>
            <Logo width={36} height={36} showText={false} />
          </div>
        </div>
      )}
    </>
  );
}
