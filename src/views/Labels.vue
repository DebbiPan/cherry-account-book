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
        <Button class="creatTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import TagHelper from '@/Mixins/tagHelper';
import {mixins} from 'vue-class-component';

@Component({
  components: {Button}
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
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