<template>
  <div class="title">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
h3 {
  font-size: $font-size * 1.5;
  color: $base-color;
  padding: 0 $base-space * 2;
  margin-top: $base-space;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(
    135deg,
    rgb(242, 238, 255) 0%,
    rgb(255, 255, 255) 100%
  );
}
</style>
