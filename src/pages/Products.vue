<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
    <div class="mb-4">
      <i class="bi bi-emoji-smile display-1 text-warning"></i>
    </div>
    <h1 class="mb-3 fw-bold">Trang trống</h1>
    <p class="text-muted mb-4">Nhập một số từ 1 đến 50 và thử vận may của bạn!</p>

    <div class="input-group mb-3 w-50">
      <input 
        type="number" 
        class="form-control" 
        placeholder="Nhập số..." 
        v-model.number="guessNumber"
        min="1"
        max="50"
      >
      <button class="btn btn-success" @click="checkGuess">Đoán</button>
    </div>

    <div v-if="resultMessage" class="mt-3">
      <p :class="resultClass">{{ resultMessage }}</p>
      <p class="mt-2 text-secondary">
        🎯 Số may mắn là: <span class="fw-bold">{{ randomNumber }}</span>
      </p>
    </div>

    <button class="btn btn-primary mt-4" @click="restartGame">Chơi lại</button>
  </div>
</template>

<script>
export default {
  name: 'LuckyGuessGame',
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 50) + 1,
      guessNumber: null,
      resultMessage: '',
      resultClass: '',
    };
  },
  methods: {
    checkGuess() {
      if (this.guessNumber === this.randomNumber) {
        this.resultMessage = `🎉 Chính xác! Bạn đã đoán đúng số ${this.randomNumber}!`;
        this.resultClass = 'text-success fw-bold';
      } else {
        this.resultMessage = `❌ Sai rồi! Bạn đoán ${this.guessNumber}, nhưng số may mắn là ${this.randomNumber}.`;
        this.resultClass = 'text-danger';
      }
    },
    restartGame() {
      this.randomNumber = Math.floor(Math.random() * 50) + 1;
      this.guessNumber = null;
      this.resultMessage = '';
      this.resultClass = '';
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
input {
  font-size: 1.25rem;
}
</style>
