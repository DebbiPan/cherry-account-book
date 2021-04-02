<template>
  <div class="nav-wrapper">
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <icon name="right"/>
        </li>
      </ol>
      <div class="creatTag-wrapper">
        <button class="creatTag" @click="creatTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;


  creatTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      try {
        tagListModel.create(name);
      } catch (error) {
        if (error.message === 'duplicate') {
          window.alert('标签重复啦');
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding: 0 16px;

  > li {
    min-height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #6849CB;
      height: 18px;
      width: 18px;
    }
  }
}

.creatTag {
  background: #6849CB;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 3px 10px;
  margin-top: 44px;

  &-wrapper {
    text-align: center;
  }
}
</style>