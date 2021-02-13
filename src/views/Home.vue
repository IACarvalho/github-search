<template>
  <div class="home">
    <div>
      <h1 id="title"><strong>Github</strong> Search</h1>
      <div id="searchBar">
        <input
          @keydown="userName = $event.target.value"
          @keypress.enter="searchUser"
          :value="userName"
          type="text"
          id="input"
        />
        <button id="searchButton" @click="searchUser">
          <img src="@/assets/search.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    searchUser() {
      return this.$router.push({
        name: "Result",
        params: { userName: this.userName },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap");
#title {
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 64px;
  line-height: 75.84px;
  letter-spacing: 4px;
}

#title strong {
  font-family: "Roboto Mono", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 84.41px;
  letter-spacing: 4px;
  color: #000000;
}

#home {
  widows: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Search bar style */
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap");
* {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  line-height: 21.33px;
  color: #757575;
}
#searchButton {
  background: #000000;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  width: 100px;
  height: 50px;
}

#input {
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 600px;
  height: 50px;
}

#searchBar {
  display: flex;
}
</style>