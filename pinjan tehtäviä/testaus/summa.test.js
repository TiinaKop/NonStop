const summa = require('./summa'); //samassa hakemistossa ./
test('2 + 3 = 5', () => {
  expect(summa(2,3)).toBe(5);
});
