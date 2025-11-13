(function(){
  function init(){
    const canvas = document.createElement('canvas');
    canvas.id = 'snow-canvas';
    canvas.className = 'snow-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    const flakes = [];
    const count = Math.floor((window.innerWidth + window.innerHeight)/120);
    for(let i=0;i<count;i++) flakes.push({x:Math.random()*w, y:Math.random()*h, r:Math.random()*3+1, dx:Math.random()*1-0.5, dy:Math.random()*0.6+0.4});
    function loop(){
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      for(const f of flakes){
        f.x += f.dx; f.y += f.dy;
        if(f.y > h){ f.y = -10; f.x = Math.random()*w; }
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    loop();
  }
  if(document.readyState === 'complete') init(); else window.addEventListener('load', init);
})();
