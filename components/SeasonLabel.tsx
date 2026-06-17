const script = `(function(){
  var el=document.getElementById('lj-season');
  if(!el)return;
  function getSeason(){
    var now=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Ljubljana'}));
    var m=now.getMonth()+1,pre='';
    if(m===3||m===6||m===9||m===12)pre='early ';
    else if(m===5||m===8||m===11||m===2)pre='late ';
    if(m>=3&&m<=5)return pre+'spring';
    if(m>=6&&m<=8)return pre+'summer';
    if(m>=9&&m<=11)return pre+'autumn';
    return pre+'winter';
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

  if (m >= 3 && m <= 5) return prefix + 'spring'
  if (m >= 6 && m <= 8) return prefix + 'summer'
  if (m >= 9 && m <= 11) return prefix + 'autumn'
  return prefix + 'winter'
}

export default function SeasonLabel() {
  return (
    <>
      <span id="lj-season">{getSeason()}</span>
      <script data-keep dangerouslySetInnerHTML={{ __html: script }} />
    </>
  )
}
