import api from "./axios"

const resource = '/users'

const UserRepository = {
    getUser({ username, password }) {
        return api.get(`${resource}?username=${username}&password=${password}`)
    },
}

export default UserRepository