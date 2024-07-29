/*import React, { Component } from 'react'

const context = React.createContext();

export class DuckifyProvider extends React.Component {

    state = {isDuck: false};
  render() {

    const{children} = this.props;
    return (
      <Context.Provider value={this.state}>
       {children}
      </Context.Provider>
    )
  }
}

const DuckifyConsumer = Context.Consumer;

export default DuckifyConsumer = Context.Consumer;*/

/****************************************************/

import React from "react";

const Context = React.createContext();

const reducer = (state,action) => {
    if(action.type === "TOGGLE"){
        return{...state,isADuck: !state.isADuck};
}
};

export class DuckifyProvider extends React.Component{
    state={
        isADuck:false,
        dispatch:action => {
            this.setState(state => reducer(state,action));
        }
    };
    render(){
        return (
        <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
        );
    }
}

export const DuckifyConsumer = Context.Consumer;


