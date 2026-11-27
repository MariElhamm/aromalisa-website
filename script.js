const progress=document.getElementById("progress"), stage=document.getElementById("spinStage"), product=document.getElementById("spinProduct");
const frames=["/assets/turn-1.jpg","/assets/turn-2.jpg","/assets/turn-3.jpg","/assets/turn-4.jpg"];let frame=0;
frames.forEach(src=>{const im=new Image();im.src=src});
function scrollFX(){
 const max=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(max?scrollY/max*100:0)+"%";
 const r=stage.getBoundingClientRect(),vh=innerHeight;
 if(r.top<vh*.92&&r.bottom>vh*.08){
  const p=Math.min(1,Math.max(0,(vh*.92-r.top)/(r.height+vh*.6)));
  const next=Math.min(3,Math.floor(p*4));
  if(next!==frame){frame=next;product.style.opacity=".12";setTimeout(()=>{product.src=frames[frame];product.style.opacity="1"},130)}
  product.style.transform=`rotateY(${(p-.5)*12}deg) translateY(${-Math.sin(p*Math.PI)*8}px)`;
 }
}
addEventListener("scroll",scrollFX,{passive:true});addEventListener("resize",scrollFX);scrollFX();
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
const menu=document.getElementById("mobileMenu");
document.getElementById("menuTrigger").addEventListener("click",()=>menu.classList.add("open"));
document.getElementById("menuClose").addEventListener("click",()=>menu.classList.remove("open"));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
