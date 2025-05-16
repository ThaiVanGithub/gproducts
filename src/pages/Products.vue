<template>
  <section class="py-5 mt-5 product-navbar">
    
    <div class="container">
      
      <div class="bg-white rounded-3 shadow-lg p-3 mb-1">
        <div class="row gx-2 gy-3 align-items-center"> <!-- Thêm gutter ngang và dọc -->
          <!-- Tìm theo loại -->
          <div class="col-lg-3 col-6">
            <a-dropdown class="w-100 text-center ">
              <a class="ant-dropdown-link  text-dark p-1 d-flex justify-content-between align-items-center w-100"
                style="border: 1px solid green; border-radius: 5px;" @click.prevent>
                Tìm kiếm theo loại
                <i class="fa-solid fa-caret-down"></i>
              </a>
              <template #overlay>
                <a-menu class="text-center">
                  <a-menu-item>
                    <a href="javascript:;">Nội thất</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">Đồ gia dụng</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">Mỹ phẩm</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>

          <!-- Tìm theo giá -->
          <div class="col-lg-3 col-6">
            <a-dropdown class="w-100">
              <a class="ant-dropdown-link text-dark p-1 d-flex justify-content-between align-items-center w-100"
                style="border: 1px solid green; border-radius: 5px;" @click.prevent>
                Tìm kiếm theo giá
                <i class="fa-solid fa-caret-down"></i>
              </a>
              <template #overlay>
                <a-menu class="text-center">
                  <a-menu-item>
                    <a href="javascript:;">Giảm dần</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">Tăng dần</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">Ngẫu nhiên</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>

          <!-- Chọn khu vực -->
          <div class="col-lg-3 col-6">
            <a-cascader v-model:value="value" :options="options" placeholder="Chọn khu vực" class="w-100"
              change-on-select />
          </div>

          <!-- Tìm kiếm sản phẩm -->
          <div class="col-lg-3 col-6">
            <a-input-search placeholder="Tìm kiếm sản phẩm" @search="onSearch" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Section mới - Danh mục nổi bật & Khuyến mãi -->
<section class=" highlight-section">
  <div class="container">
    <div class="row g-4">
      <!-- Danh mục nổi bật -->
      <div class="col-lg-8 col-12">
        <div class="bg-white p-4 rounded-3 shadow-sm">
          <h3 class="mb-4 text-success"><i class="fas fa-star me-2"></i>Danh mục nổi bật</h3>
          <div class="row g-3">
            <div class="col-md-3 col-lg-3 col-sm-6">
              <a href="#" class="category-card">
                <div class="card hover-effect">
                  <img src="@/assets/bango.jpg" class="card-img-top special-product-img" alt="Nội thất">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Nội thất</h5>
                    <rating></rating>
                  </div>
                </div>
              </a>
            </div>
            <!-- Thêm 2 danh mục khác -->
            <div class="col-md-3 col-lg-3 col-sm-6">
              <a href="#" class="category-card">
                <div class="card hover-effect">
                  <img src="@/assets/hopbamia.jpg" class="card-img-top special-product-img" alt="Nội thất">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Hộp đựng</h5>
                    <rating></rating>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-6">
              <a href="#" class="category-card">
                <div class="card hover-effect">
                  <img src="@/assets/thotgo.jpg " class="special-product-img card-img-top"  alt="Nội thất">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Dụng cụ bếp</h5>
                    <rating></rating>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-6 ">
              <a href="#" class="category-card">
                <div class="card hover-effect">
                  <img src="@/assets/onghutre.jpg " class="special-product-img card-img-top"  alt="Nội thất">
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Dụng cụ bếp</h5>
                    <rating></rating>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner khuyến mãi -->
      <div class="col-lg-4 col-12">
        <div class="promo-banner position-relative overflow-hidden rounded-3 " >
          <img src="@/assets/lytre.jpg" 
               class="img-fluid hover-zoom" 
               alt="Khuyến mãi">
          <div class=" position-absolute bg-secondary bottom-0 p-5 m-5 rounded text-center blur-70">
            <h2 class="fw-bold text-warning">GIẢM TỚI 50%</h2>
            <p class="text-warning">Cho đơn hàng đầu tiên và khách hàng đầu tiên trả trước giao</p>
            <button class="btn btn-warning btn-lg rounded">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dòng sản phẩm đặc biệt -->
    
    
  </div>
</section>


  <section class="py-5 products">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 mb-4 text-center" v-for="(product, index) in products" :key="index">
          <div class="card h-100 position-relative border-0 shadow-sm">
            <div v-if="product.discount" class="discount-badge 
            position-absolute top-0 start-0 bg-success text-white px-3 py-1 small rounded-end">
              -{{ product.discount }}%
            </div>
            <img :src="product.image" class=" hover-zoom  card-img-top product-img" :alt="product.name" />
            <div class="card-body p-2">
              <h6 class="card-title mb-1">{{ product.name }}</h6>
              <div class="text-muted small " v-if="product.oldPrice">
                <del>{{ formatPrice(product.oldPrice) }}</del>
              </div>
              <div class="text-success fw-bold">{{ formatPrice(product.price) }}</div>
            </div>
            <div class="card-footer col-lg-12 col-sm-12 d-flex justify-content-center gap-4 align-items-center">
              <a-popconfirm :title="product.title" ok-text="Đóng"
                :overlay-style="{ whiteSpace: 'normal', maxWidth: '250px' }" :show-cancel="false">
                <a href="#" class="btn btn-success">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </a-popconfirm>

              <a @click="addToCart(product)" class="btn btn-success">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<div class="d-flex justify-content-center align-items-center">
  <col-6>
  <pagination></pagination>
</col-6>

</div>
</template>


<script setup>
import Pagination from '@/components/Pagination.vue';
import { message } from 'ant-design-vue';
import '@/styles/products.css'
import rating from '@/components/Rating.vue'
import data from '@/fakeData/data.js'

const { options, products, formatPrice } = data;
  // Báo thêm vào giỏ
  const addToCart = (product) => {
    message.success(` đã thêm ${product.name} vào giỏ hàng!`);
  };
</script>


