const state = {
    docs: [],
    queryId: 0,
    filter: null,
}

const mutations = {
    'ADD_QUERY'(state, newQuery){
       state.docs.push(newQuery);
       console.log(newQuery)
       state.queryId ++;
    },
}

const actions = {
    addQuery({commit}, newQuery) {
        commit('ADD_QUERY', newQuery);
    }
}

const getters = {
    docs (state) {
        if (state.filter) {
            return state.docs.filter(doc=>{
                return state.filter(doc);
            })
        } else {
            return state.docs.map(doc=> doc);
        }
    },
    queryId(state) {
        return state.queryId;
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}