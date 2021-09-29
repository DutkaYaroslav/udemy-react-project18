import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counter";
import React from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ step: 6 })); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>decrement</button>

        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class based redux. no hooks avaliable

// class Counter extends React.Component {
//   decrementHandler() {
//     this.props.decrement();
//   }

//   incrementHandler() {
//     this.props.increment();
//   }
//   toggleCounterHandler() {
//     this.props.toogle();
//   }

//   render() {
//     return (
//       <>
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>{" "}
//           <div>
//             <button onClick={this.decrementHandler.bind(this)}>
//               decrement
//             </button>
//             <button onClick={this.incrementHandler.bind(this)}>
//               increment
//             </button>{" "}
//           </div>
//           <button onClick={this.toggleCounterHandler.bind(this)}>
//             Toggle Counter
//           </button>{" "}
//         </main>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     toogle: () => dispatch({ type: "toogle" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
