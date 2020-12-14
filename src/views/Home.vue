<template>
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

export default {
  name: "Home",
  components: {
    SearchBar,
    JobCard,
  },
  data() {
    return {
      jobsData: {},
      cors: "https://cors-anywhere.herokuapp.com/",
      url: "https://jobs.github.com/positions.json",
      searchDesc: "",
      searchLoc: "",
    };
  },
  methods: {
    fetchData() {
      fetch( `${this.cors}${this.url}?description=${this.searchDesc}&location=${this.searchLoc}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((json) => (this.jobsData = json));
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
</style>
