<template>
  <layout>
    <div class="navBar">
      <Icon class="left-icon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"/>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name"
                @update:value="update"
                field-name="标签名"
                placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';


@Component({
  components: {FormItem, Button}
})
export default class EditLable extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/4o4');
    }
  }

  update(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag', {id: this.currentTag.id, name});
    }
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag', this.currentTag.id);
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
    font-weight: bold;
    font-family: $font-hei;
  }

  > .left-icon {
    width: 24px;
    height: 24px;
  }

  > .right-icon {
    width: 24px;
    height: 24px;
  }
}


.button-wrapper {
  text-align: center;

}
</style>