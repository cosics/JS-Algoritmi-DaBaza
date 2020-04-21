//
/*function isPrime(n) {
  var div = 2;

  while (n > div) {
    if (n % div === 0) {
      return false;
    } else {
      div++;
    }
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237)); */

//

/*function primeFactors(n) {
  var factors = [];
  div = 2;

  while (n > 2) {
    if (n % div === 0) {
      factors.push(div);
      n = n / div;
    } else {
      div++;
    }
  }
  return factors;
}

console.log(primeFactors(69)); */

//
/*function fibonacci(n) {
  var fibo = [0, 1];
  var fb = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    fibo.push(fibo[i]);
  }
  return fibo;
}
console.log(fibonacci(7)); */

//
/*function cmmdc(a, b) {
  var div = 2;
  cmmdc = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= div && b >= div) {
    if (a % div === 0 && b % div === 0) {
      cmmdc = div;
    }
    div++;
  }
  return cmmdc;
}
console.log(cmmdc(14, 21)); */

//anagram
/*function anagram(str1, str2) {
  function sortedStr(str) {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  return sortedStr(str1) === sortedStr(str2);
}

console.log(anagram("IAmLordVoldemort", "TomMarvoloRiddle"));
*/

//palindrom
/*function palindrom(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

console.log(palindrom("racecar")); */

//rev num
/*function revInt(n) {
  let revNum = parseInt(
    String(n)
      .split("")
      .reverse()
      .join("")
  );
  return n >= 0 ? revNum : revNum * -1;
}
console.log(revInt(125));
*/

//fizzbuzz
/*function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log("i");
    }
  }
}

console.log(fizzBuzz(16)); */

//missing nr arr
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findMissing = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] != arr[i] + 1) {
      return arr[i] + 1;
    }
  }
  return "Numere consecutive.";
};
console.log(findMissing(arr)); */

//find double
/*const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const findDupes = arr => {
  const observed = {};
  for (let i = 0; i < arr.length; i++) {
    if (observed[arr[i]]) {
      return arr[i];
    } else {
      observed[arr[i]] = arr[i];
    }
  }

  return false;
};
console.log(findDupes(arr)); */

//max min
/*const arr = [1, 2, 3, 4, 100];
const findMaxMin = arr => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return {
    max: max,
    min: min
  };
};
console.log(findMaxMin(arr)); */
