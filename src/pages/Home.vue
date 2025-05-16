<template>

  <Banner></Banner>
  <Introduce></Introduce>
  <section class="my-5 ">
    <div class="container text-center">
      <h2 id="spnb" class="mb-4">SẢN PHẨM NỔI BẬT</h2>
      <div class="row d-flex justify-content-center align-items-center mb-5">
        <div class="col-lg-3 col-md-6 d-none d-sm-block activeTab   ">
          <h5>Tất cả</h5>
        </div>
        <div class="col-lg-3 col-md-6 d-none d-sm-block activeTab  ">
          <h5>Đồ gia dụng</h5>
        </div>
        <div class="col-lg-3 col-md-6 d-none d-sm-block activeTab  ">
          <h5>Nội thất</h5>
        </div>
        <div class="col-lg-3 col-md-6 d-none d-sm-block activeTab ">
          <h5>Thời trang</h5>
        </div>
      </div>
     

      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 mb-4" v-for="(product, index) in products" :key="index">
          <div class="card h-100 position-relative border-0 shadow-sm">
            <div v-if="product.discount" class="discount-badge 
            position-absolute top-0 start-0 bg-success text-white px-3 py-1 small rounded-end">
              -{{ product.discount }}%
            </div>
            <img :src="product.image" class="card-img-top product-img" :alt="product.name" />
            <div class="card-body p-2">
              <h6 class="card-title mb-1">{{ product.name }}</h6>
              <div class="text-muted small" v-if="product.oldPrice">
                <del>{{ formatPrice(product.oldPrice) }}</del>
              </div>
              <div class="text-success fw-bold">{{ formatPrice(product.price) }}</div>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              
                <router-link class="text-light btn btn-success" to="/Products">Xem chi tiết</router-link>
              
                <router-link class="text-light btn btn-success" to="/Products">Thêm vào giỏ</router-link>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </section>
</template>
<script setup>
import Banner from '@/components/Banner.vue';
import Introduce from '@/components/Introduce.vue';
import data from '@/fakeData/data.js'
const { products, formatPrice } = data;

</script>

<style scoped>
h1 span {
  color: #7AE2CF;
}

.fixed-img {
  height: 300px;
  object-fit: cover;
  object-position: center;
  height: 500px;
  border-radius: 0px;
}

.product-img {
  height: 300px;
  object-fit: cover;
  object-position: center;
  height: 300px;
  border-radius: 0px;
}

.activeTab {
  padding: 5px;
  border-radius: 20px;

}

.activeTab:hover {
  background: rgb(6, 102, 16);
  color: white;
  transition: all 0.3s ease-in-out;
}
</style>
