import {createStore} from 'redux'

const authState = {
    auth: {
        name:'Bertoli',
        ava:'https://reqres.in/img/faces/9-image.jpg'
    },
}

const authReducer = (state = authState) => {
    return state
}

const store = createStore(authReducer)

export default store