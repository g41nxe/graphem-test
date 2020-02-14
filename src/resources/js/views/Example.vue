<template>
  <div class="page">
    <div v-if="page">
      <b-row class="text-light fullsize-bg" 
        :style="`backgroundImage: url('${page.hero_img}')`">
        <b-col class="justify-content-center align-self-center"> 
          <h1 class="text-center">{{page.title}}</h1>
        </b-col>
      </b-row>
      <b-row class="bg-dark text-light mt-2">
        <b-col md="6" sm="12" class="justify-content-center align-self-center">
          <h4 class="tex-center">{{page.content.lead}}</h4>
        </b-col>
        <b-col md="6" sm="12" class="p-0">
          <b-img fluid alt="Responsive Image"
            :src="page.content.lead_img" ></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <CreatePage :page="page"></CreatePage>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="py-5">
          <b-nav small>
            <b-nav-item>Link 1</b-nav-item>
            <b-nav-item>Link 2</b-nav-item>
            <b-nav-item>Link 3</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </div>
    <div class="spinner" v-else>
      <b-spinner type="grow" label="Spinning"></b-spinner>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import CreatePage from '../components/CreatePage'

export default {
  name: "Example",
  components: { CreatePage },
  props: ["id"],
  mounted() {
    this.$store.dispatch("fetchPages");
  },
  computed: {
    ...mapGetters(["pages"]),
    page() {
      if (this.pages && this.pages[this.id])
        return this.pages[this.id]
      else 
        return null
    }
  }
};
</script>

<style scoped>
  .spinner {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .fullsize-bg {
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 500px;
  }  

  .row {
    margin: 0;
  }

</style>