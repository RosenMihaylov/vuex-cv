<template>
  <div id="app">
    <div class="container grid">
      <div class="pageViewCommandLine">
        <button v-if="!simple" @click="changeToSimpleView">
          {{ allViews.buttonSimple }}
        </button>
        <button v-if="simple" @click="changeToFullView">
          {{ allViews.buttonFull }}
        </button>
      </div>
      <languageSelect />
      <top />
      <div class="row">
        <personalData />
        <contactData />
      </div>
      <div class="row">
        <div class="col-7">
          <workExpirience />
        </div>
        <div class="col-5" id="rightSide">
          <education />
          <portfolio v-if="!simple" />
          <programmingSkills v-if="!simple" />
          <langauageSkills />
          <complatedCourses />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "./components/top";
import languageSelect from "./components/languageSelect";
import personalData from "./components/personalData.vue";
import contactData from "./components/contactData.vue";
import workExpirience from "./components/workExpirience.vue";
import education from "./components/education.vue";
import portfolio from "./components/portfolio.vue";
import programmingSkills from "./components/programmingSkills.vue";
import langauageSkills from "./components/langauageSkills.vue";
import complatedCourses from "./components/complatedCourses.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      simple: ""
    };
  },
  components: {
    top,
    languageSelect,
    personalData,
    contactData,
    workExpirience,
    education,
    portfolio,
    programmingSkills,
    langauageSkills,
    complatedCourses
  },
  methods: {
    changeToSimpleView() {
      this.simple === "" ? (this.simple = "true") : (this.simple = "");
    },
    changeToFullView() {
      this.simple === "true" ? (this.simple = "") : (this.simple = "true");
    }
  },
  computed: mapGetters(["allViews"])
};
</script>

<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  padding: 1rem 1.5rem;

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0;
    overflow: hidden;

    .row {
      padding: 0;
      overflow: hidden;
      margin-bottom: 1rem;
      div {
        div {
          padding: 0;
          float: left;
        }
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 1.8rem;
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  h4 {
    font-size: 1rem;
  }
  .pointer {
    cursor: pointer;
  }
  .flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    p {
      flex: 5;
    }
    h3 {
      flex: 7;
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ol {
    padding: 0 0 0 18px;
    list-style-position: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .box {
    border: 1px solid grey;
    width: 100%;
    margin-bottom: 10px;

    p,
    li {
      font-size: 16px;
    }
  }
}
#rightSide > div ul {
  margin-bottom: 0;
}

@media print {
  button,
  .noPrint,
  input {
    display: none;
  }
}
</style>
