<template>
  <button class="button" @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  background: #6849CB;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 44px;
  height: 40px;
}
</style>