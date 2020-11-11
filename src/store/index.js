import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [
            {
                id: "79856436548",
                name: "Jon",
                surname: "Doe",
                phone: "213213",
            },
            {
                id: "181604878881235",
                name: "Ala",
                surname: "Fortanfoni",
                phone: "561641"
            }
        ]
    },
    mutations: {
        SET_CONTACTS(state, payload) {
            state.contacts.push(payload)
        },
        UPDATE_CONTACT(state, payload) {
            const index = state.contacts.findIndex(e => e.id == payload.id)
            payload.isUpdate ? state.contacts.splice(index, 1, payload) : state.contacts.splice(index, 1)
        },
    },
    actions: {
        add({ commit }, payload) {
            commit('SET_CONTACTS', payload)
        },
        update({ commit }, payload) {
            commit('UPDATE_CONTACT', payload)
        },
        deleteItem({ commit, state }, id) {
            const payload = state.contacts.find(e => e.id == id)
            commit('UPDATE_CONTACT', payload)
        }
    },
    modules: {
    }
})
