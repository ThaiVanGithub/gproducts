<template>
  <header class=" text-dark fixed-top bg-white  py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <div class="col-lg-4 col-sm-12 d-flex justify-content-start align-items-center">
        <router-link to="/" class="d-flex nav-link align-items-center" active-class="text-danger" exact>
          <img src="/src/assets/logo.jpg" class="img-fluid rounded me-2" alt="Logo GreenProducts"
            style="max-height: 40px;">
          <h3 class="fw-bold m-0 dark-green">GProducts</h3>
        </router-link>
      </div>



      <nav class="col-lg-4 d-flex justify-content-end fw-bold">
        <ul class="d-flex align-items-end gap-4 list-unstyled mb-0 d-none d-lg-flex dark-green">
          <li>
            <router-link to="/" class="nav-link " active-class="text-dark" exact>
              <h5 class="nav-link ">Home</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Products" class="nav-link" active-class="text-danger">
              <h5 class="nav-link ">Products</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Blank" class="nav-link" active-class="text-danger">
              <h5 class="nav-link">
              Empty page
              </h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Contact" class="nav-link" active-class="text-danger">
              <h5 class="nav-link">Contact</h5>
            </router-link>
          </li>
        </ul>
      </nav>

      <a-button class="col-lg-4 d-lg-none d-sm-flex" style="color: green;"  @click="showDrawer"><i
          class="fa-solid fa-bars fw-bold"></i></a-button>

      <!-- drawer antds -->
      <a-drawer v-model:open="open" class="custom-class" root-class-name="root-class-name"
        :root-style="{ color: 'green', zIndex: 1100 }" style="color: green" title="MENU" placement="right" 
        @after-open-change="afterOpenChange">
        <ul class="p-5list-unstyled d-flex flex-column gap-4">
          
          <li>
            <router-link to="/" class="nav-link" active-class="text-danger" exact>
              <h5 class="nav-link">Home</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Blank" class="nav-link" active-class="text-danger">
              <h5 class="nav-link">Empty</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Products" class="nav-link" active-class="text-danger">
              <h5 class="nav-link">Game</h5>
            </router-link>
          </li>
          <li>
            <router-link to="/Contact" class="nav-link" active-class="text-danger">
              <h5 class="nav-link">Contact</h5>
            </router-link>
          </li>
        </ul>
      </a-drawer>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
};
const showDrawer = () => {
  open.value = true;
};
</script>

<style scoped>
.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: rgb(6, 102, 16);
}
li{
  list-style: none;
  padding: 0;
  margin: 0;
  color: black;
}
</style>
