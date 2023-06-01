// Function to open the popup and display the item details
function openPopup(item) {
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
  item.classList.add('active-menu-item');
}

// Function to close the popup
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

// Decrease stock quantity
function decreaseStock() {
  const stockQuantity = document.getElementById('popupStock');
  let quantity = parseInt(stockQuantity.textContent);

  if (quantity > 0) {
    quantity--;
    stockQuantity.textContent = quantity;
  }
}

// Increase stock quantity
function increaseStock() {
  const stockQuantity = document.getElementById('popupStock');
  let quantity = parseInt(stockQuantity.textContent);
  quantity++;
  stockQuantity.textContent = quantity;
}

// Event listener for close popup button
const closePopupButton = document.querySelector('.popup-close-button');
closePopupButton.addEventListener('click', closePopup);

// Event listener for decreasing stock
const decreaseButton = document.getElementById('decreaseButton');
decreaseButton.addEventListener('click', decreaseStock);

// Event listener for increasing stock
const increaseButton = document.getElementById('increaseButton');
increaseButton.addEventListener('click', increaseStock);

// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add event listeners to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    openPopup(item);
  });
});
