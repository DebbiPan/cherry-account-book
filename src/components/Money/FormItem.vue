<template>
  <div>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
      <input :value="value"
             type="text"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default:''}) readonly value!:string ;
  @Prop({required:true}) fieldName!:string;
  @Prop() placeholder?:string;
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>

.notes {
  font-size: 14px;
  background: #F8F6FF;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    background: transparent;
    height: 64px;
    flex-grow: 1;
    border: none;
    padding-right: 16px;
  }
}
</style>