<template>
  <div id="languageBar" class="noPrint">
    <select @change="changeLanguage($event)">
      <option value="en">en</option>
      <option value="bg">bg</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "languageSelect",
  methods: mapActions(["changeLanguage"])
};
</script>

<style lang="scss">
#languageBar {
  position: fixed;
  right: 2rem;
  top: 1rem;
  select,
  option {
    font-size: 1.5rem;
  }
}
</style>
