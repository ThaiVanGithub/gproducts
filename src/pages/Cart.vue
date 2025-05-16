<template>
  <section class="py-4 mt-5">
    <div class="container-fluid p-0 m-0">
      <div class="col-lg-12 d-flex justify-content-center align-items-center gap-2 bg-success text-light p-3 rounded">
        <i class="fa-solid fa-circle-check lead"></i>
        <p class="mb-0">Giỏ hàng đã được cập nhật</p>
      </div>
    </div>
  </section>

  <section class="my-4">
    <div class="container border rounded p-4 bg-light shadow-sm">
      <div class="row text-center fw-bold border-bottom pb-3 mb-3">
        <div class="col-lg-2">Sản phẩm</div>
        <div class="col-lg-2">Tên sản phẩm</div>
        <div class="col-lg-2">Giá</div>
        <div class="col-lg-3">Số lượng</div>
        <div class="col-lg-2">Tổng tiền</div>
        <div class="col-lg-1">Thao tác</div>
      </div>

      <!-- Sản phẩm -->
      <div class="row align-items-center text-center mb-3">
        <div class="col-lg-2 d-flex flex-column align-items-center">
          <img src="../assets/amtratre.jpg" class="img-fluid rounded" style="max-height: 120px;" alt="Sản phẩm">
          
        </div>
        <div class="col-lg-2">
          <p class="mt-2 mb-0">Ấm Trà Tre</p>
        </div>
        <div class="col-lg-2">
          <p class="mb-0 text-danger">200.000₫</p>
        </div>
        <div class="col-lg-3">
          <div class="d-flex justify-content-center align-items-center gap-2">
            <button class="btn btn-outline-secondary btn-sm" @click="decrease">-</button>
            <span class="px-2">{{ number }}</span>
            <button class="btn btn-outline-secondary btn-sm" @click="increase">+</button>
          </div>
        </div>

        <div class="col-lg-2">
          <p class="mb-0 fw-semibold">200.000₫</p>
        </div>
        <div class="col-lg-1">
          <button class="btn btn-outline-danger btn-sm">Xoá</button>
        </div>
      </div>

      <!-- Tổng cộng -->
      <div class="row justify-content-end border-top pt-3 mt-4">
        <div class="col-lg-4 text-end">
          <h5>Tổng cộng: <span class="text-danger fw-bold">200.000₫</span></h5>
          <button class="btn btn-success mt-2">Thanh toán</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>



<script setup>
import { ref } from 'vue';

const number = ref(1);

function increase() {
  number.value++;
}

function decrease() {
  if (number.value > 1) number.value--;
}
</script>