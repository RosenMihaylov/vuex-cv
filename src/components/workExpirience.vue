<template>
  <div id="workExpirience">
    <h2>{{ allWorkExpirience.title }}</h2>
    <ul>
      <li v-for="expirience in allWorkExpirience.jobs" :key="expirience.id">
        <div class="box">
          <h3 class="jobTitle">{{ expirience.title }}</h3>
          <h3 class="jobYears">{{ expirience.years }}</h3>
          <p class="jobCompany">{{ expirience.company }}</p>
          <p class="jobSection">{{ expirience.section }}</p>
          <p class="jobCity">{{ expirience.city }}</p>
          <p class="mainResponsibilitiesTitie">
            {{ expirience.mainResponsibilitiesTitle }}
          </p>
          <ol class="mainResponsibilities">
            <li
              v-for="(responsibility, r) in expirience.mainResponsibilities"
              :key="r"
            >
              {{ responsibility }}
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "wrorkExpirience",
  computed: mapGetters(["allWorkExpirience"])
};
</script>

<style lang="scss">
#workExpirience {
  width: 100%;
  .box {
    display: grid;
    padding: 2px;
    grid-template-columns: 45% 55%;
    grid-template-areas:
      "jobtiTitle jobYears "
      "jobCompany jobResponsibilityTitle "
      "jobSection jobResponsibilityes "
      "jobCity jobResponsibilityes"
      ". jobResponsibilityes";
    .jobTitle {
      grid-area: jobtiTitle;
    }
    .jobYears {
      grid-area: jobYears;
    }
    .jobCompany {
      grid-area: jobCompany;
      font-weight: 600;
    }
    .mainResponsibilitiesTitie {
      grid-area: jobResponsibilityTitle;
    }
    .jobSection {
      grid-area: jobSection;
    }
    .jobCity {
      grid-area: jobCity;
    }
    .mainResponsibilities {
      grid-area: jobResponsibilityes;
    }
    ol {
      padding: 0 0 0 15px;
    }
  }
}
</style>
