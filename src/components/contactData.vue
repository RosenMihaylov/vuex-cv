<template>
  <div class="col-5" id="contactData">
    <div class="container">
      <div class="row">
        <div class="col-12" id="contactDataTitle">
          <h2>{{ allContactData.title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12" id="contactDataInfo">
          <p>{{ allContactData.phone.title }}</p>
          <p class="bold">{{ allContactData.phone.text }}</p>
          <p>{{ allContactData.email.title }}</p>
          <p class="bold">{{ allContactData.email.text }}</p>
        </div>
      </div>

      <div></div>
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
  width: calc(100% + 30px);
  .row {
    width: calc(100% + 15px);
    margin-bottom: 0;
    padding: 0 0 0 15px;
    h2 {
      width: 100%;
    }
    #contactDataInfo {
      display: grid;
      grid-template-columns: 1fr 5fr;
      grid-column-gap: 5px;
    }
    @media print {
      #contactDataInfo {
        grid-template-columns: 1fr 10fr;
      }
    }
  }
}
</style>
