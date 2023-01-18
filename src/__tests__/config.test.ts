const atplibConfig = require('../../config');

describe('atpLib configuration', () => {
  it('should include right defaults for `content` field', () => {
    expect(
      atplibConfig({
        content: ['./app/**/*.{ts,tsx,jsx,js}'],
      }).content
    ).toEqual({
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/atp-react-ui/lib/defaultTheme.js',
        'node_modules/atp-react-ui/dist/index.js',
      ],
    });
  });

  it('should include right defaults for `content` when passing as object', () => {
    expect(
      atplibConfig({
        content: {
          files: ['./app/**/*.{ts,tsx,jsx,js}'],
        },
      }).content
    ).toEqual({
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/atp-react-ui/lib/defaultTheme.js',
        'node_modules/atp-react-ui/dist/index.js',
      ],
    });
  });

  it('should include right defaults for `content` with additional fields', () => {
    expect(
      atplibConfig({
        content: {
          relative: true,
          files: ['./app/**/*.{ts,tsx,jsx,js}'],
        },
      }).content
    ).toEqual({
      relative: true,
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/atp-react-ui/lib/defaultTheme.js',
        'node_modules/atp-react-ui/dist/index.js',
      ],
    });
  });
});
