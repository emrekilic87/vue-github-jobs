<template>
  <header class="header">
    <div class="container">
      <h1 class="main-title">
        <router-link class="link" to="/">
          Github Jobs
        </router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  background-color: #161b22;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #292b2e;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;

    .main-title {
      .link {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
