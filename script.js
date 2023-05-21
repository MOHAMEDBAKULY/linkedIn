let profilemenu = document.getElementById('profileMenu');

const toggleMenu = () => {
    profilemenu.classList.toggle('open-menu');
}

let sideBar = document.getElementById('sideBar');
let showMore = document.getElementById('showmore-link');

const clickIt = () => {
    sideBar.classList.toggle('open-activity')
}