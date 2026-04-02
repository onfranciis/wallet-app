import React from 'react';

type IconType = 'apple-dark' | 'apple-grad' | 'ikea' | 'target' | 'payment' | 'amazon';

interface TransactionIconProps {
  type: IconType;
}

const AppleSVG = ({ fill }: { fill: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={fill}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const TransactionIcon: React.FC<TransactionIconProps> = ({ type }) => {
  const baseStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  switch (type) {
    case 'apple-dark':
      return (
        <div style={{ ...baseStyle, background: '#2C2C2E' }}>
          <AppleSVG fill="white" />
        </div>
      );

    case 'apple-grad':
      return (
        <div style={{ ...baseStyle, background: 'linear-gradient(135deg, #FF8C00, #FF2D55, #AF52DE)' }}>
          <AppleSVG fill="white" />
        </div>
      );

    case 'ikea':
      return (
        <div
          style={{
            ...baseStyle,
            background: '#0058A3',
            color: 'white',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          IKEA
        </div>
      );

    case 'target':
      return (
        <div style={{ ...baseStyle, background: 'white', border: '1px solid #E5E5EA' }}>
          <svg width="28" height="28" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#CC0000" />
            <circle cx="12" cy="12" r="6" fill="white" />
            <circle cx="12" cy="12" r="3" fill="#CC0000" />
          </svg>
        </div>
      );

    case 'payment':
      return (
        <div style={{ ...baseStyle, background: 'linear-gradient(135deg, #34C759, #30B0C7)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
        </div>
      );

    case 'amazon':
      return (
        <div style={{ ...baseStyle, background: '#FF9900' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M13.23 10.56v-.08c-.96.01-1.98.03-2.97.17-.84.12-1.62.4-2.2.94-.58.54-.86 1.3-.86 2.19 0 1.93 1.22 2.9 2.98 2.9 1.38 0 2.14-.49 3.04-1.52l.3.34c.38.44.55.66 1.27 1.3l-.02.02c.22-.18.43-.37.65-.57.57-.51.62-.77.12-1.33-.52-.59-.79-.89-.79-1.36v-3zm-1.5 4.46c-.29.49-.77.8-1.37.8-.75 0-1.16-.54-1.16-1.32 0-1.44 1.28-1.71 2.53-1.71v.29c0 .73.01 1.47-.01 1.94h.01zm7.94 2.37c-3.45 2.5-8.47 3.84-12.78 3.84-6.05 0-11.5-2.24-15.62-5.96-.32-.29-.03-.69.35-.46 4.45 2.59 9.95 4.15 15.64 4.15 3.83 0 8.04-.79 11.92-2.44.59-.25 1.08.39.49.87zm1.38-1.57c-.44-.57-2.91-.27-4.02-.13-.34.04-.39-.25-.08-.47 1.96-1.38 5.19-.98 5.57-.52.38.47-.1 3.72-1.94 5.27-.28.24-.55.11-.43-.2.42-1.03 1.35-3.38.9-3.95z" />
          </svg>
        </div>
      );

    default:
      return <div style={{ ...baseStyle, background: '#E5E5EA' }} />;
  }
};

export default TransactionIcon;
