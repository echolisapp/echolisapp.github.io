/* Echolis cat: loader (first visit per session), dev note, cat on the nav logo. Load in <head>. */
(()=>{const d=document,base=d.currentScript.src.replace(/cat\.js.*$/,''),cat=base+'assets/cat.png';
let seen=0;try{seen=sessionStorage.getItem('ec-cat')}catch(e){}
if(!seen){const L=d.createElement('div');L.id='ec-load';L.setAttribute('aria-hidden','true');
L.innerHTML='<div class="ec-ld"><img class="ec-cat" src="'+cat+'" alt=""><div class="ec-sh"></div><div class="ec-meter"><b></b><span>LOADING</span></div><p>0%</p></div>';
d.documentElement.appendChild(L);try{sessionStorage.setItem('ec-cat','1')}catch(e){}
const b=L.querySelector('b'),t=L.querySelector('p');let p=0,ok=d.readyState==='complete';addEventListener('load',()=>ok=true);
const done=()=>L.classList.add('done');setTimeout(done,6000);
const iv=setInterval(()=>{p=Math.min(ok?100:90,p+(ok?4:1.5+Math.random()*2));b.style.width=p+'%';t.textContent=Math.floor(p)+'%';if(p>=100){clearInterval(iv);setTimeout(done,250)}},40)}
d.addEventListener('DOMContentLoaded',()=>{
const lg=d.querySelector('.nav a.lg');if(lg){const c=d.createElement('img');c.className='ec-logocat';c.src=cat;c.alt='';lg.appendChild(c)}
const n=d.createElement('div');n.className='ec-dev';n.setAttribute('role','status');n.innerHTML='<i></i>Currently in development<small>Some parts of this site are still being built.</small>';d.body.appendChild(n)})})();
