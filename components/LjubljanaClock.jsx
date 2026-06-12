export default function LjubljanaClock() {
  return (
    <footer>
      <div className="foot-inner">
        <span className="copyright">&copy; 2026 Jan Košutnik</span>
        <span className="clockwrap">
          Ljubljana
          <svg className="orbit" viewBox="0 0 20 20" aria-hidden="true">
            <circle className="ring" cx="10" cy="10" r="6.8" />
            <circle className="sun" cx="10" cy="10" r="1.7" />
            <g className="planet">
              <circle cx="10" cy="3.2" r="1.3" />
            </g>
          </svg>
        </span>
      </div>
    </footer>
  );
}
