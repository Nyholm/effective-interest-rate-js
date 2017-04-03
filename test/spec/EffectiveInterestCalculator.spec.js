
describe('Given an instance of EffectiveInterestCalculator', function () {
  beforeEach(function () {});
  afterEach(function(){});

  describe('it calculates correct', function () {
    describe('(equal payments)', function () {
      it('with example 0', function () {
        expect(EffectiveInterestCalculator.withEqualPayments(11200, 291, 48, 0.02)).toBe(0.1128);
      });
      it('with example 1', function () {
        expect(EffectiveInterestCalculator.withEqualPayments(100000, 240, 48, 0.03)).toBe(0.0712);
      });
    });
  });
});
