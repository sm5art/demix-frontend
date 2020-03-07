import React, { Component } from 'react';

import { sleep, repeat } from '../utils/promise';
const DURATION = 100;
const IN_BETWEEN_DURATION = 1300;

class AnimatedText extends Component {
    state = {
        message: null
    }
    constructor(props, context) {
        super(props, context);
        this.deleteChar = this.deleteChar.bind(this);
        this.deleteString = this.deleteString.bind(this);
        this.typeString = this.typeString.bind(this);
        this.addChar = this.addChar.bind(this);
    }

    componentDidMount() {
        const { messages, loop } = this.props;
        this.setState({message: messages[0]});
        if(loop) {
            repeat(this.promiseLoopForever(messages), 500).then(()=>{})
        }
        else {
            this.promiseLoop(messages).then(()=>{});
        }
    }

    promiseLoop (messages) {
        return new Promise((res) => {
            let promise = Promise.resolve();
            for(let i = 0; i < messages.length-1 ; i++) {
                promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
                promise = promise.then(()=>this.deleteString(messages[i]));
                promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
                promise = promise.then(()=>this.typeString(messages[i+1]));
            }
            promise = promise.then(res);
        })
    }

    promiseLoopForever (messages) {
        return ()=>new Promise((res) => {
            let promise = Promise.resolve();
            for(let i = 0; i < messages.length-1 ; i++) {
                promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
                promise = promise.then(()=>this.deleteString(messages[i]));
                promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
                promise = promise.then(()=>this.typeString(messages[i+1]));
            }
            promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
            promise = promise.then(()=>this.deleteString(messages[messages.length-1]));
            promise = promise.then(()=>sleep(IN_BETWEEN_DURATION));
            promise = promise.then(()=>this.typeString(messages[0]));
            promise = promise.then(res);
        })
    }


    deleteString(stringPart) {
        return new Promise ((res)=> {
            repeat(this.deleteChar, stringPart.length).then(res)
        });
    }
    
    typeString(stringPart) {
        return new Promise ((res)=> {
            var promise = Promise.resolve();
            for(let i = 0; i < stringPart.length; i++) {
                promise = promise.then(()=>this.addChar(stringPart.substring(i, i+1)));
            }
            promise = promise.then(res);
        });
    }
    
    deleteChar() {
        return new Promise ((res) => {
            sleep(DURATION)
                .then(()=> {
                    this.setState({message: this.state.message.substring(0, this.state.message.length-1)})
                    res();
                });
        })
    }
    
    addChar (char) {
        return new Promise ((res) => {
            sleep(DURATION)
                .then(()=> {
                    this.setState({message: this.state.message+char})
                    res();
                });
        })
    }

    render() {
        return <span>{this.state.message}</span>;
    }
}

export default AnimatedText;