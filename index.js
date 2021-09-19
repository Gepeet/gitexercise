const navMenu = document.getElementsByClassName('nav__menu');



const show = () =>{
    let navLink = document.getElementById("navLinkMenu") 
    navLink.classList.toggle("show");
    console.log('activated');
}