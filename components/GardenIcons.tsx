export default function GardenIcons() {
  return (
    <svg aria-hidden="true" style={{ display: 'none' }}>
      <defs>
        {/* seedling — sways from base */}
        <symbol id="icon-seedling" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M12 12C12 8 8 5 4 6c0 4 3.5 6.5 8 6z" />
          <path d="M12 12c0-4 4-7 8-6 0 4-3.5 6.5-8 6z" />
        </symbol>

        {/* growing — bobs gently */}
        <symbol id="icon-growing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V10" />
          <path d="M5 3l7 7 7-7" />
          <path d="M5 8l7 7 7-7" />
        </symbol>

        {/* evergreen — wobbles */}
        <symbol id="icon-evergreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 14h16L12 2z" />
          <path d="M12 8L5 18h14L12 8z" />
          <path d="M10 22h4" />
          <path d="M12 18v4" />
        </symbol>

        {/* drop — bobs */}
        <symbol id="icon-drop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z" />
        </symbol>

        {/* seeds — wobbles */}
        <symbol id="icon-seeds" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="8" cy="14" rx="4" ry="3" transform="rotate(-20 8 14)" />
          <ellipse cx="16" cy="14" rx="4" ry="3" transform="rotate(20 16 14)" />
          <path d="M12 11V6" />
          <path d="M9 6c0-2 6-2 6 0" />
        </symbol>

        {/* trowel — sways from handle */}
        <symbol id="icon-trowel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20l6-6" />
          <path d="M10 14l4-8 4-2-2 4-8 4z" />
          <path d="M10 14l2-2" />
        </symbol>
      </defs>
    </svg>
  )
}
