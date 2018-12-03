import Child from './Child';
import { connect } from 'react-redux';
import Counter from './Counter';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this);
    }
    
    getMessages() {
        return this.props.messages.messages.map((message, key) => {
            return <p key={key}>{message}</p>
        });
    }
    
    postMessage() {
        // not doing setState here, dispatching action
        var message = this.refs.messageInput.value;
        this.refs.messageInput.value = '';
        this.props.dispatch({
            type: 'ADD_MESSAGE',
            payload: message,
          });
    }

    render() {
        return (
          <div className="container"> 
            <h1>Parent</h1>
            <div>Messages: {this.getMessages()}</div>
            <input placeholder="message" ref="messageInput" type="text"/>
            <button onClick={() => {this.postMessage()}}>Post</button>
            <Child />
            <Counter />
          </div>
        );
    }
}


/********************* Container Component ************/
const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const containerHome = connect(mapStateToProps)(Home);

export default containerHome;
/*****************************************************/