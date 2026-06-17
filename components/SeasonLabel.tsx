const script = `(function(){
  var el=document.getElementById('lj-season');
  if(!el)return;
  function getSeason(){
    var now=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Ljubljana'}));
    var m=now.getMonth()+1,pre='';
    if(m===3||m===6||m===9||m===12)pre='early ';
    else if(m===5||m===8||m===11||m===2)pre='late ';
    var s='';
    if(m>=3&&m<=5)s=pre+'spring';
    else if(m>=6&&m<=8)s=pre+'summer';
    else if(m>=9&&m<=11)s=pre+'autumn';
    else s=pre+'winter';
    return s.charAt(0).toUpperCase()+s.slice(1);
  }
  function tick(){el.textContent=getSeason();}
  tick();
  setInterval(tick,60000);
})();`

function getSeason(): string {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Ljubljana' }))
  const m = now.getMonth() + 1

  let prefix = ''
  if (m === 3 || m === 6 || m === 9 || m === 12) prefix = 'early '
  else if (m === 5 || m === 8 || m === 11 || m === 2) prefix = 'late '

  let season: string
  if (m >= 3 && m <= 5) season = prefix + 'spring'
  else if (m >= 6 && m <= 8) season = prefix + 'summer'
  else if (m >= 9 && m <= 11) season = prefix + 'autumn'
  else season = prefix + 'winter'

  const s = season
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function SeasonLabel() {
  return (
    <>
      <span id="lj-season">{getSeason()}</span>
      <script data-keep dangerouslySetInnerHTML={{ __html: script }} />
    </>
  )
}
