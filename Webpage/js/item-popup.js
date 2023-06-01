let isPopupOpen = false; // Flag to track popup state

// Function to open the popup and display the item details
function openPopup(item) {
  if (isPopupOpen) {
    return; // Do nothing if the popup is already open
  }

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

  isPopupOpen = true; // Set popup state to open
}

// Function to close the popup
function closePopup(event) {
  event.stopPropagation(); // Stop event propagation

  const popup = document.getElementById('popup');
  const stockQuantity = document.getElementById('popupStock');
  const updatedQuantity = stockQuantity.textContent;

  // Get the active menu item and update its stock
  const activeMenuItem = document.querySelector('.active-menu-item');
  const menuItemStock = activeMenuItem.querySelector('.stock');
  menuItemStock.textContent = updatedQuantity;

  // Remove 'active-menu-item' class from the menu item
  activeMenuItem.classList.remove('active-menu-item');

  popup.style.display = 'none';

  isPopupOpen = false; // Set popup state to closed
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

// Event listener for close popup button click
const closePopupButton = document.querySelector('.popup-close-button');
closePopupButton.addEventListener('click', closePopup);

// Event listener for close popup button touch (mobile)
closePopupButton.addEventListener('touchstart', function(event) {
  event.stopPropagation();
});

closePopupButton.addEventListener('touchend', function(event) {
  event.preventDefault();
  closePopup(event);
});


// Event listener for decreasing stock
const decreaseButton = document.getElementById('decreaseButton');
decreaseButton.addEventListener('click', decreaseStock);

// Event listener for increasing stock
const increaseButton = document.getElementById('increaseButton');
increaseButton.addEventListener('click', increaseStock);

// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add event listener to each menu item wrapper
const menuItemsWrappers = document.querySelectorAll('.menu-item .item-wrapper');
menuItemsWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', event => {
    const menuItem = wrapper.closest('.menu-item');
    openPopup(menuItem);
    event.stopPropagation(); // Stop event propagation
  });
});

