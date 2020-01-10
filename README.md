# JavaScript Assessment - Teaching Assistant

The All Star Code Teaching Assistant JavaScript Assessment consists of 3 tasks, to be completed and turned in to dante@allstarcode.org as a GitHub gist.

## IT IS NOT NECESSARY PASS ALL TEST SPECS TO GET HIRED. JUST DO YOUR BEST! :smile:

### Steps to Tackling the Assessment
1. Clone or download this repo.

2. Navigate into the repo from command line and before doing anything else, run the command `npm install`.
    - If any error occurs, run `npm init`. Hit enter for all the questions and enter `npm install` again.
    - If command is not found for `npm install` or `npm init`, install node.js here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and repeat step #2.

3. Follow the prompts for each task and do your best!
<br>

### Notes
- The tests folder contains test files in which your functions will be tested with. Feel free to look at the tests, but **DO NOT** edit them. These exact tests will be used to test your answers when you submit your work.
- **Info on testing your work with the provided test specs is included at the <a href="#tests">end of the document.</a>**

---

## Task #1 - Define a `Pokemon` Class
- Write your code in **pokemon.js** in the cloned or downloaded folder.
- Construct and initialize a `Pokemon` object by passing in 5 arguments that corresponds to the following 5 properties in order: `.name`, `.attack`, `.defense`, `.health`, and `.type`.
   - Example:
       ```javascript
        const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
        console.log(charmander.name);    // charmander
        console.log(charmander.attack);  // 12
        console.log(charmander.defense); // 8
        console.log(charmander.health);  // 30
        console.log(charmander.type);    // fire
       ```
   - Data type validation is not needed. You can assume that the following `property`: type pairing is always used:
      * `.name`: string
      * `.attack`: number
      * `.defense`: number
      * `.health`: number
      * `.type`: string

<br>

## Task #2 - `takeDamage()` Method
- Implement a `takeDamage()` method for the `Pokemon` class which takes a number as an argument and reduces the `.health` of the `Pokemon` by that number.
   - _Note: If `.health` goes below 0, it should be set to 0 instead._
   - Example:
       ```javascript
        console.log(charmander.health);  // 30

        charmander.takeDamage(5);
        console.log(charmander.health);  // 25

        charmander.takeDamage(2000);
        console.log(charmander.health);  // 0
       ```

<br>

## Task #3 - `attackOpponent()` Method
- Implement an `attackOpponent()` method for the `Pokemon` class which takes a `Pokemon` object as an argument (the opponent being attacked). This method should call the `takeDamage()` method of the opposing `Pokemon` and provide the appropriate damage as an argument.
   <br>
`DAMAGE = CURRENT_POKEMON_ATTACK - OPPONENT_POKEMON_DEFENSE`.
   - Example:
       ```javascript
        const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
        const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison");

        console.log(charmander.attack);  // 12
        console.log(bulbasaur.defense);  // 9
        // 12 attack - 9 defense = 3 damage

        console.log(bulbasaur.health);  // 35
        charmander.attackOpponent(bulbasaur);  // charmander attacks bulbasaur
        console.log(bulbasaur.health);  // 32
       ```
   - Attacking a `Pokemon` should do 1 damage __at the very least__. Consider cases in which the `Pokemon` being attacked has a higher `.defense` than the `.attack` of the attacking `Pokemon`.

<br>

## Task #4 - `display()` Method
- Implement a `display()` method for the `Pokemon` class which takes no arguments and returns a string with the Pokemon's `.name` in all caps, `.type` in all caps and in parenthesis, and `.health` with a forward-slash, " / ", followed by the `.health` the `Pokemon` was initialized with.
   - Example:
       ```javascript
        const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric");
        pikachu.display();  // PIKACHU (ELECTRIC) 25/25

        pikachu.health = 12;
        pikachu.display();  // PIKACHU (ELECTRIC) 12/25
       ```

   <br>

---

## EXTRA CREDIT CHALLENGES
*The extra credit challenges are optional, but highly recommended. Only attempt this if you've passed all the tests for Task #1 - #4.
    <br>
Please note that test cases for the extra credit challenges are not included in this repo.*

### **Context**
In Pokemon, as you may already know, a Pokemon trainer can encounter wild Pokemon by walking through wild grass. The chance of an encounter can be represented by the following equation:


`chance = (val / 187.5) * 100`

- *chance* : chance of encountering a wild Pokemon
- *val* : numerical value based on the `.rarity` of a Pokemon

Before proceeding, declare a new property for your `Pokemon` object - `.rarity` that holds a string. No data validation needed.

| Rarity | Numerical Value *(val)* |
|:------:|:---------------------:|
|Very Common | 12|
| Common | 8.5   |
| Semi-rare | 6.75 |
| Rare | 3.33 |
| Very Rare | 1.25 |

<br>

## EC Task - checkGrass() Method
- Implement a `checkGrass()` method for the `Pokemon` class which takes two arguments - a tile and an array of `Pokemon` objects in the given order: `checkGrass(tile, pokemonArr)`
- Check the tile:
   - If the tile input is not `'░'` (ground) or `'▓'` (grass), throw a TypeError with the message: `"Input is not a tile"`
   -  If the tile input is `'░'` (ground), return `0` as there is no chance of encountering a Pokemon there.
   - If the tile input is `'▓'` (grass), return an object that consists of `key: value` pairs derived from the Pokemon array where:
       - Key: `.name` of each `Pokemon`
       - Value: the calculated `chance` (`chance = (val / 187.5) * 100`) of encountering that `Pokemon` based on its `.rarity` rounded to the nearest integer.
       - Example:
            ```
           {
              pokemon_name1: chance1,
              pokemon_name2: chance2
           }
           ```
       - If the array of `Pokemon` objects is not an array, throw a TypeError with the message: `"Not an array"`.
        - If any of the `Pokemon` in the array does not have a value for `.rarity`, throw a TypeError with the message: `"Missing rarity"`.
        - If any of the `Pokemon` in the array has a rarity that is not defined in the table above (Very Common, Common, Semi-rare, Rare, Very Rare), throw a TypeError with the message: `"Invalid rarity"`.
    - Example:
        ```javascript
        const charmander = new Pokemon("charmander", 12, 8, 30, "fire", "Rare");
        const bulbasaur = new Pokemon("bulbasaur", 7, 9, 35, "grass/poison", "Common");
        const pikachu = new Pokemon("pikachu", 9, 10, 25, "electric", "Very Rare");

        console.log(charmander.checkGrass('▓', [bulbasaur, pikachu]));  // { bulbasaur: 5, pikachu: 1 }
        ```

<br>

---

<h2 id="tests"> TESTING YOUR POKEMON CLASS</h2>
- The tests are setup with commands to test your answers for each individual task. This will only work properly if there are:
    - No errors for `npm install` command
    - No modifications to any files in the `tests` folder
    - No modifications to any scripts commands in the `package.json` file
    - No modifications to `module.exports` at the end of `pokemon.js`

- Use the following command to test your work in the cloned or downloaded folder:
    - `npm run test` to test your Pokemon class and methods.
<br>

The output for a test:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
Snapshots:   0 total
Time:        1.781s
Ran all test suites matching /tests\\pokemon.test.js/i.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! teachingFellows@1.0.0 test_string: `jest tests/pokemon.test.js`
npm ERR! Exit status 1
```
Your output may look different based on the specific task and the number of tests passed/failed.
<br><br>
Take note of these 2 lines:

```shell
Test Suites: 1 failed, 1 total
Tests:       7 failed, 1 passed, 8 total
```

The output above indicates that the function only passed 1 out 8 tests :cry:
<br>
You can scroll up the console to diagnose the errors by comparing the expected outputs and what your function returned.

For example:
```shell
    Expected: "string"
    Received: "undefined"

      11 |     it('should properly initialize all 5 traits', () => {
      12 |         const charmander = new Pokemon('Charmander', 100, 110, 130, 'fire');
    > 13 |         expect(typeof charmander.name).toBe('string');
         |                                        ^
```

The test failed because the program expected the output of `typeof charmander.name` to be `'string'`, but received the output `undefined` instead.

Your solutions will be tested with these exact test files. Your goal is to have your functions pass as many tests as possible.
<br>
**REMEMBER: IT IS NOT NECESSARY TO PASS ALL TESTS TO BE HIRED. PLEASE SUBMIT WHATEVER YOU MANAGE TO COMPLETE!**