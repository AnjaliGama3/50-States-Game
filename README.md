# 50 States Game

I have implemented a game about the 50 states in the US.

The goal of the game is to input all 50 states within a time limit. If the user inputs all the states within the time limit, the user wins. Else, the user loses. When the user hovers over a state, the number of Spanish speakers in that state is displayed.

## Objective
Used and learnt how Javascript interacts with the DOM and AJAX to interacts with APIs.


## Specifications:

- Input field to enter states.
- State should be submitted when full state is typed. No need to hit enter.
- Input is case insensitive.
- Display a continuously updated list of states the user has inputed correctly.
- Timer is set to 20 seconds displayed prominently and counts down every second. 
- When timer ends:
    -  Disable input field
    - Display score (states correct / total states)
    - Display which states the user did not get separately
- If user finishes before timer ends:
    - Stop timer
    - Display "You win!" or some clear indication that the user has won.
-  If a user hovers over any state name on the screen at any point, you should display the number of Spanish speakers in that state. You can choose how to display the number, but it should be easily visible. Also, print the number of Spanish speakers with commas as thousands separators (use commas every three decimal places in numbers of four or more digits, counting right to left).

## Tips:

Use the **census.gov** API to get Spanish speaker data.

Documentation for the API can be found here: [Language Statistics: ACS (2013)](https://www.census.gov/data/developers/data-sets/language-stats.html)

This URL should help you out:
https://api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:06&LAN=625

In the returned JSON, "EST" stands for estimation of the number of Spanish speakers in a particular state and corresponds to the first number that is returned.

For example, in the following JSON object that the URL returns, the number of Spanish speakers in the state with code `06` is `10105385`.
`[["EST","LAN","state"],
["10105385","625","06"]]`
