/**
 * A function to concatenate a tagged template literal and its substitutions.
 *
 * @param {TemplateStringsArray} strings - The raw strings from the template literal.
 * @param {...any} values - The substitution values in the template literal.
 * @returns {string} The resulting string, with substitutions inserted.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function twSort(strings: TemplateStringsArray, ...values: any[]): string {
  let result = '';
  strings.forEach((string, i) => {
    result += string + (values[i] || '');
  });
  return result;
}
