import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import React from 'react';


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this);
        this.getTasks = this.getTasks.bind(this);
    }

    getMessages() {
        return this.props.messages.messages.map( (message, key) => {
            return <p key={key}>{message}</p>
        });
    }

    getTasks() {
        return this.props.tasks.tasks.map( (task, key) => {
            return <p key={key}>{task}</p>
        });
    }
    
    postMessage() {
        // not doing setState here, dispatching action
        var message = this.refs.messageInput.value;
        this.refs.messageInput.value = '';
        this.props.dispatch(actions.addMessage(message));
    }

    postTask() {
        // not doing setState here, dispatching action
        var task = this.refs.taskInput.value;
        this.refs.taskInput.value = '';
        this.props.dispatch(actions.addTask(task));
    }

    render() {
        return (
            <div className="container">
                <h1>Child</h1>
                <div>Messages: {this.getMessages()}</div>
                <div>Tasks: {this.getTasks()}</div>
                <input placeholder="message" ref="messageInput" type="text"/>
                <button onClick={() => {this.postMessage()}}>Post</button>
                <input placeholder="task" ref="taskInput" type="text"/>
                <button onClick={() => {this.postTask()}}>Post</button>
            </div>
        );
    }
}

/********************* Container Component ************/
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    tasks: state.tasks
  }
}

const containerChild = connect(mapStateToProps)(Child);

export default containerChild;
/*****************************************************/
