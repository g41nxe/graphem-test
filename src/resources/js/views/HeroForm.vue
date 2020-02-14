<template>
    <div class="hero-form">

      <b-row class="justify-content-md-center">
        <b-col md="9" class="py-5">
          <Alert :message="message"></Alert>

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Super Hero Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter the name of  your super hero"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Side:" label-for="input-2">
              <b-form-select id="input-2" v-model="form.side" :options="sides" required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Hit Points" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.hit_points"
                type="number"
                required
                placeholder="Enter a number"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Attack" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="form.attack"
                type="number"
                required
                placeholder="Enter a number"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Special Ability" label-for="input-5">
              <b-form-input
                id="input-5"
                v-model="form.special_ability"
                type="text"
                required
                placeholder="Enter the name of your heros special ability"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card v-if="debug" class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>
<script>
import Alert from  '../components/Alert'

export default {
  name: "HeroForm",
  components: { Alert },
  props: [],
  data() {
    return {
      form: {
        name: "",
        side: null,
        attack: 5,
        hit_points: 10,
        special_ability: ""
      },
      sides: [{ text: "Select One", value: null }, "Dark", "Light"],
      show: true,
      debug: true,
      message: "",
    };
  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('createHero', this.form).then(() => {
        this.message = `Successfully created new hero ${this.form.name}`;
        
        this.$emit('reset')
      })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "",
      this.form.side = null,
      this.form.attack = 5,
      this.form.hit_points = 10,
      this.form.special_ability = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
</style>