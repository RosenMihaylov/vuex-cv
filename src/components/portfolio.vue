<template>
  <div id="portfolio">
    <h2>
      {{ allPortfolios.title }}
    </h2>
    <div class="box">
      <a href="https://rosen-mihaylov-portfolio.netlify.com/" target="_blank">
        https://rosen-mihaylov-portfolio.netlify.com/</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "portfolio",
  computed: mapGetters(["allPortfolios"])
};
</script>

<style lang="scss">
#portfolio {
  width: 100%;
  .box {
    padding-left: 5px;
    a {
      text-decoration: none;
      color: #000;
      font-weight: 500;
      font-size: 1rem;
    }
  }
  span {
    font-weight: 500;
  }
  ol {
    padding: 0 0 0 15px;
    margin: 0;
  }
}
</style>
