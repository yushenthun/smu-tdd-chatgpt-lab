# Test-Driven Development (TDD) using ChatGPT

# Lab setup

1. Fork from **smu-tdd-chatgpt-lab** main branch

2. Open in Codespace

3. All the required packages have been installed in Codespace

# Lab 1: FizzBuzz

**Objective:** In this lab, you will practise Test-Driven Development (TDD) by implementing the FizzBuzz algorithm using ChatGPT.

## Steps

### 1: Create FizzBuzz test file

1. Use this prompt in ChatGPT:

    **Prompt:** Create a test file called fizzbuzz.test.js and include a test to return Fizz if the number is divisible by 3 and return the number itself otherwise

2. Copy the code into **fizzbuzz.test.js**

### 2: Run test

```bash
npm run test fizzbuzz.test.js
```

You should see the test fails.

### 3: Create FizzBuzz implementation file

1. Use this prompt in ChatGPT:

    **Prompt:** Create an implementation file called fizzbuzz.js to return Fizz if the number is divisible by 3 and return the number itself otherwise

2. Copy the code into **fizzbuzz.js**

### 4: Run tests

Run test again to verify that the test passes

### 5: Add test to return Buzz if the number is divisible by 5

**Prompt:** Update fizzbuzz.test.js and add test to return Buzz if the number is divisible by 5

### 6: Run tests

Run test again to verify that the added test fails

### 7: Update implementation code to return Buzz if the number is divisible by 5

**Prompt:** Update fizzbuzz.js and to return Buzz if the number is divisible by 5

### 8: Run tests

Run test again to verify all the tests pass now

### 9: Refactor code

**Prompt:** Refactor the above code to use switch case statement instead of if/else conditions to check for divisibility by 3 and 5

### 10: Run tests

Run test again to verify all the tests pass after refactoring

### 11: Add test for FizzBuzz

**Prompt:** Update fizzbuzz.test.js and add test to return "FizzBuzz" if the number is divisible by both 3 and 5

### 12: Run tests

Run test again to verify that the added test fails

### 13: Update implementation to return FizzBuzz

**Prompt:** Update fizzbuzz.js to return "FizzBuzz" if the number is divisible by both 3 and 5

### 14: Run tests

Run test again to verify all tests pass now

### 15 (Optional): Refactor with switch case

**Prompt:** Refactor fizzbuzz.js to use switch case statement instead of multiple if/else conditions to check for divisibility by 3, 5 and both 3 and 5

### 16 (Optional): Run tests

Run test again to verify all tests pass after refactoring

### 17 (Bonus): Add test and then implementation code for parameter validation

Try to come out with your own prompt to pass invalid input parameter to fizzbuzz function and expect errors or exceptions. Follow the above steps for TDD.

# Lab 2: Simple Calculator

**Objective:** In this lab, you will practice Test-Driven Development (TDD) by implementing a simple calculator using ChatGPT.

## Steps

### 1: Create Calculator test file

1. Use this prompt in ChatGPT:

   **Prompt:** Create a test file called calculator.test.js and include a test to add two numbers together.

2. Copy the code into **calculator.test.js**.

### 2: Run test

```bash
npm run test calculator.test.js
```

The test should fail.

### 3: Create Calculator implementation file

1. Use this prompt in ChatGPT:

   **Prompt:** Create an implementation file called calculator.js to add two numbers together.

2. Copy the code into **calculator.js**.

### 4: Run tests

Run test again to verify that the test passes.

### 5: Add test to subtract two numbers

**Prompt:** Update calculator.test.js and add test to subtract two numbers.

### 6: Run tests

Run test again to verify that the added test fails.

### 7: Update implementation code to subtract two numbers

**Prompt:** Update calculator.js to subtract two numbers.

### 8: Run tests

Run test again to verify all the tests pass now.

### 9: Add test to multiply two numbers

**Prompt:** Update calculator.test.js and add test to multiply two numbers.

### 10: Run tests

Run test again to verify that the added test fails.

### 11: Update implementation code to multiply two numbers

**Prompt:** Update calculator.js to multiply two numbers.

### 12: Run tests

Run test again to verify all the tests pass now.

### 13: Add test to divide two numbers

**Prompt:** Update calculator.test.js and add test to divide two numbers.

### 14: Run tests

Run test again to verify that the added test fails.

### 15: Update implementation code to divide two numbers

**Prompt:** Update calculator.js to divide two numbers.

### 16: Run tests

Run test again to verify all tests pass now.

### 17 (Bonus): Add test and implementation code for division by zero

Try to come out with your own prompt to update calculator.test.js to add a test case for division by zero, and update calculator.js to handle the division by zero case by throwing an error. Follow the above steps for TDD.

### 18 (Bonus): Refactor code to use switch case

Try to come out with your own prompt to refactor code. Run tests again to verify all pass
