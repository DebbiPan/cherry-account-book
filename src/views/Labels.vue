<template>
  <div class="nav-wrapper">
    <Layout>
      <div class="tags">
        <router-link class="tag"
                     :to="`labels/edit/${tag.id}`"
                     v-for="tag in tags" :key="tag.id">
          <span>{{ tag.name }}</span>
          <icon name="right"/>
        </router-link>
      </div>
      <div class="creatTag-wrapper">
        <Button class="creatTag" @click="creatTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index2';


@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = store.tagList;


  creatTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      store.createTag(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding: 0 16px;

  > .tag {
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

.creatTag-wrapper {
  text-align: center;
}
</style>