
const gameState = {
    players: ['x', 'o'],
    current: 'x',

  }


function changePlayer () {
   
    if (gameState.current === 'x') {
        return gameState.current = 'o'
    } else {
        return gameState.current = 'x'
    }
    
}


function invalidClick () {
    if (gameState.current === 'x' && $('.cell').hasClass('doh')) {
        $('.cell').click(false)
    }
}



function checkWinner () {

    let playerX = gameState.players[0]
    let playerO = gameState.players[1]


    //checks for x winner
    if ( ($('#1').hasClass('xx') && $('#2').hasClass('xx') && $('#3').hasClass('xx')) ||
         ($('#4').hasClass('xx') && $('#5').hasClass('xx') && $('#6').hasClass('xx')) ||
         ($('#4').hasClass('xx') && $('#5').hasClass('xx') && $('#6').hasClass('xx')) ||
         ($('#7').hasClass('xx') && $('#8').hasClass('xx') && $('#9').hasClass('xx')) ||
         ($('#1').hasClass('xx') && $('#5').hasClass('xx') && $('#9').hasClass('xx')) ||
         ($('#3').hasClass('xx') && $('#5').hasClass('xx') && $('#7').hasClass('xx')) ||
         ($('#1').hasClass('xx') && $('#4').hasClass('xx') && $('#7').hasClass('xx')) ||
         ($('#2').hasClass('xx') && $('#5').hasClass('xx') && $('#8').hasClass('xx')) ||
         ($('#3').hasClass('xx') && $('#6').hasClass('xx') && $('#9').hasClass('xx')) ) {
        
            return $('.winMessage').html(`Player ${playerX} is the WINNER`);
           

    //checks for o winner
    } else if ( ($('#1').hasClass('doh') && $('#2').hasClass('doh') && $('#3').hasClass('doh')) ||
        ($('#4').hasClass('doh') && $('#5').hasClass('doh') && $('#6').hasClass('doh')) ||
        ($('#4').hasClass('doh') && $('#5').hasClass('doh') && $('#6').hasClass('doh')) ||
        ($('#7').hasClass('doh') && $('#8').hasClass('doh') && $('#9').hasClass('doh')) ||
        ($('#1').hasClass('doh') && $('#5').hasClass('doh') && $('#9').hasClass('doh')) ||
        ($('#3').hasClass('doh') && $('#5').hasClass('doh') && $('#7').hasClass('doh')) ||
        ($('#1').hasClass('doh') && $('#4').hasClass('doh') && $('#7').hasClass('doh')) ||
        ($('#2').hasClass('doh') && $('#5').hasClass('doh') && $('#8').hasClass('doh')) ||
        ($('#3').hasClass('doh') && $('#6').hasClass('doh') && $('#9').hasClass('doh')) ) {
   
            return $('.winMessage').html(`Player ${playerO} is the WINNER`);

}
}


$('.board').on('click', '.cell', function () {


    
    if ($(this).hasClass('empty')) {
        
        if (gameState.current === 'x') {
            $(this).addClass('xx').addClass('taken').removeClass('empty')
           
        } else if (gameState.current === 'o'){
            $(this).addClass('doh').addClass('taken').removeClass('empty')
            
        }
        changePlayer ()

    }
        checkWinner ()
        
        

})
