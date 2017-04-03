
describe('Given an instance of EffectiveInterestCalculator', function () {
  beforeEach(function () {});
  afterEach(function(){});

  describe('it calculates correct', function () {
    describe('with example 0', function () {
      it('should return false', function () {
        expect((new EffectiveInterestCalculator()).withEqualPayments(1,21,1,1)).to.be.value(0.045);
      });
    });
  });


});
