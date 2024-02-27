export function dataObjects(input, className) {
  return input.map((each, i) => ({
    key: i,
    title: each,
    className,
  }));
}
