<template>
  <div class="nav-wrapper">
    <div class="content">
      Money
    </div>
    <Nav/>
  </div>
</template>

<script>

export default {
  name: "Money"
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>