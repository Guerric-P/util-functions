function pair(arr, number = 2) {
  return arr.reduce(
    (acc, cur, i) =>
      i % number
        ? Object.assign([...acc], {
            [acc.length - 1]: [...acc[acc.length - 1], cur],
          })
        : [...acc, [cur]],
    []
  );
}

function groupNeighbors(arr) {
  return arr.reduce(
    (acc, cur, i, { [i - 1]: last }) =>
      (cur === last ? acc[acc.length - 1].push(cur) : acc.push([cur])) && acc,
    []
  );
}
