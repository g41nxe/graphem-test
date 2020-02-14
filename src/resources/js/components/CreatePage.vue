<template>
  <b-row class="justify-content-md-center">
    <b-col md="9" class="py-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-2" label="Title:" label-for="input-2">
          <b-form-input 
          id="input-2" 
          v-model="form.title" 
          required 
          placeholder="Enter Title"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Hero Image:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.hero_img"
            required
            placeholder="Enter Hero Image URL"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Lead Text:" label-for="input-2">
          <b-form-input 
          id="input-2" 
          v-model="form.lead" 
          required
          placeholder="Enter Lead Text"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Lead Image:" label-for="input-2">
          <b-form-input 
          id="input-2" 
          v-model="form.lead_img" 
          requierd
          placeholder="Enter Lead Image URL"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: [ "page" ],
  data() {
    return {
      form: {
        id: this.page.id,
        title: this.page.title,
        hero_img: this.page.hero_img,
        lead: this.page.content.lead,
        lead_img: this.page.content.lead_img,
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('updatePage', this.form)
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.hero_img = "";
      this.form.lead = "";
      this.form.lead_img = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>