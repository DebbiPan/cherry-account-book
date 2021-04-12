<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>

    </div>
  </Layout>
</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Types, Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'},
  ];
  typeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ];
}
</script>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: #EAE6FF;
  color: #6849CB;

  &.selected {
    background: #6849CB;
    color: #fff;

    &::after {
      display: none;
    }
  }
}
</style>