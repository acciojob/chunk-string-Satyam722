function stringChop(str, size) {
  // Edge case: if str is null, undefined, or size is invalid
  if (!str || size <= 0) return [];

  const result = [];

  // Loop through string and extract chunks of given size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
