<template>
  <div>
    <div v-if="heroes.length > 0 > 0" class="create-team">
      <b-row>
        <b-col>
          <h1>My Team</h1>
           <b-row>
            <b-col md="6" class="my-4" v-for="(value, team) in teams" :key="team">
              <b-card :title="team">
               <b-list-group>
                  <b-list-group-item v-for="hero in value" :key="hero.id">
                    {{ hero.name }} 
                    <b-button class="float-right" @click="removeFromAnyTeam(hero)">
                        Remove
                    </b-button>
                  </b-list-group-item>
               </b-list-group>
               </b-card>
            </b-col>
           </b-row>
          <div></div>
        </b-col>
        <b-col>
          <h1>All Heroes</h1>
          <b-row>
            <b-col md="6" class="my-4" v-for="hero in heroes" :key="hero.id">
              <b-card :title="hero.name">
                <b-list-group>
                  <b-list-group-item>Attack: {{hero.attack}}</b-list-group-item>
                  <b-list-group-item>Hit Points: {{hero.hit_points}}</b-list-group-item>
                  <b-list-group-item>Side: {{hero.side}}</b-list-group-item>
                  <b-list-group-item>Special Ability: {{hero.special_ability}}</b-list-group-item>
                </b-list-group>

                <b-dropdown class="mt-3" id="dropdown-team" text="Select Team" variant="light">
                  <b-dropdown-item v-for="(value, team) in teams" :key="team" @click="addToTeam(team, hero)">
                      {{team}}
                  </b-dropdown-item>
                  
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="removeFromAnyTeam(hero)">Remove</b-dropdown-item-button>
                </b-dropdown>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-spinner v-else></b-spinner>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CreateTeam",
  mounted() {
    this.$store.dispatch("fetchHeroes")
  },
  computed: {
    ...mapGetters(["heroes", "teams"])
  }, 
  methods: {
      removeFromAnyTeam(h) {
          this.$store.dispatch('removeHeroFromAnyTeam', h);
      },
      addToTeam(t, h){
          this.$store.dispatch('addHeroToTeam', {team: t, hero: h});
      }
  }
};
</script>
<style scoped>
</style>