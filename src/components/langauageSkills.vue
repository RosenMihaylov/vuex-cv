<template>
  <div id="languageSkills">
    <h2>{{ allLanguages.title }}</h2>
    <ol class="box">
      <li v-for="(language, ls) in allLanguages.languages" :key="ls">
        <h3>{{ language }}</h3>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "langageSkills",
  computed: mapGetters(["allLanguages"])
};
</script>

<style>
#languageSkills {
  width: 100%;
}
</style>
