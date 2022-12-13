function fibba(x) {
  if (x < 2) return 1;
  return fibba(x - 1) + fibba(x - 2);
}

const result = fibba(10);
console.log(result);
