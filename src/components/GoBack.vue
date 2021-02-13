<template>
  <span class="go-back">
    <button @click="goBack">go back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;1,300&display=swap");
.go-back {
  display: flex;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
}
button {
  background: #000000;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  width: 100px;
  height: 50px;
  color: #fff;
}
</style>