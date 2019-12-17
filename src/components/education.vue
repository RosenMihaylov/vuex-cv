<template>
  <div id="education">
    <h2 class="title">{{ allEducations.title }}</h2>
    <ul class="education">
      <li
        v-for="(education, e) in allEducations.educationData"
        :key="e"
        class="box"
      >
        <h3 class="educationSpeciality">
          {{ education.speciality }}
        </h3>
        <h3 class="educationYears">
          {{ education.years }}
        </h3>
        <p class="educationDegree">
          {{ education.degree }}
        </p>
        <p class="mainCoursesTitle">
          {{ allEducations.mainCoursesTitle }}
        </p>
        <p class="school">
          {{ education.university }}
        </p>
        <p class="city">
          {{ education.city }}
        </p>
        <ol class="mainCourses">
          <li v-for="(course, c) in education.mainCourses" :key="c">
            {{ course }}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Education",
  computed: mapGetters(["allEducations"])
};
</script>

<style lang="scss">
#education {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "education";
  .title {
    grid-area: header;
  }
  .education {
    grid-area: education;

    .box {
      display: grid;
      padding: 2px;
      grid-template-columns: 45% 55%;
      grid-column-gap: 5px;
      grid-template-areas:
        "speciality years"
        "degree mainCoursesTitle"
        "school mainCourses"
        "city mainCourses"
        ". mainCourses";
      .educationSpeciality {
        grid-area: speciality;
      }
      .educationYears {
        grid-area: years;
      }
      .educationDegree {
        grid-area: degree;
      }
      .mainCoursesTitle {
        grid-area: mainCoursesTitle;
      }
      .school {
        grid-area: school;
      }
      .mainCourses {
        grid-area: mainCourses;
      }
      .city {
        grid-area: city;
      }
    }
  }
}
</style>
