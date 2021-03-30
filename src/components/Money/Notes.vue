<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script>
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes{
  font-size:14px;
  background:#F8F6FF;
  padding-left: 16px;
  display:flex;
  align-items:center;
  .name{
    padding-right:16px;
  }
  input{
    background:transparent;
    height:64px;
    flex-grow: 1;
    border: none;
    padding-right:16px;
  }
}
</style>