
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length) return [];
  let val = [];
  matrix.forEach((x, i) => {
      if (i % 2 == 0)
          Array.prototype.push.apply(val, x);
      else
          Array.prototype.push.apply(val, x.reverse());
  });
  return val;
}
