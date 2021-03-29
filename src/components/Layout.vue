<template>
<div>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav/>
  </div>
</div>
</template>

<script>
export default {
name: "Layout"
}
</script>

<style scoped>
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