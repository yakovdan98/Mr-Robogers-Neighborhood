# Mr-Robogers-Neighborhood
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep!"
Code: beepBoop(1);
Expected Output: [0, Beep!]

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep!"
Code: beepBoop(11);
Expected Output: [0, Beep!, 2, 3, 4, 5, 6, 7, 8 9, Beep!, Beep!]

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep! and 2 being replaced with Boop!"
Code: beepBoop(11);
Expected Output: [0, Beep!, Boop!, 3, 4, 5, 6, 7, 8 9, Beep!, Beep!]

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep! and 2 being replaced with Boop!"
Code: beepBoop(11);
Expected Output: [0, Beep!, Boop!, 3, 4, 5, 6, 7, 8 9, Beep!, Beep!]

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep!, 2 being replaced with Boop!, and 3 being replaced with Won't you be my neighbor?"
Code: beepBoop(11);
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8 9, Beep!, Beep!]