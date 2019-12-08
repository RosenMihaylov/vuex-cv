<template>
  <div id="programmingSkills">
    <h2>
      {{ allProgrammingSkills.title }}
    </h2>
    <ol class="box">
      <li v-for="(skill, skl) in allProgrammingSkills.skills" :key="skl">
        <h3>{{ skill }}</h3>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "programmingSkills",
  computed: mapGetters(["allProgrammingSkills"])
};
</script>

<style lang="scss">
#programmingSkills {
  width: 100%;
  ol {
    padding-left: 20px;
  }
}
</style>
