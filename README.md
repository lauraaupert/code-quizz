# code-quizz

This was supposed to be a code quiz but turned out to be a mess. There were probably countless ways of doing this in a DRYer manner, but the more I tried and the messier it got. 
What it does: Asks for initials for the player and stores them
Is polite by welcoming the player
Starts the quiz with a button
Displays a question with three different choices and moves on to the next question once one of the choices is clicked
*Should* count +1 for every right answerSubtracts 10 seconds from the timer for every wrong answer (success!)
When the timer runs out, goes to a "game over" screen that allows to restart the game
If all three questions are answered, it displays "All done!" and offers to display the player's score
It then offers to display the high scores but the button does nothing (apart from inflicting great despair)

Challenges:
Somehow, the score does not count +1 correctly, the local storage is not doing what I want, my buttons were all centered and now aren't 
(I think I just fixed this), but at least the timing elements work (yay!). I tried a variety of ways to display the high scores but there must
be something wrong with the way I use local storage or append the scores. I am unsure whether I should use a loop, a list, or anything else to make 
it work. Maybe I don't even need local storage and got lost? I wanted to use booleans linked to each option of the answers to be able to write 
less functions depending on when a true answer is clicked as opposed to a false answer but I haven't figured out how to target that part of the object with a click event. Also, the success message when initials are entered that stopped appearing; I added a timeout function but that feels awkward (but it works!). My restart button refreshes the page - which is not exactly what I wanted to do (I wanted to reset) but ran out of time. I found it easier to keep it up there so it doesn't get in the way and is always accessible. 
Let's say the whole still needs some work! 

Here is the link: https://lauraaupert.github.io/code-quizz/
