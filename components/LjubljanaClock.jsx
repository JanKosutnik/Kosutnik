const clockScript = `(function(){
  var el = document.getElementById('lj-time');
  if (!el) return;
  function tick() {
    el.textContent = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Ljubljana',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }
  tick();
  setInterval(tick, 1000);
})();`;

export default function LjubljanaClock() {
  return (
    <footer>
      <div className="foot-inner">
        <span className="copyright">&copy; 2026 Jan Košutnik</span>
        <span className="clockwrap">
          Ljubljana <span id="lj-time" />
          <svg className="orbit" viewBox="0 0 20 20" aria-hidden="true">
            <circle className="ring" cx="10" cy="10" r="6.8" />
            <circle className="sun" cx="10" cy="10" r="1.7" />
            <g className="planet">
              <circle cx="10" cy="3.2" r="1.3" />
            </g>
          </svg>
        </span>
      </div>
      <script data-keep dangerouslySetInnerHTML={{ __html: clockScript }} />
    </footer>
  );
}
