<template>
  <div>
    <div class="global" v-if="data.login">
      <div class="header">
        <div>
          <p class="logo"><strong>Github</strong>&nbsp; Search</p>
        </div>
        <div id="searchBar">
          <input
            @keydown="user = $event.target.value"
            @keydown.enter="searchUser"
            :value="user"
            type="text"
            id="input"
          />
          <button id="searchButton">
            <img src="@/assets/search.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="content">
        <div class="side-bar">
          <img id="avatar" :src="data.avatar_url" alt="avatar" />
          <p class="name">{{ data.name }}</p>
          <p class="username">{{ data.login }}</p>
          <div class="details">
            <ul>
              <di class="organization">
                <img
                  :src="require(`@/assets/organization.svg`)"
                  alt="Organization"
                />
                <p class="organization-name">{{ data.company }}</p>
              </di>

              <li class="location">
                <img :src="require(`@/assets/location.svg`)" alt="" />
                <p class="location-name">{{ data.location }}</p>
              </li>
              <li class="stars">
                <img :src="require(`@/assets/star.svg`)" alt="" />
                <p class="total-stars">{{ stars }}</p>
              </li>
              <li class="repositories">
                <img :src="require(`@/assets/repository.svg`)" alt="" />
                <p class="total-repositories">{{ data.public_repos }}</p>
              </li>
              <li class="followers">
                <img :src="require(`@/assets/followers.svg`)" alt="" />
                <p class="total-followers">{{ data.followers }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <ul>
            <li v-for="repo in repos" :key="repo.id">
              <repository :repository="repo" />
            </li>
          </ul>
        </div>
      </div>
      <router-view key="$route.path" />
    </div>
    <div class="global" v-else>
      <div id="notFound">
        <GoBack />
        <h1>Erro! Usuário não encontrado</h1>
        <h3>Tente novamente :)</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Repository from "@/components/Repository";
import GoBack from "@/components/GoBack";

const axios = require("axios");

export default {
  data() {
    return {
      user: this.userName,
      star: 0,
      stars: 0,
      data: {},
      repos: [],
    };
  },
  created() {
    return this.updateStars(this.repos, this.stars);
  },
  components: {
    Repository,
    GoBack,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateStars() {
      this.repos.map((repo) => {
        this.star = this.star + repo.stargazers_count;
      });

      this.stars = this.star;
    },
    searchUser() {
      return this.$router.push({
        name: "Result",
        params: { userName: this.user },
      });
    },
  },
  mounted() {
    axios
      .get(`https://api.github.com/users/${this.userName}`)
      .then((response) => (this.data = response.data))
      .catch((error) => console.log(error));

    axios
      .get(`https://api.github.com/users/${this.userName}/repos`)
      .then((response) => {
        this.repos = response.data;
        this.updateStars();
      })
      .catch((error) => console.log(error));
  },
  computed: {},
};
</script>
    

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap");
* {
  margin: 0;
  padding: 0;
}

.global {
  max-width: 1400px;
  width: 100vw;
  max-height: 946px;
  height: 100vh;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  margin-left: 28px;
  margin-right: 28px;
  max-width: 1384px;
}

.logo {
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 42px;
  line-height: 49.77px;
}

.logo strong {
  font-family: "Roboto Mono", sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 55.39px;
}

.content {
  display: flex;
}

.side-bar {
  width: 300px;
  height: 589px;
  margin-top: 28px;
  margin-right: 56px;
  margin-left: 28px;
  display: flex;
  flex-flow: column;
}

#avatar {
  height: 300px;
  width: 300px;
}

.name {
  font-size: 36px;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
  text-align: left;

  margin-top: 14px;
  margin-left: 28px;
}

.username {
  font-size: 24px;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #757575;
  text-align: left;

  margin-left: 28px;
}

.details {
  margin-top: 50px;
  margin-left: 28px;

  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #757575;
}

.details ul {
  list-style: none;
}

.details ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.details ul li {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}

.details ul li img {
  margin-right: 10px;
}

.organization img {
  width: 20px;
  height: 18px;
}

.location img {
  width: 20px;
  height: 20px;
}

.stars img {
  width: 23.32px;
  height: 22.18px;
}

.repositories img {
  width: 24px;
  height: 24px;
}

.followers img {
  width: 20px;
  height: 18px;
}

.main {
  width: 1028px;
  height: 711px;
  margin-right: 28px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.main ul {
  list-style: none;
}

.main ul li {
  margin-bottom: 60px;
}

/* Search bar style */
#searchBar input {
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