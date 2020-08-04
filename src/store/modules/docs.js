import firebase from "firebase";
const state = {
    docs: [],
    queryId: 0,
}

const mutations = {
    'ADD_QUERY'(state, newQuery){
       state.docs.push(newQuery);
       console.log(newQuery)
       state.queryId ++;
       var user = firebase.auth().currentUser;
       if (user) {
        let uid = user.uid
        firebase.database().ref('/users/' + uid.toString()).set(state);
       }  
    },
    'SET_STATE'(state, newState) {
        state.docs = newState.docs;
        state.queryId = newState.queryId;
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