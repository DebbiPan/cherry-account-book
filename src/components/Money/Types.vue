<template>
  <div>
    <div>
      <ul class="type">
        <li :class="{[classPrefix+'-item']: classPrefix,selected:value === '-'}"
            @click="selectType('-')">支出
        </li>
        <li :class="{[classPrefix+'-item']: classPrefix,selected:value === '+'}"
            @click="selectType('+')">收入
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  selectType(type: string) {//表示type只能是 '+' 和 '-'
    if (type !== '+' && type !== '-') {
      throw new Error('type is unknow');
    }
    this.$emit('update:value', type);
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