import { combineReducers } from 'redux';
import ACTION_CONST from '../constants/actions';

const messageReducer = (state = {messages: []}, action = null) => {

  switch(action.type) {
    case 'ADD_MESSAGE':
      const messages = [...state.messages];
      messages.push(action.payload);
      return Object.assign({}, state, {
        messages
      });
    default:
      return state;
  }
};

const taskReducer = (state = {tasks: []}, action = null) => {
  const { type, payload} = action;

  switch(type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        tasks: [...state.tasks, payload]
      });
    default:
      return state;
  }
};


const counterReducer = (prevStore = { counter : 0 }, action) => {
  switch(action.type) {
    case ACTION_CONST.ADD:
    return Object.assign({}, prevStore, {counter : prevStore.counter + 1});
    case ACTION_CONST.SUB:
    return Object.assign({}, prevStore, {counter: prevStore.counter - 1});
    case 'MULT':
    return Object.assign({}, prevStore, {counter: prevStore.counter * action.payload});
    case 'DIV':
    return Object.assign({}, prevStore, {counter: prevStore.counter / action.payload});    
    default:
    return prevStore;
  }
};

const reducers = combineReducers({
  messages: messageReducer,
  tasks: taskReducer,
  counterReducer: counterReducer,
});

export default reducers;
