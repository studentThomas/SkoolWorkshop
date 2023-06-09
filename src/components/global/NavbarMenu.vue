<template>
    <div class="navbar">
      <router-link to="/" class="col-2 col-lg-1 nav-item">
        <img src="../../assets/icons/voorraad.png" alt="Voorraad" class="icon" />
        <span class="text">Voorraad</span>
      </router-link>
      <router-link to="/boekingen" class="col-2 col-lg-2 nav-item">
        <img src="../../assets/icons/boekingen.png" alt="Boekingen" class="icon" />
        <span class="text">Boekingen</span>
      </router-link>
      <router-link to="/scanner" class="col-4 col-lg-1 fab-container d-flex justify-content-center align-items-center">
        <div class="fab">
          <img src="../../assets/icons/barcode.png" alt="Barcode" class="fab-icon" />
        </div>
      </router-link>
      <div class="circle2"></div>
      <router-link to="/notificaties" class="col-2 col-lg-1 nav-item">
        <img src="../../assets/icons/notificaties.png" alt="Notificaties" class="icon" />
        <span class="text">Notificaties</span>
      </router-link>
      <router-link to="/instellingen" class="col-2 col-lg-1 nav-item">
        <img src="../../assets/icons/instellingen.png" alt="Instellingen" class="icon" />
        <span class="text">Instellingen</span>
      </router-link>
    </div>
    <div class="d-flex justify-content-center align-items-center circle-container">
      <div class="circle"></div>
    </div>
</template>
  
  
<style scoped>
  .navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #ffffff;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
  }
  
  .text {
    font-size: 12px;
  }
  
  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
  }
  
  .fab-container {
    position: relative;
    margin-bottom: 40px;
  }
  
  .fab {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #F49700;
    overflow: hidden;
  }
  
  .fab-icon {
    width: 50px;
    height: 50px;
  }
  
  .circle-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 115px; /* Adjust the height as needed */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
  
  .circle2 {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    z-index: -1;
  }
</style>
  