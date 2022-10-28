# Mr-Rodgers-Neighborhood

## Contributers
* Daniel Yakovlev

## Description
A website that takes 2 inputs a name and a number. It will then output a list of numbers counting to the output number from 0. Every number with a 1 will be replaced with Beep!, with a 2 replaced with Boop!, and with a 3 replaced with Won't you be my neighbor, [name]?

## Github Pages Link
<https://yakovdan98.github.io/Mr-Rodgers-Neighborhood/>

## Technologies Used

* _github_
* _vs code_
* _CSS_
* _HTML_
* _javascript_
* _bootstrap_

## Application Setup Github Pages
1. Open with link <https://yakovdan98.github.io/Mr-Rodgers-Neighborhood/>

## Application Setup Local
1. download repository from <https://github.com/yakovdan98/Mr-Rodgers-Neighborhood>
2. open index.html in desired browser

## Known Bugs

* _none_

## License

MIT License

Copyright (c) 2022 yakovdan98

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

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

Test: "It should return an array of numbers from 0 to the user's inputted number with numbers containing 1 being replaced with Beep!, 2 being replaced with Boop!, and 3 being replaced with Won't you be my neighbor, [name]?"
Code: beepBoop(11, dan);
Expected Output: [0, Beep!, Boop!, Won't you be my neighbor, dan?, 4, 5, 6, 7, 8 9, Beep!, Beep!]