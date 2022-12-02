const square1 = document.querySelector('#square1');
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');
const square4 = document.querySelector('#square4');
const square5 = document.querySelector('#square5');
const square6 = document.querySelector('#square6');
const square7 = document.querySelector('#square7');
const square8 = document.querySelector('#square8');
const square9 = document.querySelector('#square9');

const insidesquare1 = document.querySelector('#insidesquare1');
const insidesquare2 = document.querySelector('#insidesquare2');
const insidesquare3 = document.querySelector('#insidesquare3');
const insidesquare4 = document.querySelector('#insidesquare4');
const insidesquare5 = document.querySelector('#insidesquare5');
const insidesquare6 = document.querySelector('#insidesquare6');
const insidesquare7 = document.querySelector('#insidesquare7');
const insidesquare8 = document.querySelector('#insidesquare8');
const insidesquare9 = document.querySelector('#insidesquare9');

const whoWon = document.querySelector('#whoWon');
const whoWonMessage = document.querySelector('#whoWonMessage');

let player1turn = true;

function checkPlayerWinOrTie(l) {
    if ((insidesquare1.innerText === l && insidesquare2.innerText === l && insidesquare3.innerText === l) || (insidesquare4.innerText === l && insidesquare5.innerText === l && insidesquare6.innerText === l) || (insidesquare7.innerText === l && insidesquare8.innerText === l && insidesquare9.innerText === l) || (insidesquare1.innerText === l && insidesquare4.innerText === l && insidesquare7.innerText === l) || (insidesquare2.innerText === l && insidesquare5.innerText === l && insidesquare8.innerText === l) || (insidesquare3.innerText === l && insidesquare6.innerText === l && insidesquare9.innerText === l) || (insidesquare1.innerText === l && insidesquare5.innerText === l && insidesquare9.innerText === l) || (insidesquare3.innerText === l && insidesquare5.innerText === l && insidesquare7.innerText === l)) {
        square1.removeEventListener('click', clicksquare1)
        square2.removeEventListener('click', clicksquare2)
        square3.removeEventListener('click', clicksquare3)
        square4.removeEventListener('click', clicksquare4)
        square5.removeEventListener('click', clicksquare5)
        square6.removeEventListener('click', clicksquare6)
        square7.removeEventListener('click', clicksquare7)
        square8.removeEventListener('click', clicksquare8)
        square9.removeEventListener('click', clicksquare9)

        whoWon.innerText = l + ' Wins!'
    }

    if (insidesquare1.innerText === l && insidesquare2.innerText === l && insidesquare3.innerText === l) {
        square1.style.backgroundColor = 'red'
        square2.style.backgroundColor = 'red';
        square3.style.backgroundColor = 'red';
    }

    if (insidesquare4.innerText === l && insidesquare5.innerText === l && insidesquare6.innerText === l) {
        square4.style.backgroundColor = 'red';
        square5.style.backgroundColor = 'red';
        square6.style.backgroundColor = 'red';
    }

    if (insidesquare7.innerText === l && insidesquare8.innerText === l && insidesquare9.innerText === l) {
        square7.style.backgroundColor = 'red';
        square8.style.backgroundColor = 'red';
        square9.style.backgroundColor = 'red';
    }

    if (insidesquare1.innerText === l && insidesquare4.innerText === l && insidesquare7.innerText === l) {
        square1.style.backgroundColor = 'red';
        square4.style.backgroundColor = 'red';
        square7.style.backgroundColor = 'red';
    }

    if (insidesquare2.innerText === l && insidesquare5.innerText === l && insidesquare8.innerText === l) {
        square2.style.backgroundColor = 'red';
        square5.style.backgroundColor = 'red';
        square8.style.backgroundColor = 'red';
    }

    if (insidesquare3.innerText === l && insidesquare6.innerText === l && insidesquare9.innerText === l) {
        square3.style.backgroundColor = 'red';
        square6.style.backgroundColor = 'red';
        square9.style.backgroundColor = 'red';
    }

    if (insidesquare1.innerText === l && insidesquare5.innerText === l && insidesquare9.innerText === l) {
        square1.style.backgroundColor = 'red';
        square5.style.backgroundColor = 'red';
        square9.style.backgroundColor = 'red';
    }

    if (insidesquare3.innerText === l && insidesquare5.innerText === l && insidesquare7.innerText === l) {
        square3.style.backgroundColor = 'red';
        square5.style.backgroundColor = 'red';
        square7.style.backgroundColor = 'red';
    }

    else if (insidesquare1.innerText !== '' && insidesquare2.innerText !== '' && insidesquare3.innerText !== '' && insidesquare4.innerText !== '' && insidesquare5.innerText !== '' && insidesquare6.innerText !== '' && insidesquare7.innerText !== '' && insidesquare8.innerText !== '' && insidesquare9.innerText !== '') {
        whoWon.innerText = 'It Is A Tie!'
        whoWonMessage.classlist.add('whoWonMessage')
    }

}

square1.addEventListener('click', clicksquare1)

function clicksquare1() {
    if (player1turn) {
        insidesquare1.innerText = 'O'
        player1turn = false;
        square1.removeEventListener('click', clicksquare1)
    }

    else if (!player1turn) {
        insidesquare1.innerText = 'X'
        player1turn = true;
        square1.removeEventListener('click', clicksquare1)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square2.addEventListener('click', clicksquare2)

function clicksquare2() {
    if (player1turn) {
        insidesquare2.innerText = 'O'
        player1turn = false;
        square2.removeEventListener('click', clicksquare2)
    }

    else if (!player1turn) {
        insidesquare2.innerText = 'X'
        player1turn = true;
        square2.removeEventListener('click', clicksquare2)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square3.addEventListener('click', clicksquare3)

function clicksquare3() {
    if (player1turn) {
        insidesquare3.innerText = 'O'
        player1turn = false;
        square3.removeEventListener('click', clicksquare3)
    }

    else if (!player1turn) {
        insidesquare3.innerText = 'X'
        player1turn = true;
        square3.removeEventListener('click', clicksquare3)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square4.addEventListener('click', clicksquare4)

function clicksquare4() {
    if (player1turn) {
        insidesquare4.innerText = 'O'
        player1turn = false;
        square4.removeEventListener('click', clicksquare4)
    }

    else if (!player1turn) {
        insidesquare4.innerText = 'X'
        player1turn = true;
        square4.removeEventListener('click', clicksquare4)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square5.addEventListener('click', clicksquare5)

function clicksquare5() {
    if (player1turn) {
        insidesquare5.innerText = 'O'
        player1turn = false;
        square5.removeEventListener('click', clicksquare5)
    }

    else if (!player1turn) {
        insidesquare5.innerText = 'X'
        player1turn = true;
        square5.removeEventListener('click', clicksquare5)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square6.addEventListener('click', clicksquare6)

function clicksquare6() {
    if (player1turn) {
        insidesquare6.innerText = 'O'
        player1turn = false;
        square6.removeEventListener('click', clicksquare6)
    }

    else if (!player1turn) {
        insidesquare6.innerText = 'X'
        player1turn = true;
        square6.removeEventListener('click', clicksquare6)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square7.addEventListener('click', clicksquare7)

function clicksquare7() {
    if (player1turn) {
        insidesquare7.innerText = 'O'
        player1turn = false;
        square7.removeEventListener('click', clicksquare7)
    }

    else if (!player1turn) {
        insidesquare7.innerText = 'X'
        player1turn = true;
        square7.removeEventListener('click', clicksquare7)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square8.addEventListener('click', clicksquare8)

function clicksquare8() {
    if (player1turn) {
        insidesquare8.innerText = 'O'
        player1turn = false;
        square8.removeEventListener('click', clicksquare8)
    }

    else if (!player1turn) {
        insidesquare8.innerText = 'X'
        player1turn = true;
        square8.removeEventListener('click', clicksquare8)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}

square9.addEventListener('click', clicksquare9)

function clicksquare9() {
    if (player1turn) {
        insidesquare9.innerText = 'O'
        player1turn = false;
        square9.removeEventListener('click', clicksquare9)
    }

    else if (!player1turn) {
        insidesquare9.innerText = 'X'
        player1turn = true;
        square9.removeEventListener('click', clicksquare9)
    }
    checkPlayerWinOrTie('O')
    checkPlayerWinOrTie('X')
}