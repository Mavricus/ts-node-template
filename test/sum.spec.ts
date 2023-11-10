import { sum } from '../src/sum';

describe('sum', () => {
  it('should sum integers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 0)).toBe(1);
    expect(sum(1, -2)).toBe(-1);

    expect(sum(0, 2)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, -2)).toBe(-2);

    expect(sum(-1, 2)).toBe(1);
    expect(sum(-1, 0)).toBe(-1);
    expect(sum(-1, -2)).toBe(-3);
  });

  it('should sum floats', () => {
    expect(sum(1.1, 2.1)).toBe(3.2);
    expect(sum(1.2, 0.0)).toBe(1.2);
    expect(sum(1.1, -2.2)).toBe(-1.1);

    expect(sum(0.0, 2.2)).toBe(2.2);
    expect(sum(0.0, 0.0)).toBe(0.0);
    expect(sum(0.0, -2.2)).toBe(-2.2);

    expect(sum(-1.1, 2.2)).toBe(1.1);
    expect(sum(-1.2, 0.0)).toBe(-1.2);
    expect(sum(-1.2, -2.1)).toBe(-3.3);
  });

  it('should sum integers and floats', () => {
    expect(sum(1, 2.2)).toBe(3.2);
    expect(sum(1, 0.0)).toBe(1.0);
    expect(sum(1, -2.1)).toBe(-1.1);

    expect(sum(0, 2.2)).toBe(2.2);
    expect(sum(0, 0.0)).toBe(0.0);
    expect(sum(0, -2.2)).toBe(-2.2);

    expect(sum(-1, 2.2)).toBe(1.2);
    expect(sum(-1, 0.0)).toBe(-1.0);
    expect(sum(-1, -2.2)).toBe(-3.2);

    expect(sum(1.1, 2)).toBe(3.1);
    expect(sum(1.1, 0)).toBe(1.1);
    expect(sum(1.1, -2)).toBe(-0.9);

    expect(sum(0.0, 2)).toBe(2.0);
    expect(sum(0.0, 0)).toBe(0.0);
    expect(sum(0.0, -2)).toBe(-2.0);

    expect(sum(-1.1, 2)).toBe(0.9);
    expect(sum(-1.1, 0)).toBe(-1.1);
    expect(sum(-1.1, -2)).toBe(-3.1);
  });
});
