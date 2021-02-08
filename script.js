const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // Start the game function
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // Generate Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach( option => {
            option.addEventListener('click', function() {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
            });
        });
        
        
    };

    // Calling all the inner function
    startGame();
    playMatch();
};

// Calling the main function
game();