function FactorialWithRecursion(n) {
  if (n == 1) {
    return 1;
  }
  return n * FactorialWithRecursion(n - 1);
}

console.log(FactorialWithRecursion(5));
