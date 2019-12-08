<template>
  <div class="col-5">
    <div id="contactData">
      <h2 class="gridHeader">{{ allContactData.title }}</h2>
      <div class="titles">
        <p>{{ allContactData.phone.title }}</p>
        <p>{{ allContactData.email.title }}</p>
      </div>
      <div class="texts">
        <h3>{{ allContactData.phone.text }}</h3>
        <h3>{{ allContactData.email.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "contactData",
  computed: mapGetters(["allContactData"])
};
</script>

<style lang="scss">
#contactData {
  display: grid;
  grid-template-columns: 1.1fr 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  h3 {
    font-size: 1.2rem;
    align-content: end;
  }
  .gridHeader {
    grid-column: 1/5;
  }
  .titles {
    grid-column: 1/2;
  }
  .texts {
    grid-column: 2/5;
    align-items: end;
  }
}
</style>
