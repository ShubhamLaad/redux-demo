import React from 'react';
import {connect} from 'react-redux';
import ACTION_CONST from '../constants/actions';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {this.props.add({type: ACTION_CONST.ADD})}}>+</button>
        <button onClick={() => {this.props.sub({type: ACTION_CONST.SUB})}}>-</button>
        <button onClick={() => {this.props.add({type: 'MULT', payload: 4})}}>*</button>
        <button onClick={() => {this.props.sub({type: 'DIV', payload: 2})}}>/</button>
        <p>{this.props.counter}</p>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.counterReducer.counter,
  }
};

const dispatchToProps = (dispatch) => ({
  add: (data) => {dispatch(data)},
  sub: (data) => {dispatch(data)},
  mult: (data) => {dispatch(data)},
  div: (data) => {dispatch(data)},
});

export default connect(mapStateToProps, dispatchToProps)(Counter);
