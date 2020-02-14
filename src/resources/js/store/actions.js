let actions = {

    updatePage({commit}, page) {
        axios.put(`/api/pages/${page.id}`, page)
            .then(res => {
                commit('UPDATE_PAGE', res.data)
            }).catch(err => {
            console.log(err)
        })
    },

    createPage({commit}, page) {
        axios.post('/api/pages', page)
            .then(res => {
                commit('CREATE_PAGE', res.data)
            }).catch(err => {
            console.log(err)
        })
    },

    deletePage({commit}, page) {
        axios.delete(`/api/pages/${page.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_PAGE', page)
            }).catch(err => {
            console.log(err)
        })
    },

    fetchPages({commit}) {
        axios.get('/api/pages')
            .then(res => {
                commit('FETCH_PAGES', res.data)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions