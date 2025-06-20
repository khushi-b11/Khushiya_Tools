const navDialog = document.getElementById('nav_dialoug')
function handleMenu(){
navDialog.classList.toggle('hidden')
}



function setIntersectionObserver(element, isLTR , speed){
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
       if(isIntersecting){
        document.addEventListener('scroll',scrollHandler);
       }
       else{
        document.removeEventListener('scroll',scrollHandler)
       }

    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
     let initalTranslateLTR = - 48*4;
     let initalTranslateRTL = 36*4;
    function scrollHandler() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) *speed;
    let totalTranslate = 0;
    if(isLTR){
        totalTranslate = initalTranslateLTR+translateX;
    }
    else{
        totalTranslate = -(initalTranslateRTL + translateX)
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
} 
} 

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
setIntersectionObserver(line1,true,0.15);
setIntersectionObserver(line2,false,0.15);
setIntersectionObserver(line3,true,0.15) ;



  const slider = document.getElementById("line1");
    const leftDot = document.getElementById("left-indicator");
    const rightDot = document.getElementById("right-indicator");

    function updateDots() {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const scrollLeft = slider.scrollLeft;

      leftDot.style.opacity = scrollLeft > 10 ? "1" : "0";
      rightDot.style.opacity = scrollLeft < maxScroll - 10 ? "1" : "0";
    }

    slider.addEventListener("scroll", updateDots);
    window.addEventListener("resize", updateDots);
    window.addEventListener("load", updateDots);
    window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("line1").scrollLeft = 0;
});

function handledirection(event){
  event.preventDeafult();
  const url = event.currentTarget.href
  window.location.href = url;
}


function closelightbox(){
   const frame = document.getElementById('lightbox');
   frame.classList.remove('flex');
   frame.classList.add('hidden');

}

   function openLightbox(vediourl){
  const frame = document.getElementById('lightbox');
const vedio = document.getElementById('vedioframe');
vedio.src=vediourl
frame.classList.remove('hidden');
frame.classList.add('flex');
}



