<template>
  <div class="card" v-for="job in jobsData" v-bind:key="job.id">
    <div class="card-wrap">
      <div class="logo-area">
        <img class="logo" :src="job.company_logo" alt="" />
      </div>
      <h2 class="title">
        {{ job.title }}
      </h2>
      <p class="company">{{ job.company }}</p>
      <p class="location">{{ job.location }}</p>
      <p class="date">{{ job.created_at }}</p>
      <router-link
        class="detail"
        :to="{
          name: 'Details',
          params: {
            jobId: job.id,
            jobLogo: job.company_logo,
            jobTitle: job.title,
            jobCompany: job.company,
            jobCompanyUrl: job.company_url,
            jobLoc: job.location,
            jobDate: job.created_at,
            jobApply: job.how_to_apply,
            jobDescription: job.description,
          },
        }"
        >Detail <span class="arrow">&#8594;</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    jobsData: Object,
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 24%;
  padding: 0 4px;
  margin-bottom: 2em;

  @media only screen and (max-width: 992px) {
    width: 45%;
  }
  &-wrap {
    border: 2px solid #477599;
    border-radius: 5px;
    position: relative;
    padding: 10px 5px 15px 20px;
    min-height: 230px;
    background-color: #161b22;
    transition: 0.5s all;

    @media only screen and (max-width: 992px) {
      padding: 0 8px;
    }
  }
  .logo-area {
    height: 35px;
    @media only screen and (max-width: 992px) {
      display: none;
    }
    .logo {
      height: 100%;
    }
  }
  .title {
    font-size: 1.1em;
    @media only screen and (max-width: 992px) {
      font-size: 0.9em;
    }
  }

  .company {
    color: #33a9ff;
    font-size: 0.8em;
  }

  .location {
    color: #ffb930;
    font-size: 0.7em;
  }

  .date {
    color: #9e9e9e;
    font-size: 0.6em;
    position: absolute;
    bottom: 15px;

    @media only screen and (max-width: 992px) {
      position: relative;
      bottom: auto;
    }
  }

  .detail {
    position: absolute;
    right: 20px;
    bottom: 22px;
    text-decoration: none;
    color: darkturquoise;
    font-size: 0.9em;

    @media only screen and (max-width: 992px) {
     bottom: 6px;
    }

    .arrow {
      position: absolute;
      left: 20px;
      transition: 0.5s all;
      opacity: 0;
    }
  }

  &:hover {
    .card-wrap {
      background-color: #030e17;
    }
    .arrow {
      left: 40px;
      opacity: 1;
    }
  }
}
</style>
