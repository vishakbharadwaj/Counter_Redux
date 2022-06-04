import React from "react";
// import { ReactReduxContext } from "react-redux";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "react-dom";
import Counter from "./Counter";

const initialState = {
  count: 0
};

// function reducer(state, action) {
//   return {
//     count: 1
//   };
// }

// {type: "INCREMENT"}
// {type: "DECREMENT"}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}
// if(action.type == "INCREMENT"){
//   return{
//     count: state.count+1
//   }
// }
//   return state;
// }

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
// export default function App() {

// }
