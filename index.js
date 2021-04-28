function pair(items, number = 2) {
  return items.reduce(
    (acc, cur, i) =>
      i % number
        ? Object.assign([...acc], {
            [acc.length - 1]: [...acc[acc.length - 1], cur],
          })
        : [...acc, [cur]],
    []
  );
}
