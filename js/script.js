
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.close-btn');
const menuItens = document.querySelectorAll('.menu-item a');


menuHamburguer.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});


document.querySelectorAll('.menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  });
});


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

menuItens.forEach(item => {
  const itemUrl = new URL(item.href);
  const currentURL = new URL(window.location.href);
  if (itemUrl.pathname === currentURL.pathname) {
    item.parentElement.classList.add('active');
  }
})

