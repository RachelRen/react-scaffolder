import {RECEIVE_POSTS} from '../actions/index'
const init = {
    value: 0
}

export default function counter(state = init, action) {
    switch (action.type) {
        case 'ADD':
            debugger;
            return Object.assign({}, state, {
                value: (state.value || 0)+ 1
            });
        case 'ADD_REMOVE':
            console.log("ADD_REMOVE");
            return Object.assign({}, state, {
                value: (state.value || 0)+ 10
            })

        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                data: action.data
            })

        default:
            return state
    }
}
