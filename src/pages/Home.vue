<template>

  <Banner></Banner>
  <section class="container-fluid  py-5 bg-x-light bg-opacity-75 shadow-lg">
    <div class="row align-items-center p-5">

      <div class="col-lg-7  text-lg-start " style="text-align: justify;">
        <h1 class="display-6 fw-bold mb-4">
          Giới thiệu về sứ mệnh của
          <span class="text-success">GProducts</span>
          với thế giới

        </h1>
        <small class="lead mb-4 d-flex align-items-center justify-content-center" style="text-align: justify;">
          Với sứ mệnh của chúng tôi là cung cấp những sản phẩm xanh, thân thiện với môi trường,
          giúp bảo vệ hành tinh và nâng cao chất lượng cuộc sống của con người.
          Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, an toàn cho sức khỏe và môi trường.
          Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao, an toàn cho sức khỏe và môi trường.
          Hãy cùng chúng tôi cùng nhau xây dựng một tương lai bền vững hơn cho thế hệ mai sau.
          GProducts cam kết sẽ là một sản phẩm xanh, thân thiện với môi trường, giúp bảo vệ hành tinh và nâng cao chất
          lượng cuộc sống của con người.
          chúng tôi hướng tới một sản phẩm xanh, thân thiện với môi trường, giúp bảo vệ hành tinh và nâng cao chất lượng
          cuộc sống của con. chúng tôi hướng tới một sản phẩm xanh, thân thiện với môi trường, giúp bảo vệ hành tinh và
          nâng cao chất lượng
          cuộc sống của con, chúng tôi hướng tới một sản phẩm xanh, thân thiện với môi trường, giúp bảo vệ hành tinh và
          nâng cao chất lượng
        </small>
        <a class="btn btn-success mt-0 mb-3" href="#spnb">Click để chung tay bảo vệ môi trường nào</a>

      </div>


      <div class="col-lg-5 mt-4 mt-lg-0">

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
              class="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
          </div>

          <div class="carousel-inner">

            <div class="carousel-item active">
              <img :src="cuago" class="d-block w-100 fixed-img rounded" alt="Slide 1" />
            </div>

            <div class="carousel-item">
              <img :src="bango" class="d-block w-100 fixed-img rounded" alt="Slide 2" />
            </div>

            <div class="carousel-item">
              <img :src="thotgo" class="d-block w-100 fixed-img rounded" alt="Slide 3" />
            </div>

            <div class="carousel-item">
              <img :src="hocgo" class="d-block w-100 fixed-img rounded" alt="Slide 4" />
            </div>

          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

      </div>


    </div>
  </section>

  <section class="my-5">
    <div class="container text-center">
      <h2 id="spnb" class="mb-4">SẢN PHẨM NỔI BẬT</h2>
      <div class="row d-flex justify-content-center align-items-center">
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
      <ul class="nav justify-content-center mb-4">
        <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
          <a class="nav-link" :class="{ active: activeTab === tab }" @click="activeTab = tab">{{ tab }}</a>
        </li>
      </ul>

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

          </div>
        </div>
      </div>

      <!-- <button class="btn btn-outline-success mt-3">Xem thêm</button> -->
    </div>
  </section>

 

</template>
<script setup>
import { ref } from 'vue'
import Banner from '@/components/Banner.vue'


import song from '@/assets/song.jpg'
import nhamay from '@/assets/nhamay.jpg'
import thanhpho from '@/assets/thanhpho.jpg'
import tp2 from '@/assets/tp2.jpg'
import onghutre from '@/assets/onghutre.jpg'
import muongdiatre from '@/assets/muongdiatre.jpg'
import hopbamia from '@/assets/hopbamia.jpg'
import hocgo from '@/assets/hocgo.jpg'
import amtratre from '@/assets/amtratre.jpg'
import thotgo from '@/assets/thotgo.jpg'
import cuago from '@/assets/cuago.jpg'
import bango from '@/assets/bango.jpg'
import duongmia from '@/assets/duongmia.jpg'





// Tabs cho danh mục sản phẩm
const tabs = ref(["Tất cả", "Đồ gia dụng", "Nội thất", "Thời trang"])
const activeTab = ref("Tất cả")

// Danh sách sản phẩm
const products = ref([
  {
    name: 'Ống hút tre tự nhiên',
    price: 50000,
    oldPrice: 120000,
    discount: 20,
    image: onghutre,
  },
  {
    name: 'Thìa tre thân thiện thiên nhiên',
    price: 8000,
    oldPrice: 250000,
    discount: 10,
    image: muongdiatre,
  },
  {
    name: 'Hộp làm từ bả mía',
    price: 5000,
    image: hopbamia,
  },
  {
    name: 'Hộc đựng muỗng đĩa',
    price: 89000,
    discount: 70,
    image: hocgo,
  },
  {
    name: 'Ấm trà tre tự nhiên',
    price: 230000,
    discount: 10,
    image: amtratre,
  },
  {
    name: 'Thớt gỗ đẹp màu nâu',
    price: 150000,
    discount: 10,
    image: thotgo,
  },
  {
    name: 'Cửa gỗ thẩm mỹ',
    price: 150000,
    discount: 10,
    image: cuago,
  },
  {
    name: 'Đường mía tự nhiên',
    price: 40000,
    discount: 10,
    image: duongmia,
  },
])



// Format giá tiền VNĐ
const formatPrice = (value) => {
  return value.toLocaleString('vi-VN') + '₫'
}
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
