let scroll = document.querySelector('.scroll');
let scrollPointer =document.querySelector('#scrollpointer')

window.addEventListener('scroll', ()=>{
    let body = document.querySelector('body');
    let counterHeight = body.clientHeight - window.innerHeight;
    let scrolling = window.scrollY;
    let result = Math.round((100/ counterHeight)* scrolling);


    scroll.style.width = `${result}%`


    if(window.scrollY > 500){
        scrollPointer.classList.add('active')
    }else{
        scrollPointer.classList.remove('active')
    }
})
scrollPointer.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})