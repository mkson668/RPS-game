
var playerOneMoveOneType;
var playerOneMoveOneValue;
var playerOneMoveTwoType;
var playerOneMoveTwoValue;
var playerOneMoveThreeType;
var playerOneMoveThreeValue;

var playerTwoMoveOneType;
var playerTwoMoveOneValue;
var playerTwoMoveTwoType;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeType;
var playerTwoMoveThreeValue;

function setPlayerMoves (player, 
                        moveOneType, 
                        moveOneValue, 
                        moveTwoType, 
                        moveTwoValue, 
                        moveThreeType, 
                        moveThreeValue) {
                            if (!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {
                                return;
                            }
                            let oneSum = moveOneValue + moveTwoValue + moveThreeValue;
                            if (oneSum > 99 || oneSum < 1) {
                                return;
                            }
                            if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
                                return;
                            }
                            if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
                                return;
                            }
                            
                            if (player === 'Player One') {
                                playerOneMoveOneType = moveOneType;
                                playerOneMoveOneValue = moveOneValue;
                                playerOneMoveTwoType = moveTwoType;
                                playerOneMoveTwoValue = moveTwoValue;
                                playerOneMoveThreeType = moveThreeType;
                                playerOneMoveThreeValue = moveThreeValue;
                            } else if (player === 'Player Two'){
                                playerTwoMoveOneType = moveOneType;
                                playerTwoMoveOneValue = moveOneValue;
                                playerTwoMoveTwoType = moveTwoType;
                                playerTwoMoveTwoValue = moveTwoValue;
                                playerTwoMoveThreeType = moveThreeType;
                                playerTwoMoveThreeValue = moveThreeValue;
                            } else {
                                return null;
                            }
}

function isValidMoveType(move) {
    return move === 'rock' || move === 'scissors' || move === 'paper';
}

function isValidMoveValue(move) {
    return move >= 1 && move <= 99;
}

function getRoundWinner(round) {
    if (round === 1) {
        return getMoveWinner(playerOneMoveOneType, playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue);
    } else if (round === 2) {
        return getMoveWinner(playerOneMoveTwoType, playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue);
    } else if (round == 3) {
        return getMoveWinner(playerOneMoveThreeType, playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue);
    } else {
        return null;
    }
}

function getMoveWinner(p1MoveType, p2MoveType, p1MoveVal, p2MoveVal) {
    if (!p1MoveType || !p2MoveType || !p1MoveVal || !p2MoveVal) {
        return null;
    }
    if (p1MoveType === p2MoveType) {
        if (p1MoveVal > p2MoveVal) {
            return 'Player One';
        } else if (p1MoveVal < p2MoveVal) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    } else if (p1MoveType === 'scissors') {
        if (p2MoveType === 'rock') {
            return 'Player Two';
        } else {
            return 'Player One';
        }
    } else if (p1MoveType === 'paper') {
        if (p2MoveType === 'scissors') {
            return 'Player Two';
        } else {
            return 'Player One';
        }
    } else if (p1MoveType === 'rock') {
        if (p2MoveType === 'paper') {
            return 'Player Two';
        } else {
            return 'Player One';
        }
    }
}

function getGameWinner() {
    var one = 0;
    var two = 0;
    if (typeof playerOneMoveOneType === 'undefined' ||
                            typeof playerOneMoveOneValue === 'undefined' || 
                            typeof playerOneMoveTwoType === 'undefined' || 
                            typeof playerOneMoveTwoValue === 'undefined' || 
                            typeof playerOneMoveThreeType === 'undefined' || 
                            typeof playerOneMoveThreeValue === 'undefined' ||
                            typeof playerTwoMoveOneType === 'undefined' ||
                            typeof playerTwoMoveOneValue === 'undefined' ||
                            typeof playerTwoMoveTwoType === 'undefined' ||
                            typeof playerTwoMoveTwoValue === 'undefined' ||
                            typeof playerTwoMoveThreeType === 'undefined' ||
                            typeof playerTwoMoveThreeValue === 'undefined') {
                                return null;
                            }
    if(getRoundWinner(1) === 'Tie') {
        one++;
        two++;
    } else {
        if (getRoundWinner(1) === 'Player One') {
            one++;
        } else {
            two++;
        }
    }
    if(getRoundWinner(2) === 'Tie') {
        one++;
        two++;
    } else {
        if (getRoundWinner(2) === 'Player One') {
            one++;
        } else {
            two++;
        }
    }
    if(getRoundWinner(3) === 'Tie') {
        one++;
        two++;
    } else {
        if (getRoundWinner(3) === 'Player One') {
            one++;
        } else {
            two++;
        }
    }
    if (one > two) {
        return 'Player One';
    } else if (one < two) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}