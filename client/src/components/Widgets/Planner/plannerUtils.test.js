const getPlannerYear = require('./plannerUtils');

test('getYear return this year', () => {
    expect(getPlannerYear()).toBe(2021);
  });