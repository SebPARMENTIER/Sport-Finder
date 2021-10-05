export function findSingle(results, searchedId) {
  const result = results.find((testedResult) => {
    return testedResult.id_association === searchedId;
  });
  return result;
}
