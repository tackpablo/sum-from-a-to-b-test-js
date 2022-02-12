function sum(fromN, toN) {
  // if start and end are equal
  if (fromN === toN) {
    // return the end value
    return toN;
  } else {
    // otherwise return start + the sum(start++, end)
    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;
