export default function GardenIcons() {
  return (
    <svg aria-hidden="true" style={{ display: 'none' }}>
      <defs>

        {/* sun — 8 tick rays around a circle */}
        <symbol id="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="3.5"/>
          <line x1="12" y1="2"    x2="12" y2="4.5"/>
          <line x1="12" y1="19.5" x2="12" y2="22"/>
          <line x1="2"  y1="12"   x2="4.5" y2="12"/>
          <line x1="19.5" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="4.93" x2="6.7"  y2="6.7"/>
          <line x1="17.3" y1="17.3" x2="19.07" y2="19.07"/>
          <line x1="4.93" y1="19.07" x2="6.7"  y2="17.3"/>
          <line x1="17.3" y1="6.7"  x2="19.07" y2="4.93"/>
        </symbol>

        {/* crescent — two-circle geometry */}
        <symbol id="icon-crescent" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke="none"/>
        </symbol>

        {/* half moon — perfect D */}
        <symbol id="icon-halfmoon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/>
        </symbol>

        {/* full moon — perfect circle */}
        <symbol id="icon-fullmoon" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" fill="currentColor"/>
        </symbol>

        {/* sprout — sway from base */}
        <symbol id="icon-sprout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="22" x2="12" y2="10"/>
          <path d="M12 17C12 17 9 17 7 13C11 11 12 14 12 17Z" fill="currentColor" stroke="none"/>
          <path d="M12 13C12 13 15 13 17 9C13 7 12 10 12 13Z" fill="currentColor" stroke="none"/>
        </symbol>

        {/* young plant — sway from base */}
        <symbol id="icon-youngplant" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="22" x2="12" y2="7"/>
          <path d="M12 19C12 19 8 19 6 14C10 12 12 15 12 19Z" fill="currentColor" stroke="none"/>
          <path d="M12 15C12 15 16 15 18 10C14 8 12 11 12 15Z" fill="currentColor" stroke="none"/>
          <path d="M12 11C12 11 9 11 8 8C11 7 12 9 12 11Z" fill="currentColor" stroke="none" opacity="0.55"/>
        </symbol>

        {/* drop — bob */}
        <symbol id="icon-drop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3C12 3 5 11 5 15.5a7 7 0 0 0 14 0C19 11 12 3 12 3z"/>
        </symbol>

        {/* stars — 4-point geometric star + two smaller */}
        <symbol id="icon-stars" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5 L13.4 10.6 L19.5 12 L13.4 13.4 L12 19.5 L10.6 13.4 L4.5 12 L10.6 10.6 Z"/>
          <path d="M5.5 4 L6.2 6.8 L9 7.5 L6.2 8.2 L5.5 11 L4.8 8.2 L2 7.5 L4.8 6.8 Z" opacity="0.55"/>
          <circle cx="19.5" cy="6" r="1.1" opacity="0.4"/>
        </symbol>

        {/* fir — sway from base */}
        <symbol id="icon-fir" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L17 11H7L12 3Z"/>
          <path d="M12 7L19.5 17H4.5L12 7Z"/>
          <rect x="10.5" y="17" width="3" height="4"/>
        </symbol>

        {/* trowel — wobble from handle top */}
        <symbol id="icon-trowel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="20" x2="10" y2="14"/>
          <path d="M10 14L13.5 6L18 4L17 9L10 14Z" fill="currentColor" stroke="none"/>
        </symbol>

        {/* orbit — ring + planet + satellite (whole rotates on hover) */}
        <symbol id="icon-orbit" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3"/>
          <circle cx="12" cy="12" r="2"   fill="currentColor"/>
          <circle cx="20.5" cy="12" r="1.5" fill="currentColor"/>
        </symbol>

      </defs>
    </svg>
  )
}
