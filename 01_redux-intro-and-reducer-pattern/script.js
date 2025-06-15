// import { createStore } from 'redux'

// const initialState = {
//   post: 0,
//   name: 'Dageshwar das',
//   age: 26,
// }

// const INCREMENT = 'post/increment'
// const DECREMENT = 'post/decrement'
// const INCREASE_BY = 'post/increaseBy'
// const DECREASE_BY = 'post/decreaseBy'

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, post: state.post + 1 }
//     case DECREMENT:
//       return { ...state, post: state.post - 1 }
//     case INCREASE_BY:
//       return { ...state, post: state.post + action.payload }
//     case DECREASE_BY:
//       return { ...state, post: state.post - action.payload }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// console.log(store)

// store.subscribe(() => {
//   console.log(store.getState())
// })


// store.dispatch({ type: INCREMENT })
// store.dispatch({ type: DECREMENT })
// store.dispatch({ type: INCREASE_BY, payload: 15 })
// store.dispatch({ type: DECREASE_BY, payload: 5 })



let reduxState = {
  post: 0,
  name: 'dageshwar das',
  age: 26,
};

function reducer(state = reduxState, action) {
  if (action.type === 'post/increment') {
    return { ...state, post: state.post + 1 };
  } else if (action.type === 'post/decrement') {
    return { ...state, post: state.post - 1 };
  } else if (action.type === 'post/incrementBy') {
    return { ...state, post: state.post + action.payload };
  }

  return state;
}

// What Redux will Do //

console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/increment' });
console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/increment' });
console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/decrement' });
console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/incrementBy', payload: 10 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/incrementBy', payload: 20 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: 'post/incrementBy', payload: 10 });
console.log(reduxState);
