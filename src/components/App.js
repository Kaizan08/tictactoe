import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {add} from '../actions/action';

let checkWin = (board) => {
    let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
    for (var i=0;i<winningCombinations.length; i++){
      if (board[winningCombinations[i][0]] === board[winningCombinations[i][1]] && board[winningCombinations[i][2]] === board[winningCombinations[i][1]] && board[winningCombinations[i][0]] !== ' '){
        console.log(board[i]);
        alert("Player "+board[winningCombinations[i][0]]+ " has won!");
      } 
    }
    return false;
  }


class App extends Component {

  componentDidUpdate(){
  let val = checkWin(this.props.board);
  if (this.props.round === 9 && val === false){
    alert('You have ended this match in a draw!');
  } 
}

  render() {
  let checkValue = (index) =>{
  let array = this.props.board;
  if (array[index.index] !== " "){
    alert('You already pressed this button!');
  } else {
    this.props.add(index.index);
  }
  }
    let output = this.props.board.map((value,index)=>(
      <div key={index}><button className="button" onClick={() => checkValue({index})} >{value}</button></div>
    ))
    return (
      <div className="App">
        <div className="board">
          {output}
        </div>
      </div>
    );
  }
  
}

let mapStateToProps = (state, ownProps) => ({
  board: state.board.board,
  round: state.board.round
})
let mapDispatchToProps = () => ({
  add
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

