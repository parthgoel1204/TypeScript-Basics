function formLargestNumber(arr: number[]): string {
  if (arr.length === 0) return "";

  // Convert numbers to strings
  const strs: string[] = arr.map(String);

  // Custom sort
  strs.sort((a, b) => (b + a).localeCompare(a + b));

  // Edge case: if largest is "0", result is "0"
  if (strs[0] === "0") return "0";

  return strs.join("");
}

const input: number[] = [3, 30, 34, 5, 9];
formLargestNumber(input);

export default formLargestNumber;
