document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==='#')return;const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));

const phone=document.querySelector('.phone');
window.addEventListener('mousemove',(e)=>{
  if(!phone || window.innerWidth<900) return;
  const x=(e.clientX/window.innerWidth-.5)*5;
  const y=(e.clientY/window.innerHeight-.5)*-5;
  phone.style.transform=`translate(-50%,-50%) rotate(${3+x*.2}deg) rotateX(${y}deg) rotateY(${x}deg)`;
});
