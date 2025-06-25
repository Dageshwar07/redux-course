import { createStore } from 'redux'
import { myCreateStore } from './my-redux.js'
// const postCountElement = document.querySelector('.post-count')
// const ageCountElement = document.querySelector('.age-count')
// const nameCountElement = document.querySelector('.name-count')

const initialState = {
  post: 0,
  name: 'Dageshwar das',
  age: 26,
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/increaseBy'
const DECREASE_BY = 'post/decreaseBy'

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 }
    case DECREMENT:
      return { ...state, post: state.post - 1 }
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload }
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload }
    default:
      return state
  }
}

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
const myStore = myCreateStore(reducer)

// console.log(store)
console.log(myStore.getState())

const unsubscribe1 = myStore.subscribe(() => {
  console.log(myStore.getState())
  // postCountElement.innerText = myStore.getState().post
})


// postCountElement.innerText = myStore.getState().post
// ageCountElement.innerText = myStore.getState().age
// nameCountElement.innerText = myStore.getState().name

myStore.dispatch({ type: INCREMENT })
myStore.dispatch({ type: DECREMENT })
myStore.dispatch({ type: INCREASE_BY, payload: 15 })
myStore.dispatch({ type: DECREASE_BY, payload: 5 })
unsubscribe1()
// postCountElement.addEventListener('click', () => {
//   myStore.dispatch({ type: INCREMENT })
// })
