import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.muliply()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.multiply(1)).toBe(null);
  });
  it('multiplies positive number correctly', () => {
    expect(helpers.multiply(2, 3)).toBe(6);
  });
  it('multiplies negative number correctly', () => {
    expect(helpers.multiply(-5, -5)).toBe(-25);
  });
  it('only multiplies integers', () => {
    expect(helpers.multiply(2.25, 3.75)).toThrow();
  });
  it('throws if fed a string', () => {
    expect(() => helpers.multiply('1', '2')).toThrow();
  });
  it('throws if fed a boolean', () => {
    expect(() => helpers.multiply(true, true)).toThrow();
  });
  it('wont multiply three numbers', () => {
    expect(helpers.multiply(1, 2, 3)).toBe(2);
    expect(helpers.multiply(1, 2, 3)).not.toBe(6);
  });
  // write tests! <================================================
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  it('will accept new string for name', () => {
    expect(helpers.personMaker('Jayne', 3))
      .toMatchObject({
        id: '123',
        name: 'Jayne',
        age: 3,
      });
  });

  it('wont accept number for name', () => {
    expect(helpers.personMaker(2, 3)).toThrow();
  });

  // write more tests! <===========================================
});
