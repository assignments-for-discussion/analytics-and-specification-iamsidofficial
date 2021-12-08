
function average(numbers) {
  const num2 = numbers.filter( value => !Number.isNaN(value) );
  return num2.reduce((p, c)=> p + c, 0) / num2.length;
}

module.exports = {average};
