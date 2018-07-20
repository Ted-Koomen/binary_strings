const addBinary = (a, b) => {

  let indexA = a.length - 1;
  let indexB = b.length - 1;
  let carry = 0;
  let result = '';

  while (indexA >= 0 || indexB >= 0) {
    let bitA = indexA < 0 ? 0 : +a[indexA];
    let bitB = indexB < 0 ? 0 : +b[indexA];
    let val = bitA + bitB + carry;

    carry = val > 1 ? 1 : 0;
    result = val % 2 + result;

    indexA--;
    indexB--;
  }

  return carry > 0 ? carry + result : result;
};

console.log(addBinary('01110001', '11100011'))