/* eslint-disable import/prefer-default-export */
// Find the wanted association in results
export function findSingle(results, searchedId) {
  const result = results.find((testedResult) => testedResult.id_association === searchedId);
  return result;
}
