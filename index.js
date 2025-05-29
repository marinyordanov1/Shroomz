function compareDateStrings(s1, s2) {
  const d1 = Date(s1);
  const d2 = Date(s2);
  const delta = d2 - d1;
  return `${s1} is ${delta > 0 ? "after" : "before"} ${s2}`;
}

console.log(compareDateStrings(1, 2));
