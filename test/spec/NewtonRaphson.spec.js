
describe('Given an instance of NewtonRaphson', function () {
  beforeEach(function () {
  });
  afterEach(function(){});

  describe('it calculates correct', function () {
      it('with example 0', function () {
        var a = 11200;
        var p = 291;
        var n = 48;

        var fx = function (i) {
          return  p - p * Math.pow(1 + i, -1 * n) - i * a;
        };

        var fdx = function (i) {
          return  n * p * Math.pow(1 + i, -1 * n - 1) - a;
        };

        expect(12 * NewtonRaphson.run(fx, fdx, 0.12)).toBe(0.1128);
      });

    });
});
