<template>
  <div>
    <label>
      <input type="radio" v-model="generateBarcodeEnabled" value="true" /> Generate Barcode
    </label>
    <label>
      <input type="radio" v-model="generateBarcodeEnabled" value="false" /> Don't Generate Barcode
    </label>

    <button @click="generateBarcode">Submit</button>
    <p v-if="generateBarcodeEnabled === 'true'">{{ barcode }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barcode: "",
      generateBarcodeEnabled: "true" // Default value to generate barcode
    };
  },
  methods: {
    generateBarcode() {
      if (this.generateBarcodeEnabled === "false") {
        this.barcode = ""; // Clear the barcode if the radio button is set to "Don't Generate Barcode"
        return; // Exit the method
      }

      const barcodeLength = 13;
      const characters = "0123456789";
      let result = "";

      for (let i = 0; i < barcodeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      this.barcode = result;
    }
  }
};
</script>
