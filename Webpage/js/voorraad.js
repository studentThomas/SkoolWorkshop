document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-bar');
  const menuItemsContainer = document.getElementById('menuContainer');

  fetch('https://skoolworkshop.up.railway.app/api/product')
    .then((response) => response.json())
    .then((data) => {
      const products = data.data;

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "menu-item col-12 col-sm-6 col-md-4 col-lg-3";
        productCard.innerHTML = `
          <div class="item-wrapper">
            <img src="img/${product.Image}" alt="Afbeelding" class="img-fluid">
            <div class="item-details">
              <h4 class="title">${product.Name}</h4>
              <p class="barcode">Barcode: ${product.Code}</p>
              <p class="stock">${product.Quantity}</p>
            </div>
          </div>
        `;
        menuItemsContainer.appendChild(productCard);
      });

      // Add event listener for search input
      searchInput.addEventListener('keyup', searchInventoryItems);

      // Add event listeners for menu items
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
          openPopup(menuItem);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

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

function openPopup(item, itemId) {
    const popup = document.getElementById('popup');
    const title = item.querySelector('.title').textContent;
    const barcode = item.querySelector('.barcode').textContent;
    const stock = item.querySelector('.stock').textContent;
    const popupTitle = document.getElementById('popupTitle');
    const popupBarcode = document.getElementById('popupBarcode');
    const popupStock = document.getElementById('popupStock');
  
    popupTitle.textContent = title;
    popupBarcode.textContent = barcode;
    popupStock.textContent = stock;
  
    popup.style.display = 'flex';
  
    // Add 'active-menu-item' class to the menu item
    const activeMenuItem = document.getElementById(itemId);
    activeMenuItem.classList.add('active-menu-item');
  }
  

  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  
    const stockQuantity = document.getElementById('popupStock');
    const updatedQuantity = stockQuantity.textContent;
  
    // Get the active menu item and update its stock
    const activeMenuItem = document.querySelector('.active-menu-item');
    const menuItemStock = activeMenuItem.querySelector('.stock');
    menuItemStock.textContent = updatedQuantity;
  
    // Remove 'active-menu-item' class from the menu item
    activeMenuItem.classList.remove('active-menu-item');
  }
  
  const closePopupButton = document.querySelector('.popup-close-button');
  closePopupButton.addEventListener('click', closePopup);
  

function decreaseStock() {
  const stockQuantity = document.getElementById('popupStock');
  let quantity = parseInt(stockQuantity.textContent);

  if (quantity > 0) {
    quantity--;
    stockQuantity.textContent = quantity;
  }
}

function increaseStock() {
  const stockQuantity = document.getElementById('popupStock');
  let quantity = parseInt(stockQuantity.textContent);
  quantity++;
  stockQuantity.textContent = quantity;
}

const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('input', searchInventoryItems);

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    openPopup(menuItem);
  });
});

const decreaseButton = document.getElementById('decreaseButton');
decreaseButton.addEventListener('click', decreaseStock);

const increaseButton = document.getElementById('increaseButton');
increaseButton.addEventListener('click', increaseStock);
