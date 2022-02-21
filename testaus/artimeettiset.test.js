const { lisays, kerto, jako, vahennys } = require('./artimeettiset');
test('2 + 3 = 5', () => {
  expect(lisays(2,3)).toBe(5);
});
test('2 * 3 = 6', () => {
  expect(kerto(2,3)).toBe(6);
});
test('4 / 2 = 2', () => {
  expect(jako(4,2)).toBe(2);
});
test('3 - 2 = 1', () => {
  expect(vahennys(3,2)).toBe(1);
});
