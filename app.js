const navSlide=()=>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector(".nav-links")
    const container = document.querySelector(".container")
    const navLinks = document.querySelectorAll('.nav-links li ')
    burger.addEventListener('click',()=>{
        console.log('clicked')
        nav.classList.toggle('nav-active');
        container.classList.toggle('cont-active');

         
        // animate links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 }s`
            }
        });

        // burger animation 
        burger.classList.toggle('toggle')
    });
}
navSlide();