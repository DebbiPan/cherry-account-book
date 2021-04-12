<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>

    </div>
  </Layout>
</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Types, Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
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