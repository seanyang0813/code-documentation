const state = {
    docs: [],
    queryId: 0,
}

const mutations = {
    'ADD_QUERY'(state, newQuery){
       state.docs.push(newQuery);
       console.log(newQuery)
       state.queryId ++;
    },
    'SET_STATE'(state, newState) {
        console.log(state)
        state.docs = newState.docs;
        state.queryId = newState.queryId;
        console.log(state);
    }
}

const actions = {
    addQuery({commit}, newQuery) {
        commit('ADD_QUERY', newQuery);
    },
    setState({commit}, newState) {
        commit('SET_STATE', newState);
    }
}

const getters = {
    docs (state) {
        return state.docs.map(doc=> doc);
        
    },
    queryId(state) {
        return state.queryId;
    },
    all(state) {
        return state
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}