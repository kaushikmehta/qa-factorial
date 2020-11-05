# Testing the Factorial Calculator
This repository contains test cases and bug reports for [this factorial calculator](https://qainterview.pythonanywhere.com/)

## Bugs
3 bugs were identified while inspecting the behavior of the application.
  - [Maximum Input Value](bug-reports/Bug-Maximum-Input-Value.md): Factorial calculators are able to calculate the factorial of both positive and negative integers with most maxing out at the factorial of 170. Beyond 170, the factorial should should be 'undefined'. 
  - [Negative Integer](bug-reports/Bug-Negative-Factorial.md): Factorial calculators are able to calculate the factorial of both positive and negative integers. Upon inspection, it looks like the factorial calculator online can only calculate the factorial of positive integers.
  - [Enter does not submit](bug-reports/Bug-Enter.md): Implicit submission is vital to assistive technologies and impaired users that cannot use a mouse at all. When using a form online, the user should be able to trigger the submission of an input box.

  ## Test cases
When writing automated tests for the calculator, I decided to write 3 tests. The first was to test the 'happy path', this is when the user enters a positive integer less than or equal to 170. The second one was to test for when the user enters a negative number and the final one was to test what happens when the user enters a number greater than 170.

## Setup and Running tests
In order to run the tests, clone this repository
`git clone https://github.com/kaushikmehta/qa-factorial.git`

Navigate to the directory and intall dependencies by running
`npm install`

To run the tests, run
`npm test`

