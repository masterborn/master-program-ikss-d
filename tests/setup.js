import 'jest-styled-components';
import '@testing-library/jest-dom';

expect.extend({
  optional(v, value) {
    const pass = typeof v === 'undefined' || v === value;
    return {
      pass,
      message: () => `Expected ${value} to ${pass ? 'not ' : ''}be undefined or ${value}`,
    };
  },
  toBeTypeOrNull(received, argument) {
    if (received === null)
      return {
        message: () => `Ok`,
        pass: true,
      };
    if (expect(received).toEqual(expect.any(argument))) {
      return {
        message: () => `Ok`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be ${argument} type or null`,
        pass: false,
      };
    }
  },
});
