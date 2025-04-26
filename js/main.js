const fixedMenu=document.querySelector('.fixed_menu');
window.addEventListener('scroll',()=>{
  if (window.scrollY >= window.innerHeight) {
    fixedMenu.classList.add('active');
  } else {
    fixedMenu.classList.remove('active');
  }
});


const animateFade=(entries,obs)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
    // console.log(entry.target);
    entry.target.animate(
      {
        opacity:[0,1],
        translate:['0 4rem',0],
      },
      {
        duration:1000,
        easing:'ease',
        fill:'forwards',
      }
    );
    obs.unobserve(entry.target);
  }
  });
};
const fadeObserver=new IntersectionObserver(animateFade);
const fadeElements=document.querySelectorAll('.fadein')
fadeElements.forEach((fadeElement)=>{
  fadeObserver.observe(fadeElement);
})