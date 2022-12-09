class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  
  const btn = document
  .querySelector('.read-more-btn');

const text = document
  .querySelector('.card__read-more');

const cardHolder = document
  .querySelector('.card-holder');

cardHolder
  .addEventListener('click', e => {

      const current = e.target;

      const isReadMoreBtn = current.className.includes('read-more-btn');

      if (!isReadMoreBtn)
          return;

      const currentText = e.target.parentNode.querySelector('.card__read-more');

      currentText.classList.toggle('card__read-more--open');

      current.textContent = current.textContent.includes('Leia Mais ') ? 'Leia Menos' : 'Leia Mais ';

  });