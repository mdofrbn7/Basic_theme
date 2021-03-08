let toggleButton = document.querySelector("nav .toggle-button");
let header = documner.querySelector('header.header-area');
toggleButton.onclink = (e) => {
    header.classlist.toggle('nav-collapse');
}