 //Script para activar/desactivar el menú hamburguesa
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('active');
    });