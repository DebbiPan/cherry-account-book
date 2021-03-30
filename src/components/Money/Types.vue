<template>
  <div>
    <div>
      <ul class="type">
        <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
        <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Types",
  data(){
    return{
      type:'-' //-表示支出，+表示收入
    }
  },
  props:['xxx'],
  methods:{
    selectType(type){//表示type只能是 '+' 和 '-'
      if(type !== '+' && type !== '-'){
        throw new Error('type is unknow')
      }
      this.type = type
      console.log(this.xxx)
    }
  }
}
</script>

<style lang="scss" scoped>
.type {
  background: #6748CA;
  display: flex;
  text-align: center;
  font-size: 24px;
  color: #fff;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #888;

    }
  }
}
</style>