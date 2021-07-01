
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist =  document.querySelector('.nav-list')

burger.addEventListener('click',()=>{                 {/*used js to toggle navigation bar in resopnsive view only*/}
       rightnav.classList.toggle('rightnav-resp');
       navlist.classList.toggle('ul-resp');
       navbar.classList.toggle('navbar-resp');

})