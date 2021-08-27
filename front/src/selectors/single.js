export function findSingle(results, searchedId) {
  const result = results.find((testedResult) => {
    return testedResult.id === Number(searchedId);
  });
  return result;
}

