const { checkDuplicateAid } = require('../src/app');

test('detect duplicate aid', () => {
  const existing = { category: 'Food', beneficiaryId: 1 };
  const incoming = { category: 'Food', beneficiaryId: 1 };

  expect(checkDuplicateAid(existing, incoming)).toBe(true);
});
