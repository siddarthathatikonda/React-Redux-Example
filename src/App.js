import React from 'react'
import {connect} from 'react-redux';
import { Incaction } from './actions';
import { Decaction } from './actions';
const App = ({local_variable,Incaction,Decaction}) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1>
        <button onClick={()=>Incaction(5)}>Increment</button>
        <button onClick={Decaction}>Decrement</button>
      </center>
    </div>
  )
}
const mapStateToProps = state =>({
  local_variable : state 
})

export default connect(mapStateToProps,{Incaction,Decaction})(App)
