const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const submit = document.querySelector('#submit')


//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


const save = async() => {
    
document.getElementById("myForm").reset();
$('#exampleModalCenter').modal('toggle');



   
}


submit.addEventListener('click',save);


       

    

