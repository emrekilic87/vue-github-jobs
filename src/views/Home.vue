<template>
  <div class="loading" v-if="loading">
    <orbit-spinner :animation-duration="1200" :size="55" :color="'#ff1d5e'" />
  </div>
  <div class="home">
    <div class="container">
      <SearchBar
        @search="search"
        v-model="searchDesc"
        v-model:searchLoc="searchLoc"
      />
      <div class="card-area">
        <JobCard :jobsData="jobsData" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import JobCard from "@/components/JobCard.vue";
import { OrbitSpinner } from "epic-spinners";

export default {
  name: "Home",
  components: {
    SearchBar,
    JobCard,
    OrbitSpinner,
  },
  data() {
    return {
      loading: false,
      jobsData: {},
      cors: "https://cors-anywhere.herokuapp.com/",
      url: "https://jobs.github.com/positions.json",
      searchDesc: "",
      searchLoc: "",
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(
        `${this.cors}${this.url}?description=${this.searchDesc}&location=${this.searchLoc}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((json) => ((this.jobsData = json), (this.loading = false)));
    },
    search() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped lang="scss">
.card-area {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 3em;
  justify-content: center;
  align-content: space-between;
}

.loading {
  background: #161b22a3;
  width: 100%;
  height: 100%;
  z-index: 99999;
  position: fixed;
  .orbit-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
