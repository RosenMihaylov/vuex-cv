<template>
  <div id="professionalAchievements">
    <div id="title">
      <h2>
        {{ allAchievements.title }}
      </h2>
    </div>
    <div class="box">
      <ol>
        <li v-for="(achievement, a) in allAchievements.achievements" :key="a">
          {{ achievement }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "professionalAchievements",
  computed: mapGetters(["allAchievements"])
};
</script>

<style lang="scss">
#professionalAchievements {
  #title {
    width: 100%;
    h2 {
      border-bottom: 1px solid grey;
    }
  }
  ol {
    padding: 0 0 0 18px;
    margin: 0;
  }
}
</style>
