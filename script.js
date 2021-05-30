
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist =  document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
       rightnav.classList.toggle('rightnav-resp');
       navlist.classList.toggle('ul-resp');
       navbar.classList.toggle('navbar-resp');

})