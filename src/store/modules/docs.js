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
        if (newState) {
            state.docs = newState.docs;
            state.queryId = newState.queryId;
        }
        
    },
    'EDIT'(state, bag) {
        let ret = bag.ret;
        let index = state.docs.findIndex(doc => doc.id == bag.id);
        console.log(index);
        if (index) {
            state.docs.splice(index, 1, ret);
        }
    }
}

const actions = {
    addQuery({commit}, newQuery) {
        commit('ADD_QUERY', newQuery);
    },
    setState({commit}, newState) {
        commit('SET_STATE', newState);
    },
    edit({commit}, bag) {
        commit('EDIT', bag);
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