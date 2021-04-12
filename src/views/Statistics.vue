<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" height="48px"/>
    <div>
      type:{{ type }}
      <br>
      interval:{{ interval }}
    </div>
    <div>
      <div>
        <ol>
          <li v-for="(group,index) in result" :key="index.id">
            <h3>{{group.title}}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id">
                {{ item.amount }}
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, items: RecordItem[] }

    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    console.log(hashTable);
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
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

  .interval-tabs-item {
    //height: 48px;
  }
}

</style>