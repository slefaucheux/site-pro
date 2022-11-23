const sections = [...document.querySelectorAll('.content-section')]
const navLinks = [...document.querySelectorAll('nav a')]

const menu = document.querySelector('.liste-nav')
const btnMenu = document.querySelector('.btn-toggle-container')

// effet accueil

const overlay = document.querySelector('.overlay')
const txt = "Merci de prendre le temps de me lire"
const title = document.querySelector('h1')

function typewriter(text, index) {
    if(index < text.length){
        setTimeout(()=>{
            title.innerHTML += `<span>${text[index]}</span>`;
            typewriter(text, index + 1)
        },100)
    }
}
setTimeout(()=> {
    typewriter(txt, 0)
}, 200)


setTimeout(function accueilEffect() {
    overlay.remove()
}, 5000 )

//document.documentElement.style.overflow = 'hidden'


// effet scrollSpy

window.addEventListener('load', () => {
    const data = sections.map(section => section.offsetTop)
    console.log(data);
    console.log(navLinks)

    navLinks.forEach((navLink, index) => {
        navLink.addEventListener('click', e => {
            e.preventDefault()

        window.scrollTo({
            top: data[index],
            behavior: 'smooth'
        })
        })
    })

    window.addEventListener('scroll', handleScroll)

    let savedIndex; 
    function handleScroll() {
        const scrolled = window.scrollY + (window.innerHeight / 2)
        for (const i of data){
            const index = data.indexOf(i)
            if(scrolled >= data[index] && scrolled < data[index + 1]){
                if(index !== savedIndex){
                    savedIndex = index;
                    addClassAndClear(index)
                }
                break;
            }
            if(index === data.length - 1 && scrolled >= data[index]){
                if(index !== savedIndex){
                    savedIndex = index;
                    addClassAndClear(index)
                }
            }

        }
    }

    handleScroll();
     
    function addClassAndClear(index){
        const elToClean = navLinks.find(navLink => navLink.className.includes('marked'))
        if(elToClean) elToClean.classList.remove('marked')
        navLinks[index].classList.add('marked')

    }


} )

// menu responsive


btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})

menu.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})




