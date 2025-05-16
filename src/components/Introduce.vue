<template>
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
</template>
<script setup>
import { ref } from 'vue'
import hocgo from '@/assets/hocgo.jpg'
import thotgo from '@/assets/thotgo.jpg'
import cuago from '@/assets/cuago.jpg'
import bango from '@/assets/bango.jpg'



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