let mutations = {
    CREATE_HERO(state, hero) {
        state.heroes.unshift(hero);
    },

    FETCH_HEROES(state, heroes) {
        return state.heroes = heroes;
    },

}
export default mutations