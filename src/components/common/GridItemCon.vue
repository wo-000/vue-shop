<template>
  <div class="item-con" :class="rushwidth">
    <img :class="rushimgwidth" v-lazy="imgsrc" alt="" />
    <p class="title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    rushwidth: {
      type: String
    },
    rushimgwidth: {
      type: String
    },
    title: {
      type: String
    },
    imgsrc: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.item-con {
  padding-top: $base-space;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: $border-radius;
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 700;
    line-height: 18px;
    color: $base-color;
    font-size: $font-size;
    margin-top: $base-space * 0.4;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.starswidth {
  text-align: center;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    font-size: $font-size;
  }
}
.lookwidth {
  p.title {
    font-size: $font-size * 1.2;
  }
}
</style>
