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
  font-weight: 700;
  color: $base-color;
  padding: $base-space * 2 $base-space * 2 0 $base-space * 2;
}
</style>
