<template>
  <section class="bg-light py-5 mt-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-success">Liên hệ với chúng tôi</h2>
        <p class="text-muted">Chúng tôi luôn sẵn sàng hỗ trợ bạn!</p>
      </div>

      <div class="row gy-5">
        <div class="col-lg-7">
          <a-card class="shadow-lg rounded-4">
            <a-form layout="vertical" @submit.prevent="handleSubmit" class="p-4">
              <div class="row g-4">
                <div class="col-md-6">
                  <a-form-item label="Họ và tên" required>
                    <a-input v-model:value="formData.name" placeholder="Nhập họ tên" size="large">
                      <template #prefix><UserOutlined class="text-success" /></template>
                    </a-input>
                  </a-form-item>
                </div>

                <div class="col-md-6">
                  <a-form-item label="Email" required>
                    <a-input
                      v-model:value="formData.email"
                      placeholder="Nhập email"
                      size="large"
                      type="email"
                    >
                      <template #prefix><MailOutlined class="text-success" /></template>
                    </a-input>
                  </a-form-item>
                </div>

                <div class="col-12">
                  <a-form-item label="Tiêu đề">
                    <a-input
                      v-model:value="formData.subject"
                      placeholder="Nhập tiêu đề"
                      size="large"
                    >
                      <template #prefix><NotificationOutlined class="text-success" /></template>
                    </a-input>
                  </a-form-item>
                </div>

                <div class="col-12">
                  <a-form-item label="Nội dung" required>
                    <a-textarea
                      v-model:value="formData.message"
                      :rows="5"
                      size="large"
                      placeholder="Nhập nội dung"
                    />
                  </a-form-item>
                </div>

                <div class="col-12 text-end">
                  <a-button
                    type="primary"
                    size="large"
                    @click="handleSubmit"
                    class="px-4 bg-success border-0 hover-opacity"
                  >
                    <SendOutlined /> Gửi tin nhắn
                  </a-button>
                </div>
              </div>
            </a-form>
          </a-card>

          <a-alert
            v-if="submitted"
            message="🎉 Cảm ơn bạn đã liên hệ!"
            type="success"
            show-icon
            class="mt-4"
          />
        </div>

        <div class="col-lg-5">
          <a-card bordered class="p-4 shadow">
            <h4 class="text-success fw-bold mb-4">
              <i class="fas fa-address-book me-2"></i> Thông tin liên hệ
            </h4>

            <div class="d-flex align-items-start mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <strong>Email:</strong><br />
                <span class="text-muted">vanthaia7@gmail.com</span>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <strong>Điện thoại:</strong><br />
                <span class="text-muted">0336 483 290</span>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="icon-circle bg-success text-white me-3">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <strong>Địa chỉ:</strong><br />
                <span class="text-muted">Cao Lãnh, Đồng Tháp</span>
              </div>
            </div>

            <div class="mt-4">
              <h6 class="fw-bold mb-3">Kết nối mạng xã hội</h6>
              <div class="d-flex gap-3">
                <a href="#" class="text-dark fs-4"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-dark fs-4"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-dark fs-4"><i class="fab fa-github"></i></a>
              </div>
            </div>
          </a-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import {
  UserOutlined,
  MailOutlined,
  NotificationOutlined,
  SendOutlined,
} from '@ant-design/icons-vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitted = ref(false);

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
    return;
  }

  console.log('Form submitted:', formData.value);
  submitted.value = true;

  // Gọi API gửi dữ liệu ở đây (ví dụ: fetch, axios)
  // Sau khi gửi thành công, reset form
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};
</script>

<style scoped>
.hover-opacity:hover {
  opacity: 0.9;
}

.icon-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>