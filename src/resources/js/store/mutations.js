let mutations = {
    CREATE_HERO(state, hero) {
        state.heroes.unshift(hero);
    },

    FETCH_HEROES(state, heroes) {
        return state.heroes = heroes;
    },

    ADD_HERO_TO_TEAM(state, data) {
        state.teams[data.team].push(data.hero);
        Vue.set(state, 'teams', state.teams);
    },

    REMOVE_HERO_FROM_ANY_TEAM(state, hero) {
        let index = state.teams['Dark'].findIndex(item => item.id == hero.id)
        state.teams['Dark'].splice(index, 1)

        index = state.teams['Light'].findIndex(item => item.id == hero.id)
        state.teams['Light'].splice(index, 1)

        Vue.set(state, 'teams', state.teams);
    }
}
export default mutations