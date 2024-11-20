function sequentialSymlog(arr, base, threshold) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < threshold) {
      result.push(0);
    } else {
      result.push(Math.log(arr[i]) / Math.log(base));
    }
  }
  return result;
}
