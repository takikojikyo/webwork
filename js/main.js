const fixedMenu=document.querySelector('.fixed_menu');
window.addEventListener('scroll',()=>{
  if (window.scrollY >= window.innerHeight) {
    fixedMenu.classList.add('active');
  } else {
    fixedMenu.classList.remove('active');
  }
});