module.exports = function toReadable (number) {
  let Arr = [];
  Arr[0] = 'zero';Arr[1] = 'one';Arr[2] = 'two';Arr[3] = 'three';Arr[4] = 'four';Arr[5] = 'five';Arr[6] = 'six';Arr[7] = 'seven';Arr[8] = 'eight';Arr[9] = 'nine';
  Arr[10] = 'ten';Arr[11] = 'eleven';Arr[12] = 'twelve';Arr[13] = 'thirteen';Arr[14] = 'fourteen';Arr[15] = 'fifteen';
  Arr[16] = 'sixteen';Arr[17] = 'seventeen';Arr[18] = 'eighteen';Arr[19] = 'nineteen';
  Arr[20] = 'twenty';Arr[30] = 'thirty';Arr[40] = 'forty';Arr[50] = 'fifty';Arr[60] = 'sixty';Arr[70] = 'seventy';Arr[80] = 'eighty';Arr[90] = 'ninety';
  for (i=20; i<=99; i++) {
    let div = Math.floor(i/10);
    let mov = i%10;
    let index = div*10;
    //console.log(Arr[i]);
    Arr[i] = (mov>0)?(Arr[index] + " " + Arr[mov]):Arr[i];
    //console.log(Arr[i]);
    // console.log(`${Arr[div*10]}+${Arr[mov]}`);

  }
  //////////////////////////////////////////////
  if (number>999) return 0;
  if (number<=99) return Arr[number];
  let result, rest, hundred;
  hundred = Math.floor(number/100);
  result = Arr[hundred] + " hundred";
  rest = number%100;
  return `${result}${rest>0?(' '+Arr[rest]):''}`;
}
