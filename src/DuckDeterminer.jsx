/*import React from "react";
import { DuckifyConsumer } from "./context";

class DuckDeterminer extends React.Component {
  render() {
    return (
      <DuckifyConsumer>
        {({ isADuck }) => (
          <div>
            <div>{isADuck ? "quack" : "...silence..."}</div>
          </div>
        )}
      </DuckifyConsumer>
    );
  }
}

export default DuckDeterminer;*/

/*******************************************/

import React from "react";
import { DuckifyConsumer } from "./context";

class DuckDeterminer extends React.Component{
    render() {
      return (
        <DuckifyConsumer>
            {({isADuck, dispatch})=> {
                return(
                    <div>
                        <div>{isADuck ? "🦆 quack" : "...silence..."}</div>
                        <button onClick={e=> dispatch({type:"TOGGLE"})}>Change!</button>
                        
                    </div>
                );
            }}
        </DuckifyConsumer>
      )
    }
}

export default DuckDeterminer;