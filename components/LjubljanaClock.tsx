const script = `(function(){
  var el=document.getElementById('lj-footer-clock');
  if(!el)return;
  function tick(){
    el.textContent=new Date().toLocaleTimeString('en-GB',{
      timeZone:'Europe/Ljubljana',hour:'2-digit',minute:'2-digit',hour12:false
    });
  }
  tick();
  setInterval(tick,30000);
})();`

export default function LjubljanaClock() {
  return (
    <>
      <span id="lj-footer-clock">--:--</span>
      <script data-keep dangerouslySetInnerHTML={{ __html: script }} />
    </>
  )
}
