// let reduxState = {
//   post: 0,
//   name: 'dageshwar das',
//   age: 26,
// };
// function reducer(state = reduxState, action) {
//   if (action.type === 'post/increment') {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === 'post/decrement') {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === 'post/incrementBy') {
//     return { ...state, post: state.post + action.payload };
//   }
//   else if (action.type === 'post/incrementBy') {
//     return { ...state, post: state.post + action.payload };
//   } else if (action.type === 'age/incrementBy') {
//     return { ...state, age: state.age + action.payload };
//   } else if (action.type === 'age/decrementBy') {
//     return { ...state, age: state.age - action.payload };
//   }
//   return state;
// }
// // What Redux will Do //
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'post/increment' });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'post/increment' });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'post/decrement' });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'post/incrementBy', payload: 10 });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'age/incrementBy', payload: 20 });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'age/decrementBy', payload: 5 });
// console.log(reduxState);
const { createStore } = window.Redux;
const initialState = {
    post: 0,
    name: 'Dageshwar Das',
    age: 26
};
const INCREMENT = 'post/increment';
const DECREMENT = 'post/decrement';
const INCREASE_BY = 'post/increaseBy';
const DECREASE_BY = 'post/decreaseBy';
function reducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                post: state.post + 1
            };
        case DECREMENT:
            return {
                ...state,
                post: state.post - 1
            };
        case INCREASE_BY:
            return {
                ...state,
                post: state.post + action.payload
            };
        case DECREASE_BY:
            return {
                ...state,
                post: state.post - action.payload
            };
        default:
            return state;
    }
}
// Setup Redux DevTools extension
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>{
    console.log('State:', store.getState());
});
// Dispatch sample actions
store.dispatch({
    type: INCREMENT
});
store.dispatch({
    type: DECREMENT
});
store.dispatch({
    type: INCREASE_BY,
    payload: 15
});
store.dispatch({
    type: DECREASE_BY,
    payload: 5
});

//# sourceMappingURL=01_redux-intro-and-reducer-pattern.672d4772.js.map
