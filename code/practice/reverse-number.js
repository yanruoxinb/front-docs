function reverse(n) {
    let y = n % 10;
    let s = String(y);
    if (n / 10 >= 1) {
      s += reverse((n - y) / 10);
    }
    return s;
  }

  console.log(reverse(1234));
  console.log(reverse(12));
  console.log(reverse(4));