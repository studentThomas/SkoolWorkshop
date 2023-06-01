window.addEventListener('load', function () {
  const selectedDeviceId = localStorage.getItem('selectedCameraId');
  const codeReader = new ZXing.BrowserMultiFormatReader();
  console.log('ZXing code reader initialized');

  // Function to open the scanner popup
  function openScannerPopup() {
    document.getElementById('scanner-popup').style.display = 'block';
  }

  // Function to close the scanner popup
  function closeScannerPopup() {
    document.getElementById('scanner-popup').style.display = 'none';
    codeReader.reset();
  }

  // Function to handle barcode scanning
  function scanBarcode() {
    if (!selectedDeviceId) {
      console.error('No camera selected');
      return;
    }

    codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
      if (result) {
        console.log(result);
        const barcode = result.text;
        document.querySelector('.search-bar').value = barcode;
        closeScannerPopup();
        searchInventoryItems(); // Call the search function to update the menu items
      }
      if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err);
      }
    });

    console.log(`Started continuous decode from camera with id ${selectedDeviceId}`);
    openScannerPopup();
  }

  // Add event listener to the scan button
  document.getElementById('scanButton').addEventListener('click', scanBarcode);

  // Add event listener to the exit button in the scanner popup
  document.getElementById('exit-button').addEventListener('click', closeScannerPopup);

  // Retrieve the camera selector element
  const cameraSelect = document.getElementById('cameraSelect');

  // Set the selected camera in the camera selector
  cameraSelect.value = selectedDeviceId;

  // Hide the camera selector in the inventory page
  cameraSelect.style.display = 'none';
});
