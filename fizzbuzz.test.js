const fizzBuzz = require('./fizzbuzz');

test('returns "Fizz" if the number is divisible by 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
});

test('returns the number itself if it is not divisible by 3', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(4)).toBe(4);
});
