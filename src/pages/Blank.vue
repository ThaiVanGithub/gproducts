<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
    <div class="mb-4">
      <i class="bi bi-inbox-fill display-1 text-primary"></i>
    </div>
    <h1 class="mb-3 fw-bold">Trang trống</h1>
    <p class="text-muted mb-4">Chưa có ý tưởng gì cho trang này. Hãy sáng tạo theo cách của bạn!</p>
    <br>
    <button class="btn btn-success" @click="countNumber">Click</button>
    <small class="py-3">Kỉ lục cao nhất hiện tại là 
      <span class="bg-dark text-light p-1 rounded">123</span>
    </small>

    <div class="mt-3">
      <p v-if="number <= 123">{{ number }}</p>
      <p v-else class="text-success fw-bold">
        🎉 Chúc mừng bạn đã phá kỷ lục với {{ number }} lần click! 🎉
      </p>
    </div>

    <button class="btn btn-primary mt-3" @click="refreshPage">Chơi lại</button>
  </div>
</template>

<script>
export default {
  name: 'EmptyPage',
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    countNumber() {
      this.number++;
    },
    refreshPage() {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
p {
  font-size: 1.25rem;
}
</style>
