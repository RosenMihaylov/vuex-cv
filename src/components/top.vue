<template>
  <header>
    <div class="header">
      <h6 class="title pointer">
        <span>{{ allTops.title }}</span>
      </h6>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "top",
  computed: mapGetters(["allTops"])
};
</script>

<style lang="scss">
header {
  margin-bottom: 2rem;
  h6 {
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>
