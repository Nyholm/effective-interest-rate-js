
describe('Given an instance of EffectiveInterestCalculator', function () {
  beforeEach(function () {});
  afterEach(function(){});

  describe('it calculates correct', function () {
    it('with example 0', function () {
      expect(EffectiveInterestCalculator.withEqualPayments(1,21,1,1)).toBe(0.045);
    });
  });
});
