let initialState = {turn: 'X', board: [' ',' ',' ',' ',' ',' ',' ',' ',' '], round: 0};

export default (state=initialState, action) => {
    let newState = Object.assign({},state);
    newState.board = state.board.slice();
    switch(action.type){
        case "ADD":
            newState.round += 1;
            newState.board[action.payload] = newState.turn;
            newState.turn = ((newState.turn ==='X')? 'O': 'X');
            return newState;
        default:
            return newState;
    }
}