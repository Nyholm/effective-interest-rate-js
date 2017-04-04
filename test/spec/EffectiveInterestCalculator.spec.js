
describe('Given an instance of EffectiveInterestCalculator', function () {
  beforeEach(function () {});
  afterEach(function(){});

  describe('it calculates correct', function () {
    describe('(equal payments)', function () {
      it('with example 0', function () {
        expect(round(EffectiveInterestCalculator.withEqualPayments(11200, 291, 48, 0.02), 4)).toBe(0.1128);
      });
      it('with example 1', function () {
        expect(round(EffectiveInterestCalculator.withEqualPayments(100000, 2400, 48, 0.03), 4)).toBe(0.0712);
      });
    });
    describe('(specified payments)', function () {
      it('with example 0', function () {
        var payments = {
          '2017-02-28': 2457,
          '2017-10-11': 51000,
          '2018-01-10': 40000,
          '2019-02-10': 64000,
        };
        expect(round(EffectiveInterestCalculator.withSpecifiedPayments(140000, '2017-01-30', payments, 0.08), 4)).toBe(0.0966);
      });
      it('with example 1', function () {
        expect(round(EffectiveInterestCalculator.withEqualPayments(100000, 2400, 48, 0.03), 4)).toBe(0.0712);
      });
    });
  });
});

function round(value, decimals) {
  var multiplier = Math.pow(10, decimals);

  return Math.round(value * multiplier) / multiplier;
}