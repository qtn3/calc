const Calculation = require('../src/models/Calculation');
test('Test of Calculation Instantiation', () => {
    let calculation = new Calculation(1, 2, "sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("sum");
});
test('Test Get results function', () => {
    let calculation = new Calculation(1, 2, "sum");
    expect(calculation.GetResults()).toBe(3);
});