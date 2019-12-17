<template>
  <div id="workExpirience">
    <h2>{{ allWorkExpirience.title }}</h2>
    <ul>
      <li v-for="expirience in allWorkExpirience.jobs" :key="expirience.id">
        <div class="box">
          <div class="jobTitle">
            <h3 class="jobTitle">{{ expirience.title }}</h3>
          </div>
          <div
            class="module box"
            v-for="(module, m) in expirience.modules"
            :key="m"
          >
            <p class="bold company">{{ module.company }}</p>
            <p class="bold yearsWorked">{{ module.years }}</p>
            <p class="section">{{ module.section }}</p>
            <p class="city">{{ module.city }}</p>
            <p class="mainResponsibilitiesTitie">
              {{ module.mainResponsibilitiesTitle }}
            </p>
            <ol class="mainResponsibilities">
              <li
                v-for="(responsibility, r) in module.mainResponsibilities"
                :key="r"
              >
                {{ responsibility }}
              </li>
            </ol>
          </div>
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
  .jobTitle {
    width: 100%;
  }
  .bold {
    font-weight: 600;
  }
  .box {
    margin-bottom: 35px;

    .module.box {
      display: grid;
      padding: 2px;
      grid-template-columns: 45% 55%;
      grid-column-gap: 5px;
      width: 100%;
      margin-bottom: 0;
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
}
</style>
