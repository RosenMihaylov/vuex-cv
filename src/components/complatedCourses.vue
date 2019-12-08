<template>
  <div id="completedCourses">
    <h2>
      {{ allCompletedCourses.title }}
    </h2>
    <ul>
      <li
        v-for="(course, cc) in allCompletedCourses.courses"
        :key="cc"
        class="box"
      >
        <h3>
          {{ course.course }}
        </h3>
        <p>
          {{ course.school }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "completedCourses",
  computed: mapGetters(["allCompletedCourses"])
};
</script>

<style lang="scss">
#completedCourses {
  width: 100%;
}
</style>
