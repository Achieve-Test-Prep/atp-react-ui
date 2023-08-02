// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function twSort(strings: TemplateStringsArray, ...values: any[]): string {
  let result = '';
  strings.forEach((string, i) => {
    result += string + (values[i] || '');
  });
  return result;
}
