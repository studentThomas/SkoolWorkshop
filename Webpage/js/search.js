function searchInventoryItems() {
    const searchInput = document.querySelector('.search-bar').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach((menuItem) => {
      const title = menuItem.querySelector('.title').textContent.toLowerCase();
      const barcode = menuItem.querySelector('.barcode').textContent.toLowerCase();
  
      if (title.includes(searchInput) || barcode.includes(searchInput)) {
        menuItem.style.display = 'flex';
      } else {
        menuItem.style.display = 'none';
      }
    });
  }
  
  const searchInput = document.querySelector('.search-bar');
  searchInput.addEventListener('input', searchInventoryItems);
  