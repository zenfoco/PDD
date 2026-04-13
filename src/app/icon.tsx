import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#000',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#e81919',
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: '-0.5px',
            fontFamily: 'sans-serif',
          }}
        >
          PDD
        </span>
      </div>
    ),
    { ...size }
  );
}
