<template>
  <div class="col-7" id="personalData">
    <div class="container">
      <div class="row">
        <div class="col-12" id="personalDataTitle">
          <h2>{{ allPersonalData.title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-2" id="personalDataPicture">
          <img src="../assets/rosenMihaylov.jpg" alt="your pic" />
        </div>
        <div class="col-10" id="personalDataInfo">
          <p>{{ allPersonalData.name.title }}</p>
          <h3>{{ allPersonalData.name.text }}</h3>
          <p>{{ allPersonalData.age.title }}</p>
          <h3>{{ allPersonalData.age.text }}</h3>
          <p>{{ allPersonalData.adress.title }}</p>
          <h3>{{ allPersonalData.adress.text }}</h3>
        </div>
      </div>
    </div>
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
  .container {
    width: calc(100% + 30px);
    .row {
      width: 100%;
      padding: 0 15px;
      margin-bottom: 0;
      #personalDataPicture {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      #personalDataInfo {
        display: grid;
        grid-template-columns: 1fr 3fr;
      }
    }
  }
  @media print {
    .container {
      width: calc(100% + 30px);
      .row {
        width: 100%;
        margin-bottom: 0;
        padding-right: 30px;
        #personalDataTitle h2 {
          width: calc(100%-30px);
        }
        #personalDataPicture {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        #personalDataInfo {
          display: grid;
          grid-template-columns: 1fr 5fr;
        }
      }
    }
  }
}
</style>
