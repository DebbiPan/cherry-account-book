<template>
  <div>
    <div class="tags">
      <div class="new">
        <button @click="createTag">新建标签</button>
      </div>
      <ul class="current">
        <li v-for="tag in tagList" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag) >= 0}"
            @click="toggle(tag)">{{ tag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator';
import TagHelper from '@/Mixins/tagHelper';

@Component
export default class Tages extends Mixins(TagHelper) {
  get tagList() {
    return this.$store.state.tagList;
  }

  selectedTags: string[] = [];

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}

</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $b: #9680FF;
      background: $b;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      color: #fff;

      &.selected {
        background: darken($b, 10%);
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: #EAE6FF;
      border: none;
      //border-radius: 5px;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>