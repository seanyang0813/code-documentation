import firebase from "firebase";
const state = {
    docs: [],
    queryId: 0,
    code: '',
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
            if (newState.docs) {
                state.docs = newState.docs;
            }
            state.queryId = newState.queryId;
            state.code = newState.code;
        }
        
    },
    'EDIT'(state, bag) {
        let ret = bag.ret;
        let index = state.docs.findIndex(doc => doc.id == bag.id);
        if (index) {
            state.docs.splice(index, 1, ret);
            var user = firebase.auth().currentUser;
            if (user) {
                let uid = user.uid
                firebase.database().ref('/users/' + uid.toString()).set(state);
            }  
        }
    },
    'REMOVE'(state, id) {
        let index = state.docs.findIndex(doc => doc.id == id);
        console.log(index);
        if (index || index === 0) {
            state.docs.splice(index, 1);
            console.log(state.docs);
            var user = firebase.auth().currentUser;
            if (user) {
                let uid = user.uid
                firebase.database().ref('/users/' + uid.toString()).set(state);
            }  
        }
    },
    'EDITOR'(state, code) {
        state.code = code;
        console.log('editor updated')
        var user = firebase.auth().currentUser;
        if (user) {
            let uid = user.uid
            firebase.database().ref('/users/' + uid.toString() + '/code').set(state.code);
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
    },
    remove({commit}, id) {
        commit('REMOVE', id);
    },
    editor({commit}, code) {
        commit('EDITOR', code);
    }
}

const getters = {
    docs (state) {
        if (state.docs) {
            return state.docs.map(doc=> doc);
        }
    },
    queryId(state) {
        return state.queryId;
    },
    all(state) {
        return state
    },
    code(state) {
        return state.code
    }
}

export default {
    state,
    mutations,
    actions,
    getters

}