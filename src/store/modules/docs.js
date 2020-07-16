const state = {
    docs: [{
        queryList: [{text:'sean', mutability:false}, {text:'yang', mutability:true}],
        description: 'this is something cool',
        id: 0,
    },
    {
        queryList: [{text:'sean2'}, {text:'yang2'}],
        description: 'this is something cool2',
        id: 1,
    }],
    queryId: 0,
    filter: null,
}

const mutations = {
    'ADD_QUERY'(state, {newQuery}){
       state.push(newQuery);
    },
}

const actions = {
    addQuery({commit}, newQuery) {
        commit('SELL_STOCK', newQuery);
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