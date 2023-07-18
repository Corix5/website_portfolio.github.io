function toggleNavbar() {
    var menuIcon = document.getElementById("menu-icon"); 
    var menu = document.getElementById("navbar_menu");
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
    console.log("Navbar toggled");
  }