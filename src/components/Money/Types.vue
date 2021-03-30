<template>
<div>
  <div>
    <ul class="type">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
name: "Types"
}
</script>

<style lang="scss" scoped>
.type{
  background: #6748CA ;
  display:flex;
  text-align :center;
  font-size:24px;
  color:#fff;
  > li{
    width:50%;
    height:64px;
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;
    &.selected::after{
      content:'';
      position:absolute;
      bottom:0;
      width:100%;
      height:4px;
      background:#fff;
    }
  }
}
</style>