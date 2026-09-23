/**
 * Grainy gray gradient background for the pricing page.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#101114]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 65% at 50% 0%, #2c2f38 0%, #1a1b21 45%, #0e0f12 90%),
            linear-gradient(180deg, rgba(45, 48, 56, 0.4) 0%, rgba(20, 21, 26, 0.7) 50%, #0d0e11 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 75% 35%, rgba(110, 115, 130, 0.16) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 20% 70%, rgba(85, 90, 102, 0.14) 0%, transparent 70%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 60%, rgba(8, 9, 11, 0.75) 100%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="pricingGrainyNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pricingGrainyNoise)" />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.10] mix-blend-soft-light"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="pricingGrainyNoiseFine">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.95"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pricingGrainyNoiseFine)" />
      </svg>
    </div>
  );
}
