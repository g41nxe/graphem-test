let actions = {

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