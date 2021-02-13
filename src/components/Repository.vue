<template>
  <main>
    <ul>
      <li>
        <h1 class="title">{{ repository.name }}</h1>
        <p class="description">
          {{ repository.description }}
        </p>
        <div class="stars">
          <img :src="require(`@/assets/star.svg`)" alt="" />
          <p class="total-stars">{{ repository.stargazers_count }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: {
    repository: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  width: 1028px;
  height: 105px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;

  background-color: white;
}

.title {
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 36px;
  line-height: 42.66px;
}

.description {
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 24px;
  line-height: 28.44px;
  color: #757575;
}

.stars {
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 10px;
}

.stars img {
  width: 23.32px;
  height: 22.18px;
  margin-right: 10px;
}

.stars p {
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  line-height: 23.7px;
  color: #757575;
}
</style>