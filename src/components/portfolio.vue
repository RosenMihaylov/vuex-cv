<template>
  <div id="portfolio">
    <h2>
      {{ allPortfolios.title }}
    </h2>
    <div class="box" v-for="(project, pr) in allPortfolios.projects" :key="pr">
      <p>
        {{ allPortfolios.description }}
        <span v-for="(language, pcL) in project.usedProgramms" :key="pcL">
          {{ language }}
        </span>
      </p>
      <ol>
        <li v-for="(link, li) in project.link" :key="li">
          <a :href="link" target="_blank">{{ link }}</a>
        </li>
      </ol>
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
