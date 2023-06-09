<template>
    <div>
      <!-- Other content of your addProductView.vue file -->
      <barcode-generator></barcode-generator>
    </div>
  </template>
  
  <script>
  import BarcodeGenerator from '../components/addProduct/BarcodeGenerator.vue'; // Import the BarcodeGenerator component
  
  export default {
    components: {
      BarcodeGenerator // Register the BarcodeGenerator component
    },
    // Other properties and methods of your addProductView.vue file
  }
  </script>
  