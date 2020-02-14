let mutations = {
    CREATE_PAGE(state, page) {
        state.pages.unshift(page);
    },

    UPDATE_PAGE(state, page) {
        let index = state.pages.findIndex(item => item.id === page.id);
        state.pages.splice(index, 1, page);
    },

    DELETE_PAGE(state, page) {
        let index = state.pages.findIndex(item => item.id === page.id);
        state.pages.splice(index, 1);
    },

    FETCH_PAGES(state, pages) {
        return state.pages = pages;
    },

}
export default mutations