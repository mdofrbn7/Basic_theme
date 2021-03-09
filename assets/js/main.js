let toggleButton = document.querySelector("nav .toggle-button");
let header = document.querySelector('header.header-area');
toggleButton.onclick = function(e){
    header.classList.toggle('nav-collapse');
}