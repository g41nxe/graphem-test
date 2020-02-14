let actions = {

    addHeroToTeam({commit}, data) {
        commit('ADD_HERO_TO_TEAM', data)
    },
    
    removeHeroFromAnyTeam({commit}, hero) {
        commit('REMOVE_HERO_FROM_ANY_TEAM', hero)
    },

    createHero({commit}, hero) {
        axios.post('/api/myheroes/createhero', hero)
            .then(res => {
                commit('CREATE_HERO', res.data)
            }).catch(err => {
            console.log(err)
        })
    },

    fetchHeroes({commit}) {
        axios.get('/api/myheroes')
            .then(res => {
                commit('FETCH_HEROES', res.data)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions