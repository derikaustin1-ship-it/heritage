import React from 'react';

export default function CrestLogo({ variant = 'default', size = 'normal' }) {
  const isDarkBg = variant === 'light';
  
  const primaryColor = isDarkBg ? '#FAF8F2' : '#6B2635';
  const secondaryColor = isDarkBg ? '#E8DCC4' : '#244A3A';
  const goldColor = '#B08D57';
  const subTextColor = isDarkBg ? '#D4AF77' : '#585858';

  return (
    <div className={`crest-logo-wrapper ${size === 'large' ? 'crest-large' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }}>
      <svg width={size === 'large' ? '54' : '46'} height={size === 'large' ? '54' : '46'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Shield background */}
        <path d="M50 8L85 22V52C85 72 50 92 50 92C50 92 15 72 15 52V22L50 8Z" fill={primaryColor} stroke={goldColor} strokeWidth="3" strokeLinejoin="round"/>
        <path d="M50 14L79 26V50C79 66 50 83 50 83C50 83 21 66 21 50V26L50 14Z" fill="none" stroke={goldColor} strokeWidth="1" opacity="0.6"/>

        {/* Top Star */}
        <path d="M50 20L52 25H57L53 28L55 33L50 30L45 33L47 28L43 25H48L50 20Z" fill={goldColor} />

        {/* Open Book */}
        <path d="M30 46C35 44 43 44 50 47C57 44 65 44 70 46V64C65 62 57 62 50 65C43 62 35 62 30 64V46Z" fill="#FAF8F2" stroke={goldColor} strokeWidth="1.5" />
        <path d="M50 47V65" stroke={goldColor} strokeWidth="1.5" />
        <path d="M35 51C40 50 45 50 48 51.5" stroke="#6B2635" strokeWidth="1" strokeLinecap="round" />
        <path d="M35 56C40 55 45 55 48 56.5" stroke="#6B2635" strokeWidth="1" strokeLinecap="round" />
        <path d="M52 51.5C55 50 60 50 65 51" stroke="#6B2635" strokeWidth="1" strokeLinecap="round" />
        <path d="M52 56.5C55 55 60 55 65 56" stroke="#6B2635" strokeWidth="1" strokeLinecap="round" />

        {/* Laurel Wreath Accents */}
        <path d="M23 48C21 44 22 38 25 34C24 37 25 41 27 44" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M77 48C79 44 78 38 75 34C76 37 75 41 73 44" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
        
        <path d="M20 58C18 64 21 70 25 74" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 58C82 64 79 70 75 74" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <span style={{ 
          fontFamily: "'Cormorant Garamond', Georgia, serif", 
          fontSize: size === 'large' ? '1.55rem' : '1.3rem', 
          fontWeight: 700, 
          letterSpacing: '0.06em', 
          color: primaryColor,
          lineHeight: 1
        }}>
          HERITAGE
        </span>
        <span style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: size === 'large' ? '0.72rem' : '0.65rem', 
          fontWeight: 600, 
          textTransform: 'uppercase', 
          letterSpacing: '0.14em', 
          color: subTextColor,
          marginTop: '3px'
        }}>
          Higher Secondary School
        </span>
      </div>
    </div>
  );
}
