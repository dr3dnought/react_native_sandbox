export const createStore = (rootReducer, initialState) => {
    let currentReducer = rootReducer;
    let currentState = initialState;
    let listener = () => {};

    return {
        getState() {
            return currentState;
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener();
        },
        subscribe(newListener) {
            listener = newListener;
        }
    }
};

/**
 {
    type: 'INCREMENT',
    payload: 1
 }
 {
    type: 'SignIn'
    payload: {
        password: '55Bob55',
        login: 'Bobik',
        email: 'string'
    }
 }
 */

export function counterReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'NULL':
            return  0;
        case 'PLUS':
            return state + action.payload;
        case 'MINUS':
            return state - action.payload;
        default:
            return state;
    }
}
