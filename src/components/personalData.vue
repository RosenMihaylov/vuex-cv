<template>
  <div class="col-7" id="personalData">
    <h2>{{ allPersonalData.title }}</h2>
    <div id="picture">
      <img src="../assets/rosenMihaylov.jpg" alt="your pic" />
    </div>
    <div id="personalDataTitles">
      <p>{{ allPersonalData.name.title }}</p>
      <p>{{ allPersonalData.age.title }}</p>
      <p>{{ allPersonalData.adress.title }}</p>
    </div>
    <div class="grid-collum-3-5">
      <h3>{{ allPersonalData.name.text }}</h3>
      <h3>{{ allPersonalData.age.text }}</h3>
      <h3>{{ allPersonalData.adress.text }}</h3>
    </div>
    <div class="col-9"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "personalData",
  computed: mapGetters(["allPersonalData"])
};
</script>

<style lang="scss">
#personalData {
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;

  h2 {
    grid-column: 1/6;
  }
  #picture {
    grid-column: 1/2;
    align-self: center;
  }
}
</style>
