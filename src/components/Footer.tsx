export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        padding: '40px 20px',
        backgroundColor: '#0C0C0C',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <nav style={{ display: 'flex', gap: '32px' }}>
        <a
          href="#home"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: "'Kanit', sans-serif" }}
        >
          About
        </a>
      </nav>
      <span
        style={{
          color: 'rgba(255,255,255,0.35)',
          fontSize: '14px',
          fontFamily: "'Kanit', sans-serif",
          letterSpacing: '0.5px',
        }}
      >
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </span>
    </footer>
  )
}
