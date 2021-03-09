let toggle_button = document.querySelector(".nav .toggle-button");
let header = documner.querySelector('header.header-area');
toggleButton.onclink = function(e) {
    header.classlist.toggle('nav-collapse');
}