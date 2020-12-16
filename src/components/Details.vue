<template>
  <div class="container">
    <div class="detail">
      <a :href="$route.params.jobCompanyUrl" class="logo-area" target="_blank">
        <img class="logo" :src="$route.params.jobLogo" alt="" />
        <p class="parag company">{{ $route.params.jobCompany }}</p>
        <p class="parag location">{{ $route.params.jobLoc }}</p>
      </a>
      <h2 class="title">
        {{ $route.params.jobTitle }}
      </h2>
      <p class="date">{{ $route.params.jobDate }}</p>
      <div class="desc" v-html="$route.params.jobDescription"></div>
      <div class="apply" v-html="$route.params.jobApply"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
};
</script>

<style scoped lang="scss">
.detail {
  padding: 1em 0;
  .logo-area {
    display: block;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    max-width: 250px;
    margin: 0 auto;
    .logo {
      width: 100%;
    }
    .parag {
      margin: 0;
      color: #33a9ff;
      &.location {
        color: #ffb930;
      }
    }
  }

  .title {
    margin-bottom: 5px;
  }

  .date {
    font-size: 0.6em;
    color: #9e9e9e;
  }

  .desc {
    margin-top: 2em;
    color: #808e9f;
    /deep/ a{
      color: #808e9f;
      &:hover{
        opacity: 0.8;
      }
    }
  }

  .apply {
    text-transform: capitalize;
    background-color: #f7aa27f2;
    padding: 1em;
    color: #000;
    font-weight: bold;
    overflow: hidden;
    /deep/ a{
      color: #000;
      &:hover{
        opacity: 0.8;
      }
    }
  }
}
</style>
