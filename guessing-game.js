function guessingGame(guess) {

    return function get(){

        let random = Math.floor(Math.random()*100)
        if(guess === random) return 'CONGRATS YOU GUESSED IT '
        if(guess > random){
            return `too high ...your guess: ${guess}, random number ${random}`
        }else{
            return `too low ...your guess: ${guess}, random number ${random}`
        }
  
     
    }()
}
console.log(guessingGame(55))

module.exports = { guessingGame };
