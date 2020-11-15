export function fibo(n) {
  if (n <= 1) {
    return 1
  }
  return fibo(n - 1) + fibo(n - 2)
}

export function memorizer(fun) {
  const cache = {}
  return function (num) {
    if (cache[num] !== undefined) {
      return [cache[num], true]
    }
    const result = fun(num)
    cache[num] = result
    return [result, false]
  }
}

export const fiboMemorizer = memorizer(fibo)
