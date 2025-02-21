window.addEventListener('scroll', ()=> {
    let nav = document.querySelector('.navbar');
    let menu = document.querySelector('.menu');
    let li = document.querySelectorAll('.menu li');
    let h2 = document.querySelector('h2')
    
    if (window.scrollY > 40){
        nav.classList.add('scrolled');
        menu.classList.add('menue');
        li.forEach(el => el.classList.add('lir'));
        h2.classList.add('title');
    }
    else{
        nav.classList.remove('scrolled');
        menu.classList.remove('menue');
        li.forEach(el => el.classList.remove('lir'));
        h2.classList.remove('title');
     }
})