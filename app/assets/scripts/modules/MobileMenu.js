class MobileMenu {
  // Selecting elements from DOM
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }

  // Event handling
  events() {
    this.menuIcon.addEventListener("click", () => { this.toggleTheMenu() });
  }

  // Defining functionality
  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }
}

export default MobileMenu;