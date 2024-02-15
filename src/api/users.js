import api from "./axios"

const resource = '/users'

export default {
    getUser({ username }) {
        return api.get(`${resource}/${username}`)
    },
}