
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
